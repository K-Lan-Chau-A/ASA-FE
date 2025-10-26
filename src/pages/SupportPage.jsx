import { useState } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    priority: 'medium',
    message: '',
    attachFile: null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      alert('Ticket hỗ trợ của bạn đã được gửi thành công! Chúng tôi sẽ phản hồi trong vòng 24h.')
      setIsSubmitting(false)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        priority: 'medium',
        message: '',
        attachFile: null
      })
    }, 1000)
  }

  return (
    <AuroraBackground className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trung tâm hỗ trợ
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 với đội ngũ chuyên viên tận tình và AI Assistant thông minh
          </p>
        </div>

        {/* Ticket Form */}
        <Card className="max-w-3xl mx-auto relative z-20">
          <CardHeader>
            <CardTitle className="text-2xl">Gửi ticket hỗ trợ</CardTitle>
            <p className="text-sm text-gray-600">
              Điền thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Họ và tên *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="VD: Nguyễn Văn A"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
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

              {/* Phone and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="VD: 0901234567"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Danh mục *
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                  >
                    <option value="" disabled>Chọn danh mục</option>
                    <option value="technical">Hỗ trợ kỹ thuật</option>
                    <option value="account">Tài khoản & Đăng nhập</option>
                    <option value="billing">Thanh toán & Hóa đơn</option>
                    <option value="feature">Tính năng & Yêu cầu</option>
                    <option value="bug">Báo lỗi</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Tiêu đề *
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Mô tả ngắn gọn vấn đề của bạn"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                />
              </div>

              {/* Priority */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Mức độ ưu tiên
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priority"
                      value="low"
                      checked={formData.priority === 'low'}
                      onChange={(e) => handleInputChange('priority', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Thấp</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priority"
                      value="medium"
                      checked={formData.priority === 'medium'}
                      onChange={(e) => handleInputChange('priority', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Trung bình</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priority"
                      value="high"
                      checked={formData.priority === 'high'}
                      onChange={(e) => handleInputChange('priority', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Cao</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Nội dung *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Mô tả chi tiết vấn đề hoặc yêu cầu của bạn..."
                  required
                  rows="6"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009DA5] resize-none"
                />
              </div>

              {/* File Attachment */}
              <div className="space-y-2">
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                  Tệp đính kèm (tùy chọn)
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={(e) => handleInputChange('attachFile', e.target.files[0])}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                />
                <p className="text-xs text-gray-500">
                  Định dạng cho phép: JPG, PNG, PDF, DOC, DOCX (Tối đa 5MB)
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#009DA5] hover:bg-[#007a82] text-white py-3 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Đang gửi...
                    </div>
                  ) : (
                    'Gửi ticket hỗ trợ'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-[#009DA5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#009DA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Hỗ trợ</h3>
              <p className="text-sm text-gray-600">aistoreassistant@gmail.com</p>
              <p className="text-sm text-gray-600">Phản hồi trong 24h</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-[#009DA5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#009DA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hotline Hỗ trợ</h3>
              <p className="text-sm text-gray-600">1900 1234</p>
              <p className="text-sm text-gray-600">Hỗ trợ 24/7</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-[#009DA5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#009DA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Chatbot</h3>
              <p className="text-sm text-gray-600">Chat ngay</p>
              <p className="text-sm text-gray-600">Hỗ trợ tức thì</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default SupportPage
