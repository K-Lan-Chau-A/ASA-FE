import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50">
      {/* Main Features Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#009DA5] font-semibold text-lg mb-4">
            Quản lý kho theo phương pháp truyền thống, để gây ra tình trạng thiếu hoặc thừa hàng ? Thiếu chính xác ?
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            ASA cung cấp giải pháp POS giúp bạn<br />
            quản lý nhanh gọn, chính xác và hiệu quả
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#0D6CE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dễ tiếp cận & Dễ sử dụng</h3>
              <p className="text-gray-600">
                Giao diện đơn giản, trực quan như Facebook<br />
                Chỉ mất 15 phút là làm quen được ngay.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
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

            {/* Feature 3 */}
            <div className="text-center">
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
      </section>

      {/* Thời đại công nghệ đổi mới */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#009DA5] font-semibold text-lg mb-4">
              Thời đại công nghệ đổi mới với AI
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Quản lý bán hàng Tạp hóa & Siêu thị hiệu quả
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Features */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Thanh toán nhanh chóng, in hóa đơn tiện lợi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Tự động gợi ý sản phẩm trực tiếp lên màn hình, 
                    kết nối máy in hóa đơn tự động. Tăng tốc bán hàng, đảm bảo 
                    chính xác, giảm sai sót.
                  </p>
                  
                  {/* Payment amount display */}
                  <Card className="bg-gradient-to-r from-[#009DA5] to-[#0D6CE8] text-white border-0">
                    <CardContent className="flex justify-between items-center p-6">
                      <div>
                        <div className="text-sm opacity-90">Khách cần trả</div>
                        <div className="text-3xl font-bold">1,800,000</div>
                      </div>
                      <Button className="bg-white text-[#009DA5] hover:bg-gray-100">
                        Thanh toán
                      </Button>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Inventory management */}
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Nắm bắt tồn kho nhanh, bổ sung hàng kịp thời
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Giảm thiểu tình trạng thừa thiếu hàng hóa bằng thông tin cung cấp 
                    chính xác. Quản lý số lượng hàng tồn kho, cảnh báo hàng sắp hết, 
                    hàng tồn nhiều để có kế hoạch và hành động phù hợp.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right side - App Screenshot */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                {/* Mobile App Mock */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#009DA5] text-white p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Tồn kho</h4>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                        <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Tất cả</span>
                      <span className="text-gray-500">〉</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Quần áo nam/nữ</span>
                      <span className="text-gray-500">〉</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Váy đầm mùa hè</span>
                      <span className="text-gray-500">〉</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Còn hàng trong kho</span>
                      <span className="text-gray-500">〉</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Hết hàng trong kho</span>
                      <span className="text-gray-500">〉</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Analytics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Analytics Dashboard */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#009DA5]">69,000</div>
                    <div className="text-sm text-gray-500">Doanh thu</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">25,000</div>
                    <div className="text-sm text-gray-500">Lãi hàng</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">+92.09%</div>
                    <div className="text-sm text-gray-500">Doanh thu từ tháng trước</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Doanh thu tuần 7 ngày qua</h4>
                  <div className="text-2xl font-bold text-gray-900 mb-2">27,884,344</div>
                  <div className="h-32 bg-gradient-to-t from-[#009DA5]/20 to-[#009DA5]/5 rounded-lg relative">
                    {/* Simple bar chart simulation */}
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-4">
                      <div className="w-8 bg-[#009DA5] rounded-t" style={{ height: '60%' }}></div>
                      <div className="w-8 bg-[#009DA5] rounded-t" style={{ height: '80%' }}></div>
                      <div className="w-8 bg-[#009DA5] rounded-t" style={{ height: '45%' }}></div>
                      <div className="w-8 bg-[#009DA5] rounded-t" style={{ height: '70%' }}></div>
                      <div className="w-8 bg-[#009DA5] rounded-t" style={{ height: '55%' }}></div>
                      <div className="w-8 bg-[#009DA5] rounded-t" style={{ height: '90%' }}></div>
                      <div className="w-8 bg-[#009DA5] rounded-t" style={{ height: '75%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>T2</span>
                    <span>T3</span>
                    <span>T4</span>
                    <span>T5</span>
                    <span>T6</span>
                    <span>T7</span>
                    <span>CN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Báo cáo doanh thu lỗ lãi rõ ràng
                </h3>
                <p className="text-gray-600">
                  Tự động thống kê báo cáo chi tiết về doanh thu, lợi nhuận, chi phí 
                  mỗi ngày. Cập nhật biểu đồ theo thời gian thực, lưu trữ lịch sử 
                  theo ngày, tuần, tháng, năm. Cung cấp thông tin cần thiết để đưa ra 
                  các quyết định kinh doanh phù hợp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web App Section */}
      <section className="py-20 bg-gray-50">
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

              <Button className="bg-[#0D6CE8] hover:bg-blue-700 text-white px-8 py-3">
                Trải nghiệm Web App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-white">
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

              <Button className="bg-[#009DA5] hover:bg-[#007a82] text-white px-8 py-3">
                Đăng ký tài khoản
              </Button>
            </div>

            {/* Right side - Mobile Phone mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm mx-auto">
                  {/* Phone header */}
                  <div className="bg-white text-gray-900 p-4 flex justify-between items-center border-b">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-lg">TRANG CHỦ</h4>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3h5v14z" />
                      </svg>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Hôm nay, ngày 1/1/2025</span>
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
                        <div className="text-sm text-gray-500 mb-1">12 hóa đơn</div>
                        <div className="text-2xl font-bold text-gray-900">12</div>
                      </div>
                      <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
                        <div className="text-sm text-gray-500 mb-1">Lợi nhuận</div>
                        <div className="text-lg font-bold text-[#009DA5]">365,000 VND</div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">Bánh gạo</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">Nước lọc</span>
                        </div>
                      </div>
                      
                      <div className="text-right mb-2">
                        <span className="text-lg font-bold text-gray-900">$276.32</span>
                        <div className="text-xs text-gray-500">August</div>
                      </div>

                      {/* Simple line chart */}
                      <div className="h-16 relative">
                        <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                          <polyline
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            points="0,40 50,30 100,35 150,25 200,30 250,20 300,25"
                          />
                          <polyline
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="2"
                            points="0,50 50,45 100,40 150,35 200,40 250,30 300,35"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Products section */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Sản phẩm bán chạy</h5>
                      
                      {/* Circular progress */}
                      <div className="flex justify-center mb-4">
                        <div className="relative w-24 h-24">
                          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#E5E7EB"
                              strokeWidth="2"
                            />
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#F59E0B"
                              strokeWidth="2"
                              strokeDasharray="60, 100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-lg font-bold text-gray-900">22,870</span>
                            <span className="text-sm text-gray-500">Tổng lượt bán</span>
                          </div>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600">Nước lọc 2.1k</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-600">Bánh gạo 1k</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">Thuốc lá 1.9k</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-600">Cà phê 15.7k</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom navigation */}
                  <div className="border-t bg-gray-50">
                    <div className="grid grid-cols-4 py-2">
                      <div className="text-center p-2">
                        <div className="w-8 h-8 bg-[#009DA5] rounded-full mx-auto mb-1 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <span className="text-xs text-[#009DA5] font-medium">Trang chủ</span>
                      </div>
                      <div className="text-center p-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-1 flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500">Hóa đơn</span>
                      </div>
                      <div className="text-center p-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-1 flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5L3 1m4 12v6a1 1 0 001 1h1m0 0h4m-5 0a2 2 0 104 0m-4 0a2 2 0 014 0" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500">Hàng hóa</span>
                      </div>
                      <div className="text-center p-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-1 flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500">Nhiều hơn</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile App badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  📱 Mobile App
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-xl text-gray-600">
              Hơn 1000+ cửa hàng đã tin tùng và sử dụng sản phẩm của ASA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Anh Minh Tuấn</h4>
                    <p className="text-sm text-muted-foreground">Chủ quán café The Coffee</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  "Từ khi dùng ASA, việc quản lý quán café trở nên dễ dàng hơn nhiều. 
                  Tôi có thể theo dõi doanh thu, quản lý kho hàng ngay trên điện thoại."
                </p>
                <div className="flex text-yellow-400 text-lg">
                  {"★".repeat(5)}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">LA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Chị Lan Anh</h4>
                    <p className="text-sm text-muted-foreground">Shop thời trang Belleza</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  "AI gợi ý nhập hàng rất chính xác. Tôi không còn lo thiếu hàng vào những ngày cao điểm. 
                  Doanh thu tăng 30% sau 3 tháng sử dụng."
                </p>
                <div className="flex text-yellow-400 text-lg">
                  {"★".repeat(5)}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ĐT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Anh Đức Thành</h4>
                    <p className="text-sm text-muted-foreground">Cửa hàng tạp hóa Hạnh Phúc</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  "Giao diện đơn giản, nhân viên học rất nhanh. Máy in hóa đơn kết nối mượt mà, 
                  không bao giờ bị lỗi như phần mềm cũ."
                </p>
                <div className="flex text-yellow-400 text-lg">
                  {"★".repeat(5)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Phù hợp với mọi loại hình kinh doanh
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Quán cafe - trà sữa</h4>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Shop thời trang</h4>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Cửa hàng, tạp hóa</h4>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Quán bida</h4>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Dịch vụ thuê sân</h4>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5L3 1m4 12v6a1 1 0 001 1h1m0 0h4m-5 0a2 2 0 104 0m-4 0a2 2 0 014 0" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Nhà hàng, quán ăn</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesSection
