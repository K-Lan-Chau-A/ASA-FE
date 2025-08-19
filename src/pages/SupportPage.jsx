import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SupportPage = () => {

  const faqData = [
    {
      category: 'Bắt đầu sử dụng',
      questions: [
        {
          q: 'Làm thế nào để cài đặt phần mềm POS?',
          a: 'Bạn có thể tải phần mềm từ website chính thức, sau đó làm theo hướng dẫn cài đặt. Chúng tôi cũng hỗ trợ cài đặt từ xa miễn phí.'
        },
        {
          q: 'Tôi cần những thiết bị gì để sử dụng?',
          a: 'Bạn cần: Máy tính/tablet, máy in hóa đơn nhiệt, máy quét mã vạch (tùy chọn), ngăn kéo đựng tiền (tùy chọn).'
        },
        {
          q: 'Có hỗ trợ đào tạo sử dụng không?',
          a: 'Có! Chúng tôi cung cấp khóa đào tạo online miễn phí và hỗ trợ 1-1 cho khách hàng mới.'
        }
      ]
    },
    {
      category: 'Thanh toán & Giá cả',
      questions: [
        {
          q: 'Phí sử dụng hàng tháng là bao nhiêu?',
          a: 'Gói cơ bản: 150,000đ/tháng. Gói chuyên nghiệp: 300,000đ/tháng. Có thể dùng thử miễn phí 14 ngày.'
        },
        {
          q: 'Có được hoàn tiền không?',
          a: 'Có, chúng tôi cam kết hoàn tiền 100% trong vòng 30 ngày đầu nếu không hài lòng.'
        },
        {
          q: 'Có giảm giá cho thanh toán năm không?',
          a: 'Có! Thanh toán trước 12 tháng được giảm 15%, thanh toán trước 6 tháng được giảm 8%.'
        }
      ]
    },
    {
      category: 'Kỹ thuật',
      questions: [
        {
          q: 'Phần mềm có hoạt động offline không?',
          a: 'Có, phần mềm Desktop hoạt động hoàn toàn offline. Web POS cần internet nhưng có chế độ offline hạn chế.'
        },
        {
          q: 'Dữ liệu có được backup tự động không?',
          a: 'Có, dữ liệu được backup tự động mỗi 30 phút lên cloud server bảo mật.'
        },
        {
          q: 'Có tích hợp với phần mềm kế toán không?',
          a: 'Có, chúng tôi tích hợp với hầu hết phần mềm kế toán phổ biến như MISA, FAST, SAP.'
        }
      ]
    }
  ]

  const quickActions = [
    {
      title: 'Hướng dẫn cài đặt',
      icon: '📋',
      description: 'Video hướng dẫn từng bước cài đặt và sử dụng',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Liên hệ hỗ trợ',
      icon: '📞',
      description: 'Gọi hotline 1900-xxxx hoặc chat trực tiếp',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cộng đồng',
      icon: '👥',
      description: 'Tham gia group Facebook để trao đổi kinh nghiệm',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Đào tạo online',
      icon: '🎓',
      description: 'Khóa học miễn phí về quản lý bán hàng hiệu quả',
      color: 'from-orange-500 to-red-500'
    }
  ]



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009DA5]/5 to-[#0D6CE8]/5">
      {/* Header */}
      <section className="pt-16 py-20 bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Trung tâm hỗ trợ
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 với đội ngũ chuyên viên tận tình và AI Assistant thông minh
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Left: FAQ and Quick Actions */}
          <div className="lg:col-span-3 space-y-8">
            {/* Quick Actions */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Truy cập nhanh</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {quickActions.map((action, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-br ${action.color} text-white border-0`}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{action.icon}</div>
                        <CardTitle className="text-white">{action.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/90">{action.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Câu hỏi thường gặp</h2>
              <div className="space-y-6">
                {faqData.map((category, categoryIndex) => (
                  <Card key={categoryIndex}>
                    <CardHeader>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-l-4 border-[#009DA5] pl-4">
                          <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                          <p className="text-muted-foreground">{faq.a}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact & Resources */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🎧</span>
                  <span>Liên hệ trực tiếp</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">📞</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-green-700">Hotline</div>
                      <div className="text-sm text-green-600">1900-xxxx (24/7)</div>
                      <a href="tel:1900xxxx" className="text-xs text-green-500 hover:underline">Gọi ngay</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">✉️</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-700">Email</div>
                      <div className="text-sm text-blue-600">support@asa.vn</div>
                      <a href="mailto:support@asa.vn" className="text-xs text-blue-500 hover:underline">Gửi email</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🤖</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary">AI Assistant</div>
                      <div className="text-sm text-primary/80">24/7 trực tuyến</div>
                      <div className="text-xs text-primary/60">Click icon góc phải màn hình</div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">15s</div>
                      <div className="text-xs text-muted-foreground">Thời gian phản hồi</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-xs text-muted-foreground">Độ hài lòng</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">📚</span>
                  <span>Tài liệu hữu ích</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                  <span className="text-lg">📖</span>
                  <div>
                    <div className="font-medium text-sm">Hướng dẫn sử dụng</div>
                    <div className="text-xs text-muted-foreground">PDF chi tiết</div>
                  </div>
                </a>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                  <span className="text-lg">🎥</span>
                  <div>
                    <div className="font-medium text-sm">Video tutorials</div>
                    <div className="text-xs text-muted-foreground">YouTube playlist</div>
                  </div>
                </a>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                  <span className="text-lg">💻</span>
                  <div>
                    <div className="font-medium text-sm">Remote support</div>
                    <div className="text-xs text-muted-foreground">TeamViewer/AnyDesk</div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPage
