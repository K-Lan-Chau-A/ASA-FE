import { useEffect, useMemo, useState } from 'react'
import API_URL from '@/config/api'
import provinces from '@/constant/donViHanhChinh34TinhThanh.json'
import vietQrBanks from '@/constant/vietQrBank.json'

const BuyPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    houseNumber: '',
    provinceCode: '',
    wardCode: '',
    wardName: '',
    bankCode: '',
    bankNum: '',
    agreeTerms: false,
    agreeMarketing: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showQrModal, setShowQrModal] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const selectedProvince = useMemo(() => {
    return provinces.find(p => p.code === formData.provinceCode) || null
  }, [formData.provinceCode])

  const wardOptions = useMemo(() => {
    return selectedProvince?.wards ?? []
  }, [selectedProvince])

  const selectedWard = useMemo(() => {
    return wardOptions.find(w => w.code === formData.wardCode) || null
  }, [wardOptions, formData.wardCode])

  const bankOptions = useMemo(() => {
    return (vietQrBanks?.data ?? [])
  }, [])

  const selectedBank = useMemo(() => {
    return bankOptions.find(b => b.code === formData.bankCode) || null
  }, [bankOptions, formData.bankCode])

  const buildAddress = () => {
    const parts = []
    if (formData.houseNumber) parts.push(formData.houseNumber)
    const wardName = formData.wardName || selectedWard?.name
    if (wardName) parts.push(wardName)
    if (selectedProvince?.fullName) parts.push(selectedProvince.fullName)
    return parts.join(', ')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = {
        productId: 2,
        totalPrice: 300000,
        paymentMethod: "2",
        discount: 0,
        createdAt: new Date().toISOString(),
        phonenumber: formData.phone,
        shopName: formData.businessName,
        address: buildAddress(),
        bankName: selectedBank?.name ?? '',
        bankCode: selectedBank?.code ?? '',
        bankNum: formData.bankNum,
        fullname: formData.ownerName,
        email: formData.email
      }

      console.log('🛒 Buy Submit - API URL:', `${API_URL}/api/orders`)
      console.log('🛒 Buy Submit - Payload:', payload)

      // Step 1: Create order
      const res = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || `Request failed with ${res.status}`)
      }

      const orderData = await res.json()
      const createdOrderId = orderData.data?.orderId

      if (!createdOrderId) {
        throw new Error('Order ID not received')
      }

      console.log('✅ Order created with ID:', createdOrderId)

      // Step 2: Get QR code
      const qrRes = await fetch(`${API_URL}/api/sepay/vietqr?orderId=${createdOrderId}`)
      
      if (!qrRes.ok) {
        const text = await qrRes.text()
        throw new Error(text || `QR request failed with ${qrRes.status}`)
      }

      const qrData = await qrRes.json()
      const qrUrl = qrData?.url

      if (!qrUrl) {
        throw new Error('QR code URL not received')
      }

      console.log('✅ QR code received:', qrUrl)

      // Show QR modal
      setQrCodeUrl(qrUrl)
      setShowQrModal(true)
      setOrderId(createdOrderId)
      setIsSubmitting(false)
    } catch (err) {
      console.error('Buy submit failed:', err)
      alert('Gửi đăng ký mua gói thất bại. Vui lòng thử lại sau.')
      setIsSubmitting(false)
    }
  }

  // Poll order status when QR modal is open
  useEffect(() => {
    if (!showQrModal || !orderId) return

    let isCancelled = false
    const intervalId = setInterval(async () => {
      try {
        const res = await fetch(`${API_URL}/api/orders?OrderId=${orderId}`)
        if (!res.ok) return
        const data = await res.json()
        const status = data?.items?.[0]?.status
        if (status === 1 && !isCancelled) {
          setShowQrModal(false)
          setShowSuccessModal(true)
          clearInterval(intervalId)
        }
      } catch {}
    }, 2000)

    return () => {
      isCancelled = true
      clearInterval(intervalId)
    }
  }, [showQrModal, orderId])

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Đơn hàng đã được tạo thành công!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Cảm ơn bạn đã lựa chọn ASA. Vui lòng kiểm tra email để xác nhận thanh toán và nhận thông tin kích hoạt từ chúng tôi.
            </p>

            <button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-[#009DA5] to-[#00C8D4] hover:from-[#007a82] hover:to-[#00a6b0] text-white font-semibold px-8 py-3 rounded-[15px] transition-all"
            >
              Về trang chủ
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <img src="/logoASA.png" alt="ASA Logo" className="h-40 mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mua gói ASA
          </h1>
          <p className="text-lg text-gray-600">
            Điền thông tin để chúng tôi hỗ trợ kích hoạt gói dịch vụ
          </p>
        </div>

        <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Thông tin cửa hàng
            </h2>
            <p className="text-gray-600 text-center">
              Vui lòng điền thông tin chính xác để hỗ trợ thanh toán và kích hoạt
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Tên cửa hàng *</label>
                <input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="VD: Cửa hàng ABC"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Tên chủ cửa hàng *</label>
                <input
                  id="ownerName"
                  value={formData.ownerName}
                  onChange={(e) => handleInputChange('ownerName', e.target.value)}
                  placeholder="VD: Nguyễn Văn A"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Số điện thoại *</label>
                <input
                  id="phone"
                  type="number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="VD: 0901234567"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="VD: abc@gmail.com"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-2">
                <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700">Số nhà, đường *</label>
                <input
                  id="houseNumber"
                  value={formData.houseNumber}
                  onChange={(e) => handleInputChange('houseNumber', e.target.value)}
                  placeholder="VD: 123 Nguyễn Huệ"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Tỉnh/Thành *</label>
                <select
                  value={formData.provinceCode}
                  onChange={(e) => handleInputChange('provinceCode', e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                >
                  <option value="" disabled>Chọn Tỉnh/Thành</option>
                  {provinces.map(p => (
                    <option key={p.code} value={p.code}>{p.fullName}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phường/Xã *</label>
                <select
                  value={formData.wardCode}
                  onChange={(e) => {
                    const code = e.target.value
                    const ward = wardOptions.find(w => w.code === code)
                    handleInputChange('wardCode', code)
                    handleInputChange('wardName', ward?.name || '')
                  }}
                  required
                  disabled={!wardOptions.length}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white disabled:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                >
                  <option value="" disabled>Chọn Phường/Xã</option>
                  {wardOptions.map(w => (
                    <option key={w.code} value={w.code}>{w.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Ngân hàng</label>
                <select
                  value={formData.bankCode}
                  onChange={(e) => handleInputChange('bankCode', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                >
                  <option value="">Chọn ngân hàng (tuỳ chọn)</option>
                  {bankOptions.map(b => (
                    <option key={b.code} value={b.code}>{b.shortName || b.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="bankNum" className="block text-sm font-medium text-gray-700">Số tài khoản</label>
                <input
                  id="bankNum"
                  value={formData.bankNum}
                  onChange={(e) => handleInputChange('bankNum', e.target.value)}
                  placeholder="Nhập số tài khoản"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                />
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-3">
                <input
                  id="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#009DA5] rounded focus:ring-2 focus:ring-[#009DA5]"
                  required
                />
                <label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                  Tôi đồng ý với <a href="#" className="text-[#009DA5] hover:underline">Điều khoản sử dụng</a> và <a href="#" className="text-[#009DA5] hover:underline">Chính sách bảo mật</a> của ASA *
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  id="agreeMarketing"
                  type="checkbox"
                  checked={formData.agreeMarketing}
                  onChange={(e) => handleInputChange('agreeMarketing', e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#009DA5] rounded focus:ring-2 focus:ring-[#009DA5]"
                />
                <label htmlFor="agreeMarketing" className="text-sm leading-relaxed">
                  Tôi muốn nhận thông tin về các tính năng mới và khuyến mãi từ ASA
                </label>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreeTerms}
                className="w-full bg-gradient-to-r from-[#0D6CE8] to-[#6E36FF] hover:from-[#0a56b8] hover:to-[#5a2fe0] text-white font-semibold py-4 rounded-[15px] text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Đang xử lý...
                  </div>
                ) : (
                  <>
                    Mua gói
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* QR Code Modal */
      }
        {showQrModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="inline-block bg-white rounded-[20px] p-6 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quét mã QR để thanh toán
              </h3>
              <div className="rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                {qrCodeUrl && (
                  <img
                    src={qrCodeUrl}
                    alt="QR Code"
                    width={540}
                    height={640}
                    className="block w-[540px] h-[640px] object-cover"
                  />
                )}
              </div>
              <p className="text-gray-600 mb-6">
                Vui lòng quét mã QR bằng ứng dụng ngân hàng của bạn để hoàn tất thanh toán
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowQrModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-[15px] transition-all"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[20px] p-8 max-w-md w-full shadow-2xl text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thanh toán thành công</h3>
            <p className="text-gray-600 mb-6">Vui lòng kiểm tra email để nhận thông tin đăng nhập</p>
            <button
              onClick={() => {
                setShowSuccessModal(false)
                setIsSubmitted(true)
              }}
              className="w-full bg-gradient-to-r from-[#009DA5] to-[#00C8D4] hover:from-[#007a82] hover:to-[#00a6b0] text-white font-semibold py-3 rounded-[15px] transition-all"
            >
              Xác nhận
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BuyPage


