import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Phần mềm quản lý bán hàng hiện đại cho cửa hàng bán lẻ
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Chúng tôi là một đội ngũ kinh nghiệm trẻ, đầy nhiệt huyết, mang hoài bão cống hiến sự hoạt động kinh doanh nhỏ lẻ cho các chủ kinh doanh.
              </p>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8">
                Chúng tôi tin rằng công nghệ sẽ có giá để giải quyết được các vấn đề luôc lẻ của khách hàng.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:text-[#FFFFFF] text-lg px-8 py-4 h-auto"
              >
                Dùng thử miễn phí
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>

              <Button 
                size="lg" 
                className="bg-white text-primary hover:text-[#FFFFFF] text-lg px-8 py-4 h-auto"
              >
                Xem demo
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
             
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">1000+</div>
                <div className="text-blue-100 text-sm sm:text-base">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">99.9%</div>
                <div className="text-blue-100 text-sm sm:text-base">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                <div className="text-blue-100 text-sm sm:text-base">Hỗ trợ</div>
              </div>
            </div>
          </div>

          {/* Right Content - POS Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="bg-gray-100 rounded-xl p-6">
                {/* Mock POS Interface */}
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Bán hàng</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Hoạt động
                    </div>
                  </div>
                  
                  {/* Product items */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cà phê đen</span>
                      <span className="font-semibold text-gray-800">25,000đ</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Bánh mì</span>
                      <span className="font-semibold text-gray-800">15,000đ</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span className="text-gray-800">Tổng cộng</span>
                      <span className="text-[#009DA5]">40,000đ</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#009DA5] text-white py-3 rounded-lg mt-4 font-semibold">
                    Thanh toán
                  </button>
                </div>
                
                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-[#0D6CE8]">127</div>
                    <div className="text-sm text-gray-600">Đơn hôm nay</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2.8M</div>
                    <div className="text-sm text-gray-600">Doanh thu</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-blue-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              💻 Web App
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              🖥️ Desktop POS
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
