import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { TypewriterCustom } from "@/components/ui/typewriter-effect";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import Carousel from '@/components/ui/Carousel'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'
import ElectricBorder from '@/components/ui/ElectricBorder'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { useState, useEffect, useRef } from 'react'

const FeaturesSection = () => {
  // State for interactive chart
  const [hoveredBar, setHoveredBar] = useState(null)
  const [showDropdown, setShowDropdown] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  
  // AI Features state
  const dashboardRef = useRef(null)
  const [showHighlight, setShowHighlight] = useState(false)

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // AI highlight effect
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

  // Chart data
  const chartData = [
    { day: 'T2', value: 3200000, displayValue: '3.2M', height: 60 },
    { day: 'T3', value: 4100000, displayValue: '4.1M', height: 80 },
    { day: 'T4', value: 2800000, displayValue: '2.8M', height: 45 },
    { day: 'T5', value: 3700000, displayValue: '3.7M', height: 70 },
    { day: 'T6', value: 3000000, displayValue: '3.0M', height: 55 },
    { day: 'T7', value: 4500000, displayValue: '4.5M', height: 90 },
    { day: 'CN', value: 3900000, displayValue: '3.9M', height: 75 }
  ]

  const words1 = [
    {
      text: "ASA cung cấp giải pháp POS",
      className: "text-slate-900 drop-shadow-lg"
    },
    {
      text: "giúp bạn quản lý nhanh gọn,",
      className: "text-slate-900 drop-shadow-lg"
    },
    {
      text: "chính xác và hiệu quả",
      className: "text-[#009DA5] drop-shadow-lg"
    }
  ];

  const words2 = [
    {
      text: "Quản lý bán hàng",
      className: "text-slate-900"
    },
    {
      text: "Tạp hóa & Siêu thị",
      className: "text-slate-900"
    },
    {
      text: "hiệu quả",
      className: "text-[#009DA5]"
    }
  ];

  const words3 = [
    {
      text: "Báo cáo doanh thu",
      className: "text-slate-900"
    },
    {
      text: "lỗ lãi rõ ràng",
      className: "text-[#009DA5]"
    }
  ];

  const words4 = [
    {
      text: "Khách hàng nói gì",
      className: "text-slate-900"
    },
    {
      text: "về chúng tôi",
      className: "text-[#009DA5]"
    }
  ];

  // AI Features words
  const aiWords = [
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
  ];

  // Testimonials data for Carousel
  const testimonials = [
    {
      id: 1,
      title: "Anh Minh Tuấn",
      description: "Chủ quán café The Coffee",
      content: "Từ khi dùng ASA, việc quản lý quán café trở nên dễ dàng hơn nhiều. Tôi có thể theo dõi doanh thu, quản lý kho hàng ngay trên điện thoại.",
      avatar: "MT",
      gradient: "from-blue-500 to-purple-600",
      icon: (
        <svg className="h-[16px] w-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Chị Lan Anh",
      description: "Shop thời trang Belleza",
      content: "AI gợi ý nhập hàng rất chính xác. Tôi không còn lo thiếu hàng vào những ngày cao điểm. Doanh thu tăng 30% sau 3 tháng sử dụng.",
      avatar: "LA",
      gradient: "from-pink-500 to-rose-600",
      icon: (
        <svg className="h-[16px] w-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Anh Đức Thành",
      description: "Cửa hàng tạp hóa Hạnh Phúc",
      content: "Giao diện đơn giản, nhân viên học rất nhanh. Máy in hóa đơn kết nối mượt mà, không bao giờ bị lỗi như phần mềm cũ.",
      avatar: "ĐT",
      gradient: "from-green-500 to-emerald-600",
      icon: (
        <svg className="h-[16px] w-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Cô Minh Châu",
      description: "Tiệm bánh Ngọt Ngào",
      content: "Tính năng quản lý nguyên liệu rất hữu ích cho tiệm bánh. Tôi luôn biết khi nào cần bổ sung bột, trứng, đường để không gián đoạn sản xuất.",
      avatar: "MC",
      gradient: "from-orange-500 to-yellow-600",
      icon: (
        <svg className="h-[16px] w-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Anh Văn Hòa",
      description: "Cửa hàng điện tử TechShop",
      content: "Báo cáo doanh thu theo từng sản phẩm giúp tôi biết được điện thoại nào bán chạy, laptop nào ế để có chiến lược kinh doanh phù hợp.",
      avatar: "VH",
      gradient: "from-indigo-500 to-purple-600",
      icon: (
        <svg className="h-[16px] w-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  // Data for InfiniteMovingCards (web)
  const infiniteTestimonials = [
    {
      quote: "Từ khi dùng ASA, việc quản lý quán café trở nên dễ dàng hơn nhiều. Tôi có thể theo dõi doanh thu, quản lý kho hàng ngay trên điện thoại.",
      name: "Anh Minh Tuấn",
      title: "Chủ quán café The Coffee"
    },
    {
      quote: "AI gợi ý nhập hàng rất chính xác. Tôi không còn lo thiếu hàng vào những ngày cao điểm. Doanh thu tăng 30% sau 3 tháng sử dụng.",
      name: "Chị Lan Anh",
      title: "Shop thời trang Belleza"
    },
    {
      quote: "Giao diện đơn giản, nhân viên học rất nhanh. Máy in hóa đơn kết nối mượt mà, không bao giờ bị lỗi như phần mềm cũ.",
      name: "Anh Đức Thành",
      title: "Cửa hàng tạp hóa Hạnh Phúc"
    },
    {
      quote: "Tính năng quản lý nguyên liệu rất hữu ích cho tiệm bánh. Tôi luôn biết khi nào cần bổ sung bột, trứng, đường để không gián đoạn sản xuất.",
      name: "Cô Minh Châu",
      title: "Tiệm bánh Ngọt Ngào"
    },
    {
      quote: "Báo cáo doanh thu chi tiết giúp tôi hiểu rõ tình hình kinh doanh. Từ đó đưa ra quyết định chính xác để phát triển cửa hàng.",
      name: "Anh Văn Hùng",
      title: "Cửa hàng điện máy"
    }
  ]

  return (
      <div className="overflow-x-hidden">
        <AuroraBackground className="py-20 text-slate-900">
      {/* Main Features Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-x-hidden">
          <p className="text-[#009DA5] font-semibold text-2xl mb-4 drop-shadow-md">
            Quản lý kho theo phương pháp truyền thống gây ra tình trạng thiếu hoặc thừa hàng? Thiếu chính xác?
          </p>
          <div className="flex justify-center">
            <TypewriterCustom
              words={words1}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center leading-tight"
              cursorClassName="bg-[#009DA5]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-1">
              <div className="text-center p-6 rounded-3xl bg-white">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#0D6CE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dễ tiếp cận & Dễ sử dụng</h3>
                <p className="text-gray-600">
                  Giao diện đơn giản, trực quan<br />
                  Chỉ mất 15 phút là làm quen được ngay.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-1">
              <div className="text-center p-6 rounded-3xl bg-white">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tiết kiệm chi phí</h3>
                <p className="text-gray-600">
                  Miễn phí cài đặt, phí tối ưu phù hợp túi tiền<br />
                  Đội ngũ chăm sóc khách hàng tận tình 24/7.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-1">
              <div className="text-center p-6 rounded-3xl bg-white">
                <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#009DA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Thông minh & Tự động</h3>
                <p className="text-gray-600">
                  Tự động gợi ý bán hàng và nhập kho<br />
                  Đưa ra các chiến lược kinh doanh phù hợp.
                </p>
              </div>
            </div>
          </div>
        </div>
    

       {/* Thời đại công nghệ đổi mới */}
       <div className="py-20 overflow-x-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#009DA5]/10 text-[#009DA5] text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Thời đại công nghệ đổi mới với AI
            </div>
            <div className="flex justify-center">
              <TypewriterCustom
                words={words2}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center leading-tight"
                cursorClassName="bg-[#009DA5]"
              />
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tận dụng sức mạnh của AI để tối ưu hóa quy trình bán hàng, quản lý kho hàng thông minh
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Enhanced Features */}
            <div className="space-y-8">
              {/* Payment Feature Card */}
              <BackgroundGradient className="rounded-3xl">
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-slate-900">Thanh toán thông minh</CardTitle>
                        <p className="text-slate-600">Tự động gợi ý sản phẩm, in hóa đơn tức thì</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-slate-600 leading-relaxed">
                      Tự động gợi ý sản phẩm trực tiếp lên màn hình, kết nối máy in hóa đơn tự động.
                      Tăng tốc bán hàng, đảm bảo chính xác, giảm sai sót.
                    </p>

                    {/* Enhanced Payment Display */}
                    <div className="relative">
                      <div className="bg-gradient-to-r from-[#009DA5] via-[#0D6CE8] to-[#009DA5] p-1 rounded-2xl">
                        <div className="bg-white rounded-xl p-6">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-sm text-slate-500 mb-1">Khách cần trả</div>
                              <div className="text-3xl font-bold text-slate-900">1,800,000 VNĐ</div>
                              <div className="text-xs text-green-600 mt-1">✓ Đã thanh toán</div>
                            </div>
                            <div className="text-right">
                              <div className="w-16 h-16 bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] rounded-full flex items-center justify-center mb-2">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="text-xs text-slate-500">Hoàn thành</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BackgroundGradient>

              {/* Inventory Management Card */}
              <BackgroundGradient className="rounded-3xl">
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900">Quản lý kho thông minh</CardTitle>
                        <p className="text-slate-600">AI dự đoán nhu cầu, cảnh báo hết hàng</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Giảm thiểu tình trạng thừa thiếu hàng hóa bằng thông tin cung cấp chính xác.
                      Quản lý số lượng hàng tồn kho, cảnh báo hàng sắp hết, hàng tồn nhiều để có kế hoạch và hành động phù hợp.
                    </p>

                    {/* Inventory Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">134</div>
                        <div className="text-xs text-green-600">Còn hàng</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">18</div>
                        <div className="text-xs text-yellow-600">Sắp hết</div>
                      </div>
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">22</div>
                        <div className="text-xs text-red-600">Hết hàng</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BackgroundGradient>
            </div>

            {/* Right side - Enhanced App Interface */}
            <div className="relative">
              <div className="relative">
                {/* Floating elements for depth */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#009DA5]/20 to-[#0D6CE8]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-xl"></div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#009DA5] to-[#0D6CE8] text-white p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold">Tồn kho thông minh</h4>
                          <p className="text-sm opacity-90">AI phân tích & dự đoán</p>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                          <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* AI Status */}
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">AI đang phân tích</div>
                            <div className="text-sm text-slate-600">Dự đoán nhu cầu tuần tới</div>
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full animate-pulse"></div>
                      </div>

                      {/* Category List */}
                      <div className="space-y-3">
                        {[
                          { name: "Tất cả sản phẩm", count: 156, status: "good", color: "blue" },
                          { name: "Quần áo nam/nữ", count: 42, status: "good", color: "green" },
                          { name: "Váy đầm mùa hè", count: 18, status: "warning", color: "yellow" },
                          { name: "Còn hàng trong kho", count: 134, status: "good", color: "green" },
                          { name: "Hết hàng trong kho", count: 22, status: "danger", color: "red" }
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer group"
                            onMouseEnter={() => setShowDropdown(item.name)}
                            onMouseLeave={() => setShowDropdown(null)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${item.status === 'good' ? 'bg-green-500' :
                                item.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                                }`}></div>
                              <span className="text-slate-700 group-hover:text-[#009DA5] transition-colors duration-200">
                                {item.name}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-slate-500 font-medium">{item.count}</span>
                              <span className="text-slate-400 group-hover:text-[#009DA5] transition-all duration-200 transform group-hover:translate-x-1">〉</span>
                            </div>

                            {/* Enhanced Tooltip */}
                            {showDropdown === item.name && (
                              <div className="absolute left-full top-0 ml-4 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl whitespace-nowrap z-50 animate-in fade-in-0 slide-in-from-left-2 duration-200">
                                <div className="text-sm font-semibold">{item.count} sản phẩm</div>
                                <div className="text-xs text-slate-300 mt-1">
                                  {item.status === 'good' ? 'Tình trạng tốt' :
                                    item.status === 'warning' ? 'Cần chú ý' : 'Cần nhập thêm'}
                                </div>
                                <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-900"></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Business Analytics */}
       <div className="py-20 overflow-x-hidden">

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Phân tích kinh doanh thông minh
            </div>
            <div className="flex justify-center">
              <TypewriterCustom
                words={words3}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center leading-tight"
                cursorClassName="bg-[#009DA5]"
              />
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tự động thống kê báo cáo chi tiết về doanh thu, lợi nhuận, chi phí mỗi ngày.
              Cập nhật biểu đồ theo thời gian thực, lưu trữ lịch sử theo ngày, tuần, tháng, năm.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Enhanced Analytics Dashboard */}
            <div className="order-2 lg:order-1">
              <BackgroundGradient className="rounded-3xl">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-2xl">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-slate-900">Dashboard Analytics</CardTitle>
                        <p className="text-slate-600">Dữ liệu thời gian thực</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-slate-600">Live</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Enhanced Stats Cards */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center group hover:bg-gradient-to-br hover:from-[#009DA5]/10 hover:to-[#0D6CE8]/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <div className="text-3xl font-bold text-[#009DA5] group-hover:scale-110 transition-transform duration-300">69,000</div>
                        <div className="text-sm text-slate-500 group-hover:text-[#009DA5] transition-colors duration-300">Doanh thu</div>
                        <div className="opacity-0 group-hover:opacity-100 text-xs text-green-600 transition-opacity duration-300 mt-2 flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                          </svg>
                          +12% hôm nay
                        </div>
                      </div>

                      <div className="text-center group hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-yellow-500/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div className="text-3xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300">25,000</div>
                        <div className="text-sm text-slate-500 group-hover:text-orange-500 transition-colors duration-300">Lãi hàng</div>
                        <div className="opacity-0 group-hover:opacity-100 text-xs text-orange-600 transition-opacity duration-300 mt-2">
                          36% tỷ lệ lợi nhuận
                        </div>
                      </div>

                      <div className="text-center group hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="text-3xl font-bold text-green-500 group-hover:scale-110 transition-transform duration-300">+92%</div>
                        <div className="text-sm text-slate-500 group-hover:text-green-500 transition-colors duration-300">Tăng trưởng</div>
                        <div className="opacity-0 group-hover:opacity-100 text-xs text-green-600 transition-opacity duration-300 mt-2">
                          Tăng trưởng ổn định
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Interactive Chart */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h4 className="text-xl font-bold text-slate-900">Doanh thu tuần 7 ngày qua</h4>
                          <p className="text-slate-600">Tổng: 27,884,344 VNĐ</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-[#009DA5] rounded-full"></div>
                          <span className="text-sm text-slate-600">Doanh thu</span>
                        </div>
                      </div>

                      {/* Enhanced Chart container */}
                      <div className="h-48 bg-gradient-to-t from-slate-50 to-white rounded-2xl relative p-6 border border-slate-200">
                        {/* Grid lines */}
                        <div className="absolute inset-6 opacity-30">
                          <div className="h-full border-l border-dashed border-slate-300"></div>
                          <div className="absolute top-0 w-full h-px bg-slate-300"></div>
                          <div className="absolute top-1/4 w-full h-px bg-slate-300"></div>
                          <div className="absolute top-1/2 w-full h-px bg-slate-300"></div>
                          <div className="absolute top-3/4 w-full h-px bg-slate-300"></div>
                          <div className="absolute bottom-0 w-full h-px bg-slate-300"></div>
                        </div>

                        {/* Interactive bar chart */}
                        <div className="relative h-full flex items-end justify-between">
                          {chartData.map((bar, index) => (
                            <div key={bar.day} className="relative flex flex-col items-center h-full justify-end group">
                              <div
                                className={`w-10 rounded-t-xl transition-all duration-500 cursor-pointer group-hover:shadow-lg ${hoveredBar === index
                                  ? 'bg-gradient-to-t from-[#007a82] to-[#009DA5] shadow-xl transform scale-110'
                                  : 'bg-gradient-to-t from-[#009DA5] to-[#0D6CE8] hover:from-[#007a82] hover:to-[#009DA5] shadow-md'
                                  }`}
                                style={{
                                  height: `${bar.height}%`,
                                  minHeight: '24px'
                                }}
                                onMouseEnter={() => setHoveredBar(index)}
                                onMouseLeave={() => setHoveredBar(null)}
                              />

                              {/* Enhanced Tooltip */}
                              {hoveredBar === index && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-3 bg-slate-900 text-white text-sm rounded-xl shadow-2xl whitespace-nowrap z-50 animate-in fade-in-0 slide-in-from-bottom-2 duration-200">
                                  <div className="font-bold text-white">{bar.day}</div>
                                  <div className="text-slate-300">Doanh thu: {bar.displayValue}</div>
                                  <div className="text-xs text-slate-400 mt-1">Tăng 15% so với tuần trước</div>
                                  {/* Arrow */}
                                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Day labels */}
                      <div className="flex justify-between text-sm text-slate-600 mt-4 px-2">
                        {chartData.map(bar => (
                          <span key={bar.day} className="hover:text-[#009DA5] transition-colors duration-200 cursor-default font-medium">
                            {bar.day}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BackgroundGradient>
            </div>

            {/* Right side - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-slate-900 mb-6">
                  Phân tích dữ liệu thông minh
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Cung cấp thông tin cần thiết để đưa ra các quyết định kinh doanh phù hợp.
                  Tự động thống kê báo cáo chi tiết về doanh thu, lợi nhuận, chi phí mỗi ngày.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Báo cáo thời gian thực</h4>
                    <p className="text-slate-600">Cập nhật biểu đồ theo thời gian thực, lưu trữ lịch sử theo ngày, tuần, tháng, năm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">AI dự đoán xu hướng</h4>
                    <p className="text-slate-600">Sử dụng trí tuệ nhân tạo để dự đoán xu hướng bán hàng và đưa ra khuyến nghị</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Tối ưu hóa tự động</h4>
                    <p className="text-slate-600">Tự động tối ưu hóa quy trình bán hàng dựa trên dữ liệu phân tích</p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-[#009DA5] to-[#0D6CE8] hover:from-[#007a82] hover:to-[#0056b3] text-white px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group">
                <span className="group-hover:animate-pulse">Xem báo cáo chi tiết</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

       {/* Web App Section */}
       <div className="py-20 overflow-x-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Web App - Giao diện bán hàng trực tiếp<br />
              trên máy tính và tablet
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Web App mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                {/* Web App Interface */}
                <div className="bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] text-white rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Bán hàng</h3>
                    <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Hoạt động
                    </div>
                  </div>

                  <div className="bg-white text-gray-900 rounded-lg p-4">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span>Cà phê đen</span>
                        <span className="font-semibold">25,000đ</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Bánh mì</span>
                        <span className="font-semibold">15,000đ</span>
                      </div>
                      <hr />
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span>Tổng cộng</span>
                        <span className="text-[#009DA5]">40,000đ</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#009DA5] text-white py-3 rounded-lg font-semibold">
                      Thanh toán
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-[#0D6CE8]">127</div>
                    <div className="text-sm text-gray-600">Đơn hôm nay</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">2.8M</div>
                    <div className="text-sm text-gray-600">Doanh thu</div>
                  </div>
                </div>
              </div>

              {/* Web App badge */}
              <div className="absolute -top-4 -right-4 bg-blue-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                💻 Web App
              </div>
            </div>

            {/* Right side - Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Giao diện bán hàng tối ưu cho máy tính
                </h3>
                <p className="text-gray-600 mb-6">
                  Thiết kế dành riêng cho màn hình lớn, giúp việc bán hàng nhanh chóng và chính xác.
                  Hỗ trợ đầy đủ các tính năng như quét mã vạch, in hóa đơn, quản lý kho hàng.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#009DA5] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Giao diện tối ưu cho Desktop</h4>
                    <p className="text-gray-600">Thiết kế phù hợp với màn hình lớn, dễ sử dụng với chuột và bàn phím</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#009DA5] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tích hợp phần cứng</h4>
                    <p className="text-gray-600">Kết nối trực tiếp với máy in hóa đơn, máy quét mã vạch, ngăn kéo tiền</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#009DA5] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Báo cáo chi tiết</h4>
                    <p className="text-gray-600">Thống kê doanh thu, lợi nhuận, top sản phẩm bán chạy trong thời gian thực</p>
                  </div>
                </div>
              </div>

              <Button className="bg-[#0D6CE8] hover:bg-blue-700 text-white px-8 py-3 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                <span className="group-hover:animate-pulse">Trải nghiệm Web App</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

       {/* Mobile App Section */}
       <div className="py-20 overflow-x-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dễ dàng sử dụng mobile app di động<br />
              quản lý chỉ với một vài thao tác
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#009DA5] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Trên thiết bị di động, bạn quét mã QR hoặc truy cập CH/Play hoặc App Store để tìm kiếm và cài đặt ứng dụng của chúng tôi.
                  </h4>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#009DA5] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Sau khi cài đặt thành công bạn mở ứng dụng và chọn Đăng nhập. Bạn có thể đăng nhập bằng cách nhập mã OTP hoặc số điện thoại Đăng nhập.
                  </h4>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#009DA5] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Nếu chưa có tài khoản, chủ cửa hàng hãy đăng ký ngay dưới đây.
                  </h4>
                </div>
              </div>

              <Button className="bg-[#009DA5] hover:bg-[#007a82] text-white px-8 py-3 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                <span className="group-hover:animate-pulse">Đăng ký tài khoản</span>
              </Button>
            </div>

            {/* Right side - Mobile App Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                <img
                  src="/mobileApp.png"
                  alt="Mobile App Interface"
                  className="max-w-sm mx-auto rounded-2xl shadow-2xl"
                />
                {/* Mobile App badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  📱 Mobile App
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Customer Success Stories */}
       <div className="py-16 sm:py-20 overflow-x-hidden">
         <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex flex-col items-center">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/20 text-slate-700 text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Phản hồi từ khách hàng
            </div>
            <div className="flex justify-center">
              <TypewriterCustom
                words={words4}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center leading-tight"
                cursorClassName="bg-[#009DA5]"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-4 break-words leading-relaxed">
              Hơn 1000+ cửa hàng đã tin tưởng và sử dụng sản phẩm của ASA
            </p>
          </div>

          {/* Testimonials - Responsive: InfiniteMovingCards for web, Carousel for mobile */}
          {isMobile ? (
            // Mobile: Carousel
            <div className="flex justify-center items-center px-2 sm:px-4 mb-6 sm:mb-8">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-2 sm:p-4">
                <Carousel
                  items={testimonials.map(testimonial => ({
                    id: testimonial.id,
                    title: testimonial.title,
                    description: testimonial.content,
                    icon: testimonial.icon
                  }))}
                  baseWidth={350}
                  autoplay={true}
                  autoplayDelay={5000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
              </div>
            </div>
          ) : (
            // Web: InfiniteMovingCards
            <div className="flex justify-center items-center px-4 mb-8">
              <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                  items={infiniteTestimonials}
                  direction="right"
                  speed="normal"
                  pauseOnHover={true}
                  className="py-8 [&>ul>li]:bg-gradient-to-br [&>ul>li]:from-white [&>ul>li]:to-slate-50 [&>ul>li]:border [&>ul>li]:border-[#009DA5]/20 [&>ul>li]:shadow-xl [&>ul>li]:backdrop-blur-sm [&:ul>li]:hover:shadow-2xl [&:ul>li]:hover:scale-[1.02] [&:ul>li]:transition-all [&:ul>li]:duration-300 [&:ul>li]:ease-out [&:ul>li]:cursor-pointer [&:ul>li]:group [&:ul>li]:relative [&:ul>li]:overflow-hidden [&:ul>li]:testimonial-card"
                />
              </div>
            </div>
          )}

          {/* Customer count badge - Mobile only */}
          {isMobile && (
            <div className="text-center mt-6 sm:mt-8">
              <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mx-auto">
                <div className="flex -space-x-1 sm:-space-x-2 mr-2 sm:mr-3 md:mr-4">
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <div key={index} className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br ${testimonial.gradient} border-2 border-white flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{testimonial.avatar}</span>
                    </div>
                  ))}
                </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">+1000 khách hàng tin tưởng</span>
              </div>
            </div>
          )}
        </div>
    </div>

     {/* AI Features Section (restored) */}
     <div className="py-20 text-slate-900 overflow-x-hidden">
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
                words={aiWords}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center leading-tight"
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
              <CardItem as="p" translateZ="60" className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mt-2 text-center">
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
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#009DA5] rounded-full mr-3 flex-shrink-0"></span>Dự đoán xu hướng bán hàng</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#009DA5] rounded-full mr-3 flex-shrink-0"></span>Phân tích hành vi khách hàng</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#009DA5] rounded-full mr-3 flex-shrink-0"></span>Báo cáo thông minh 24/7</li>
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Smart Strategy */}
          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gradient-to-br from-white to-slate-50 relative group/card dark:bg-slate-900 dark:border-white/[0.2] border-slate-200/50 w-full max-w-sm h-auto rounded-xl p-6 shadow-xl">
              <CardItem translateZ="50" className="text-xl font-bold text-slate-900 dark:text-white text-center mb-4">Chiến Lược Kinh Doanh AI</CardItem>
              <CardItem as="p" translateZ="60" className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mt-2 text-center">
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
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Tối ưu giá bán theo thời gian</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Gợi ý sản phẩm combo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Chiến lược marketing thông minh</li>
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Smart Inventory */}
          <CardContainer className="inter-var w-full">
            <CardBody className="bg-gradient-to-br from-white to-slate-50 relative group/card dark:bg-slate-900 dark:border-white/[0.2] border-slate-200/50 w-full max-w-sm h-auto rounded-xl p-6 shadow-xl">
              <CardItem translateZ="50" className="text-xl font-bold text-slate-900 dark:text-white text-center mb-4">Quản Lý Kho Thông Minh</CardItem>
              <CardItem as="p" translateZ="60" className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mt-2 text-center">
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
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Dự đoán nhu cầu nhập hàng</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Tối ưu chi phí tồn kho</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Cảnh báo hết hàng thông minh</li>
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        {/* AI Dashboard Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: AI Dashboard Mock */}
          <div className="relative" ref={dashboardRef}>
            <ElectricBorder color="#99E1E4" speed={1.5} chaos={0.8} thickness={2} className="rounded-xl relative z-10">
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="font-semibold text-slate-900">Xu hướng bán hàng</span>
                      </div>
                      <p className="text-sm text-slate-700">Doanh thu dự kiến tăng 15% trong tuần tới</p>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-slate-200"><div className="text-2xl font-bold text-[#009DA5]">94%</div><div className="text-xs text-slate-600">Độ chính xác AI</div></div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-slate-200"><div className="text-2xl font-bold text-emerald-600">+23%</div><div className="text-xs text-slate-600">Tăng lợi nhuận</div></div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-slate-200"><div className="text-2xl font-bold text-orange-600">-35%</div><div className="text-xs text-slate-600">Giảm tồn kho</div></div>
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
                  <Highlight className="bg-gradient-to-r from-[#009DA5] to-[#0D6CE8]">Mà Còn Là Hiện Tại</Highlight>
                ) : (
                  <span>Mà Còn Là Hiện Tại</span>
                )}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">Hệ thống AI của chúng tôi học hỏi từ dữ liệu của chính cửa hàng bạn, đưa ra các quyết định kinh doanh thông minh và tự động hóa nhiều quy trình.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Học Từ Dữ Liệu Thực Tế</h4>
                  <p className="text-slate-600">AI phân tích patterns từ lịch sử bán hàng của cửa hàng bạn</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Tự Động Hóa Quyết Định</h4>
                  <p className="text-slate-600">Giảm 80% thời gian ra quyết định nhập hàng và pricing</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
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
     </div>
        </AuroraBackground>
      </div>
   )
 }

export default FeaturesSection
