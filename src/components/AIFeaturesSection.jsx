import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { TypewriterCustom } from "@/components/ui/typewriter-effect";
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'
import ElectricBorder from '@/components/ui/ElectricBorder'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { useEffect, useRef, useState } from 'react'

const AIFeaturesSection = () => {
  const words = [
    {
      text: "Trí Tuệ",
      className: "text-slate-900"
    },
    {
      text: "Nhân Tạo",
      className: "text-slate-900"
    },
    {
      text: "Quản Lý",
      className: "text-slate-900"
    },
    {
      text: "Kinh Doanh",
      className: "text-slate-900"
    }
  ]

  // Trigger highlight only when AI Dashboard card scrolls into view
  const dashboardRef = useRef(null)
  const [showHighlight, setShowHighlight] = useState(false)

  useEffect(() => {
    if (!dashboardRef.current || showHighlight) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowHighlight(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(dashboardRef.current)
    return () => observer.disconnect()
  }, [showHighlight])

  return (
    <AuroraBackground className="py-20 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#009DA5]/10 text-[#009DA5] text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Powered by AI
          </div>
          
          <div className="flex justify-center">
              <TypewriterCustom
                words={words}
                className="text-4xl font-bold mb-16"
                cursorClassName="bg-[#009DA5]"
              />
            </div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hệ thống AI tiên tiến giúp phân tích dữ liệu bán hàng, đưa ra chiến lược kinh doanh thông minh 
            và tối ưu hóa việc nhập kho dựa trên xu hướng thị trường
          </p>
        </div>

        {/* Main AI Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* AI Analytics */}
          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gradient-to-br from-white to-slate-50 relative group/card dark:bg-slate-900 dark:border-white/[0.2] border-slate-200/50 w-full max-w-sm h-auto rounded-xl p-6 shadow-xl">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-slate-900 dark:text-white text-center mb-4"
              >
                Phân Tích Dữ Liệu Thông Minh
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mt-2 text-center"
              >
                AI phân tích dữ liệu bán hàng, nhận dạng xu hướng và đưa ra dự đoán chính xác về nhu cầu khách hàng
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </CardItem>
              <CardItem translateZ="80" className="mt-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#009DA5] rounded-full mr-3 flex-shrink-0"></span>
                    Dự đoán xu hướng bán hàng
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#009DA5] rounded-full mr-3 flex-shrink-0"></span>
                    Phân tích hành vi khách hàng
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#009DA5] rounded-full mr-3 flex-shrink-0"></span>
                    Báo cáo thông minh 24/7
                  </li>
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Smart Strategy */}
          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gradient-to-br from-white to-slate-50 relative group/card dark:bg-slate-900 dark:border-white/[0.2] border-slate-200/50 w-full max-w-sm h-auto rounded-xl p-6 shadow-xl">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-slate-900 dark:text-white text-center mb-4"
              >
                Chiến Lược Kinh Doanh AI
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mt-2 text-center"
              >
                Hệ thống đưa ra các chiến lược kinh doanh tối ưu dựa trên dữ liệu thị trường và hiệu suất bán hàng
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </CardItem>
              <CardItem translateZ="80" className="mt-6">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Tối ưu giá bán theo thời gian
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Gợi ý sản phẩm combo
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Chiến lược marketing thông minh
                  </li>
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Smart Inventory */}
          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gradient-to-br from-white to-slate-50 relative group/card dark:bg-slate-900 dark:border-white/[0.2] border-slate-200/50 w-full max-w-sm h-auto rounded-xl p-6 shadow-xl">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-slate-900 dark:text-white text-center mb-4"
              >
                Quản Lý Kho Thông Minh
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mt-2 text-center"
              >
                AI tự động tính toán lượng hàng cần nhập, thời điểm nhập hàng tối ưu dựa trên dữ liệu bán hàng
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </CardItem>
              <CardItem translateZ="80" className="mt-6">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Dự đoán nhu cầu nhập hàng
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Tối ưu chi phí tồn kho
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Cảnh báo hết hàng thông minh
                  </li>
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        {/* AI Dashboard Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: AI Dashboard Mock */}
          <div className="relative" ref={dashboardRef}>
            <ElectricBorder 
              color="#99E1E4" 
              speed={1.5} 
              chaos={0.8} 
              thickness={2}
              className="rounded-xl relative z-10"
            >
              <Card className="border-0 bg-white shadow-2xl relative z-0">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-slate-900">AI Dashboard</CardTitle>
                      <p className="text-slate-600">Phân tích thông minh</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-slate-600">AI đang phân tích</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* AI Insights */}
                  <div className="space-y-4">
                    <div className="bg-white border border-[#009DA5]/20 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-[#009DA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="font-semibold text-slate-900">Gợi ý chiến lược</span>
                      </div>
                      <p className="text-sm text-slate-700">Tăng giá cà phê 10% vào buổi sáng để tối ưu lợi nhuận</p>
                    </div>

                    <div className="bg-white border border-emerald-500/20 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span className="font-semibold text-slate-900">Dự báo nhập kho</span>
                      </div>
                      <p className="text-sm text-slate-700">Nên nhập thêm 50kg bánh mì trong 3 ngày tới</p>
                    </div>

                    <div className="bg-white border border-orange-500/20 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="font-semibold text-slate-900">Xu hướng bán hàng</span>
                      </div>
                      <p className="text-sm text-slate-700">Doanh thu dự kiến tăng 15% trong tuần tới</p>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-slate-200">
                      <div className="text-2xl font-bold text-[#009DA5]">94%</div>
                      <div className="text-xs text-slate-600">Độ chính xác AI</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-slate-200">
                      <div className="text-2xl font-bold text-emerald-600">+23%</div>
                      <div className="text-xs text-slate-600">Tăng lợi nhuận</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-slate-200">
                      <div className="text-2xl font-bold text-orange-600">-35%</div>
                      <div className="text-xs text-slate-600">Giảm tồn kho</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ElectricBorder>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                AI Không Chỉ Là Tương Lai<br />
                <br />
                {showHighlight ? (
                  <Highlight className="bg-gradient-to-r from-[#009DA5] to-[#0D6CE8]">
                    Mà Còn Là Hiện Tại
                  </Highlight>
                ) : (
                  <span>Mà Còn Là Hiện Tại</span>
                )}
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Hệ thống AI của chúng tôi học hỏi từ dữ liệu của chính cửa hàng bạn, 
                đưa ra các quyết định kinh doanh thông minh và tự động hóa nhiều quy trình.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Học Từ Dữ Liệu Thực Tế</h4>
                  <p className="text-slate-600">AI phân tích patterns từ lịch sử bán hàng của cửa hàng bạn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Tự Động Hóa Quyết Định</h4>
                  <p className="text-slate-600">Giảm 80% thời gian ra quyết định nhập hàng và pricing</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Cải Thiện Liên Tục</h4>
                  <p className="text-slate-600">AI càng sử dụng càng thông minh, độ chính xác tăng theo thời gian</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-[#009DA5] to-[#0D6CE8] hover:from-[#007a82] hover:to-[#0056b3] text-white px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group">
              <span className="group-hover:animate-pulse">Trải Nghiệm AI Ngay</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default AIFeaturesSection
