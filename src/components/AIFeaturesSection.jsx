import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const AIFeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-6">
            <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-purple-300 font-semibold">Powered by AI</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Trí Tuệ Nhân Tạo Quản Lý Kinh Doanh
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hệ thống AI tiên tiến giúp phân tích dữ liệu bán hàng, đưa ra chiến lược kinh doanh thông minh 
            và tối ưu hóa việc nhập kho dựa trên xu hướng thị trường
          </p>
        </div>

        {/* Main AI Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Analytics */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <CardTitle className="text-white text-xl">Phân Tích Dữ Liệu Thông Minh</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-center">
                AI phân tích dữ liệu bán hàng, nhận dạng xu hướng và đưa ra dự đoán chính xác về nhu cầu khách hàng
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                  Dự đoán xu hướng bán hàng
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                  Phân tích hành vi khách hàng
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                  Báo cáo thông minh 24/7
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Smart Strategy */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <CardTitle className="text-white text-xl mb-2">Chiến Lược Kinh Doanh AI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center mb-4">
                Hệ thống đưa ra các chiến lược kinh doanh tối ưu dựa trên dữ liệu thị trường và hiệu suất bán hàng
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Tối ưu giá bán theo thời gian
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Gợi ý sản phẩm combo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Chiến lược marketing thông minh
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Smart Inventory */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <CardTitle className="text-white text-xl mb-2">Quản Lý Kho Thông Minh</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center mb-4">
                AI tự động tính toán lượng hàng cần nhập, thời điểm nhập hàng tối ưu dựa trên dữ liệu bán hàng
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Dự đoán nhu cầu nhập hàng
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Tối ưu chi phí tồn kho
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Cảnh báo hết hàng thông minh
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* AI Dashboard Preview */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: AI Dashboard Mock */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">AI Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">AI đang phân tích</span>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="space-y-4 mb-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-semibold text-purple-900">Gợi ý chiến lược</span>
                    </div>
                    <p className="text-sm text-purple-800">Tăng giá cà phê 10% vào buổi sáng để tối ưu lợi nhuận</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      <span className="font-semibold text-blue-900">Dự báo nhập kho</span>
                    </div>
                    <p className="text-sm text-blue-800">Nên nhập thêm 50kg bánh mì trong 3 ngày tới</p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="font-semibold text-green-900">Xu hướng bán hàng</span>
                    </div>
                    <p className="text-sm text-green-800">Doanh thu dự kiến tăng 15% trong tuần tới</p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">94%</div>
                    <div className="text-xs text-gray-600">Độ chính xác AI</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+23%</div>
                    <div className="text-xs text-gray-600">Tăng lợi nhuận</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">-35%</div>
                    <div className="text-xs text-gray-600">Giảm tồn kho</div>
                  </div>
                </div>
              </div>

              {/* Floating AI Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-500 rounded-full animate-pulse"></div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                AI Không Chỉ Là Tương Lai<br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Mà Là Hiện Tại
                </span>
              </h3>
              
              <p className="text-xl text-gray-300">
                Hệ thống AI của chúng tôi học hỏi từ dữ liệu của chính cửa hàng bạn, 
                đưa ra các quyết định kinh doanh thông minh và tự động hóa nhiều quy trình.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Học Từ Dữ Liệu Thực Tế</h4>
                    <p className="text-gray-300">AI phân tích patterns từ lịch sử bán hàng của cửa hàng bạn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Tự Động Hóa Quyết Định</h4>
                    <p className="text-gray-300">Giảm 80% thời gian ra quyết định nhập hàng và pricing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Cải Thiện Liên Tục</h4>
                    <p className="text-gray-300">AI càng sử dụng càng thông minh, độ chính xác tăng theo thời gian</p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-xl shadow-2xl">
                Trải Nghiệm AI Ngay
              </Button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Kết Quả Thực Tế Từ Khách Hàng
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">+45%</div>
              <div className="text-white font-semibold mb-2">Tăng Lợi Nhuận</div>
              <div className="text-gray-300 text-sm">Quán Cafe Sài Gòn</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">-60%</div>
              <div className="text-white font-semibold mb-2">Giảm Hàng Tồn</div>
              <div className="text-gray-300 text-sm">Cửa Hàng Tạp Hóa ABC</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-emerald-400 mb-2">90%</div>
              <div className="text-white font-semibold mb-2">Độ Chính Xác Dự Đoán</div>
              <div className="text-gray-300 text-sm">Shop Thời Trang HN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIFeaturesSection
