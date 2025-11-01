import { Button } from '@/components/ui/button'
import CountUp from '@/components/ui/CountUp'
import SplitText from '@/components/ui/SplitText'
import DarkVeil from '@/components/ui/DarkVeil'
import { Link } from 'react-router-dom'
import { FaAndroid } from 'react-icons/fa'
const HeroSection = () => {
  return (
    <section id="home" className="relative text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <DarkVeil />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center">
          <div className="order-2 lg:order-1 max-w-3xl lg:pl-8">

            {/* Left Content */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div>
                <SplitText
                  tag="h1"
                  text="Phần mềm quản lý bán hàng hiện đại tích hợp AI"
                  splitType="words"
                  delay={60}
                  duration={1.2}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
                <SplitText
                  tag="p"
                  text="Chúng tôi là một đội ngũ kinh nghiệm trẻ, đầy nhiệt huyết, mang hoài bão cống hiến sự hoạt động kinh doanh nhỏ lẻ cho các chủ kinh doanh."
                  splitType="lines"
                  delay={80}
                  duration={1.2}
                  className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
                <SplitText
                  tag="p"
                  text="Chúng tôi tin rằng công nghệ sẽ có giá trị để giải quyết được các vấn đề của khách hàng."
                  splitType="lines"
                  delay={80}
                  duration={1.2}
                  className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/trial">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:text-[#FFFFFF] text-lg px-8 py-4 h-auto"
                  >
                    Dùng thử miễn phí
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </Link>

                <Button
                  size="lg"
                  className="bg-white text-primary hover:text-[#FFFFFF] text-lg px-8 py-4 h-auto"
                >
                  Xem demo
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>

                <a 
                  href="/app-release.apk" 
                  download="ASA-App.apk"
                >
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:text-[#FFFFFF] text-lg px-8 py-4 h-auto"
                  >
                    <FaAndroid className="mr-2 h-5 w-5" />
                    Tải app Android
                  </Button>
                </a>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">
                    <CountUp to={1000} duration={2.8} delay={0.2} separator="," />
                    <span>+</span>
                  </div>
                  <div className="text-blue-100 text-sm sm:text-base">Khách hàng</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">
                    <CountUp to={99.9} duration={2.8} delay={0.2} />
                    <span>%</span>
                  </div>
                  <div className="text-blue-100 text-sm sm:text-base">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">
                    <CountUp to={24} duration={2.8} delay={0.2} />
                    <span>/7</span>
                  </div>
                  <div className="text-blue-100 text-sm sm:text-base">Hỗ trợ</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
