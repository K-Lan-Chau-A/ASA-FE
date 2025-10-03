import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import GoogleMap from '../components/GoogleMap'
import { AuroraBackground } from '@/components/ui/aurora-background'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.')
  }

  const contactInfo = [
    {
      title: 'Văn phòng chính',
      address: '123 Nguyễn Văn Linh, Quận 7, TP.HCM',
      phone: '(028) 1234-5678',
      email: 'info@asa.vn',
      hours: 'T2-T6: 8:00-18:00, T7: 8:00-12:00',
      icon: '🏢',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Chi nhánh Hà Nội',
      address: '456 Hoàng Quốc Việt, Cầu Giấy, Hà Nội',
      phone: '(024) 1234-5678',
      email: 'hanoi@asa.vn',
      hours: 'T2-T6: 8:00-18:00, T7: 8:00-12:00',
      icon: '🏛️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Hỗ trợ kỹ thuật',
      address: 'Hỗ trợ trực tuyến 24/7',
      phone: '1900-xxxx',
      email: 'support@asa.vn',
      hours: '24/7 - Tất cả các ngày trong tuần',
      icon: '🛠️',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#', color: 'hover:text-blue-600' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: '📺', url: '#', color: 'hover:text-red-600' },
    { name: 'Zalo', icon: '💬', url: '#', color: 'hover:text-blue-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009DA5]/5 to-[#0D6CE8]/5">
      {/* Header */}
      <AuroraBackground className="pt-16 py-12 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 drop-shadow-lg">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto drop-shadow-md">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí!
          </p>
        </div>
      </AuroraBackground>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Gửi yêu cầu tư vấn</CardTitle>
                <p className="text-muted-foreground">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong vòng 24h
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                        placeholder="0901234567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tên công ty/cửa hàng
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                      placeholder="Công ty ABC"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Chủ đề quan tâm
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="demo">Đặt lịch demo</option>
                      <option value="pricing">Tư vấn giá cả</option>
                      <option value="technical">Hỗ trợ kỹ thuật</option>
                      <option value="partnership">Hợp tác đối tác</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nội dung tin nhắn *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[#009DA5]"
                      placeholder="Mô tả chi tiết nhu cầu của bạn..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="mr-2">📨</span>
                    Gửi yêu cầu tư vấn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Thông tin liên hệ</h2>
              <p className="text-muted-foreground text-lg">
                Chúng tôi có mặt tại nhiều địa điểm để phục vụ bạn tốt nhất
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className={`bg-gradient-to-br ${info.color} text-white border-0 hover:shadow-xl transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{info.icon}</div>
                      <CardTitle className="text-white text-xl">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-white/80">📍</span>
                      <span className="text-white/90">{info.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white/80">📞</span>
                      <span className="text-white/90">{info.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white/80">✉️</span>
                      <span className="text-white/90">{info.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white/80">🕒</span>
                      <span className="text-white/90">{info.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Văn phòng của chúng tôi</h2>
            <p className="text-muted-foreground">Ghé thăm văn phòng của chúng tôi để trải nghiệm trực tiếp sản phẩm</p>
          </div>
          
          <GoogleMap />
        </div>
      </section>
    </div>
  )
}

export default ContactPage
