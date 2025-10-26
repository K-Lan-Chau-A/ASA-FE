import { useMemo, useState } from 'react'
import API_URL from '@/config/api'
import provinces from '@/constant/donViHanhChinh34TinhThanh.json'
import vietQrBanks from '@/constant/vietQrBank.json'

const TrialPage = () => {
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
        shopName: formData.businessName,
        fullname: formData.ownerName,
        phonenumber: formData.phone,
        email: formData.email,
        address: buildAddress(),
        status: 2,
        shopToken: null,
        qrcodeUrl: null,
        sepayApiKey: null,
        bankName: selectedBank?.name ?? '',
        bankCode: selectedBank?.code ?? '',
        bankNum: formData.bankNum,
        productId: 1
      }

      // Debug logs for payload and request
      try {
        console.log('🧪 Trial Submit - API URL:', `${API_URL}/api/shops`)
        console.log('🧪 Trial Submit - Payload:', payload)
        console.log('🧪 Trial Submit - Address parts:', {
          houseNumber: formData.houseNumber,
          wardName: formData.wardName || selectedWard?.name,
          province: selectedProvince?.fullName
        })
      } catch {}

      const res = await fetch(`${API_URL}/api/shops`, {
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

      setIsSubmitted(true)
    } catch (err) {
      console.error('Trial submit failed:', err)
      alert('Gửi đăng ký thất bại. Vui lòng thử lại sau.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Đăng ký thành công!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Cảm ơn bạn đã đăng ký dùng thử. Chúng tôi đã gửi thông tin truy cập hệ thống đến email của bạn.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Bước tiếp theo:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium text-blue-900">Kiểm tra email (thư rác) để nhận thông tin truy cập hệ thống</p>
                    <p className="text-blue-700 text-sm">Vui lòng kiểm tra email: {formData.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium text-blue-900">Thiết lập tài khoản miễn phí</p>
                    <p className="text-blue-700 text-sm">Hướng dẫn chi tiết từ chuyên gia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium text-blue-900">Bắt đầu dùng thử 7 ngày</p>
                    <p className="text-blue-700 text-sm">Trải nghiệm đầy đủ tính năng</p>
                  </div>
                </div>
              </div>
            </div>
            
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
        {/* Logo and Title Section */}
        <div className="text-center mb-8">
          <img src="/logoASA.png" alt="ASA Logo" className="h-40 mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Dùng thử miễn phí 7 ngày
          </h1>
          <p className="text-lg text-gray-600">
            Để khám phá tại sao nhiều cửa hàng tạp hóa tin dùng ASA
          </p>
        </div>

        {/* Form Card - với rounded corners lớn như Sapo */}
        <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Thông tin cửa hàng
            </h2>
            <p className="text-gray-600 text-center">
              Vui lòng điền thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
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

            {/* Address */}
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

            {/* Bank info */}
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
                className="w-full bg-gradient-to-r from-[#009DA5] to-[#00C8D4] hover:from-[#007a82] hover:to-[#00a6b0] text-white font-semibold py-4 rounded-[15px] text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    Đăng ký
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
    </div>
  )
}

export default TrialPage
