import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const PricingSection = () => {
  const features = [
    "Không giới hạn các tính năng cơ bản",
    "Hỗ trợ khách hàng qua tổng đài hotline", 
    "Miễn phí hóa đơn điện tử",
    "Quản lý kho hàng hóa",
    "Quản lý nhân viên, ca làm việc",
    "Thống kê doanh thu, lời lãi",
    "AI hỗ trợ người dùng",
    "Dùng thử 14 ngày miễn phí, hủy bất cứ lúc nào"
  ]

  const proFeatures = [
    "Không giới hạn các tính năng cơ bản",
    "Hỗ trợ khách hàng qua tổng đài hotline",
    "Miễn phí hóa đơn điện tử", 
    "Quản lý kho hàng hóa",
    "Quản lý nhân viên, ca làm việc",
    "Thống kê doanh thu, lời lãi",
    "AI hỗ trợ người dùng (không giới hạn)",
    "Hỗ trợ các chi phí lắp đặt văn hành kết nối với phần cứng",
    "Tích hợp NFC và phát hành thẻ tích điểm",
    "Phân tích chiến lược kinh doanh"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Bảng phí dịch vụ phần mềm của chúng tôi
          </h2>
          <p className="text-xl text-muted-foreground">
            Tùy chọn phù hợp với mọi mô hình quản lý kinh doanh, từ cửa hàng nhỏ đến các chuỗi lớn.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gói cơ bản */}
          <Card className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-[#009DA5]/20">
            <div className="absolute -top-3 right-6">
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                🔥 HOT
              </span>
            </div>
            
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-2xl font-bold">
                Gói cơ bản
              </CardTitle>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground line-through">200.000đ</div>
                <div className="text-4xl font-bold text-foreground">
                  150.000đ
                  <span className="text-lg font-normal text-muted-foreground"> / tháng</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <Button size="lg" className="w-full bg-[#009DA5] hover:bg-[#007a82]">
                Dùng thử miễn phí
              </Button>
              
              <div className="text-sm text-muted-foreground text-center">
                Dành cho mô hình kinh doanh nhỏ, người bán đầu kinh doanh hoặc bán hàng online.
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gói chuyên nghiệp */}
          <Card className="relative hover:shadow-xl transition-all duration-300 border-2 border-[#0D6CE8] hover:border-[#0D6CE8]/60 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
            <div className="absolute -top-3 right-6">
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                🔥 HOT
              </span>
            </div>
            
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-2xl font-bold">
                Gói chuyên nghiệp
              </CardTitle>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground line-through">350.000đ</div>
                <div className="text-4xl font-bold text-foreground">
                  300.000đ
                  <span className="text-lg font-normal text-muted-foreground"> / tháng</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <Button size="lg" className="w-full bg-[#0D6CE8] hover:bg-blue-700">
                Mua gói
              </Button>
              
              <div className="text-sm text-muted-foreground text-center">
                Dành cho mô hình kinh doanh chuyên nghiệp, chuyên môn hóa quy trình.
              </div>
              
              <div className="space-y-4">
                {proFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-muted-foreground text-lg">
            Cần tư vấn thêm? Liên hệ với chúng tôi để được hỗ trợ chi tiết
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-[#009DA5] text-[#009DA5] hover:bg-[#009DA5] hover:text-white">
              Liên hệ tư vấn
            </Button>
            <Button size="lg" className="bg-[#009DA5] hover:bg-[#007a82]">
              Đặt lịch demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection