import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AuroraBackground } from '@/components/ui/aurora-background'
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
        shopToken: "null",
        qrcodeUrl: "null",
        sepayApiKey: "null",
        currentRequest: 100,
        currentAccount: 3,
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
      <AuroraBackground className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="text-center relative z-20">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Đăng ký thành công!
              </CardTitle>
              <p className="text-lg text-gray-600 mb-1">
                Cảm ơn bạn đã đăng ký dùng thử
              </p>
              <p className="text-lg text-gray-600 mb-1">
              Chúng tôi đã gửi thông tin truy cập hệ thống đến email của bạn.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
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
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="bg-[#009DA5] hover:bg-[#007a82] text-white px-8 py-3"
                >
                  Về trang chủ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </AuroraBackground>
    )
  }

  return (
    <AuroraBackground className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Đăng ký dùng thử miễn phí
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trải nghiệm ASA trong 7 ngày miễn phí. Không cần thẻ tín dụng, không ràng buộc.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Miễn phí 7 ngày</h3>
            <p className="text-gray-600">Dùng thử đầy đủ tính năng không giới hạn</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hỗ trợ 24/7</h3>
            <p className="text-gray-600">Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Thiết lập miễn phí</h3>
            <p className="text-gray-600">Hướng dẫn và cài đặt hoàn toàn miễn phí</p>
          </div>
        </div>

        {/* Form */}
        <Card className="relative z-20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Thông tin cửa hàng</CardTitle>
            <p className="text-gray-600 text-center">
              Vui lòng điền thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Tên cửa hàng *</label>
                  <input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    placeholder="VD: Cửa hàng ABC"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 relative z-30"
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 relative z-30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Số điện thoại *</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="VD: 0901234567"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 relative z-30"
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 relative z-30"
                  />
                </div>
              </div>


              {/* Address */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700">Số nhà, đường *</label>
                  <input
                    id="houseNumber"
                    value={formData.houseNumber}
                    onChange={(e) => handleInputChange('houseNumber', e.target.value)}
                    placeholder="VD: 123 Nguyễn Huệ"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 relative z-30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Tỉnh/Thành *</label>
                  <select
                    value={formData.provinceCode}
                    onChange={(e) => handleInputChange('provinceCode', e.target.value)}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white relative z-30"
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white disabled:bg-gray-100 relative z-30"
                  >
                    <option value="" disabled>Chọn Phường/Xã</option>
                    {wardOptions.map(w => (
                      <option key={w.code} value={w.code}>{w.name}</option>
                    ))}
                  </select>
                </div>
              </div>


              {/* Bank info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Ngân hàng</label>
                  <select
                    value={formData.bankCode}
                    onChange={(e) => handleInputChange('bankCode', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white relative z-30"
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 relative z-30"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    className="mt-1 relative z-30"
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
                    className="mt-1 relative z-30"
                  />
                  <label htmlFor="agreeMarketing" className="text-sm leading-relaxed">
                    Tôi muốn nhận thông tin về các tính năng mới và khuyến mãi từ ASA
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.agreeTerms}
                  className="w-full bg-[#009DA5] hover:bg-[#007a82] text-white py-4 text-lg"
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
                    'Đăng ký dùng thử miễn phí'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Được tin tưởng bởi hơn 1000+ cửa hàng</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">ASA</div>
            <div className="text-2xl font-bold text-gray-400">POS</div>
            <div className="text-2xl font-bold text-gray-400">AI</div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default TrialPage
