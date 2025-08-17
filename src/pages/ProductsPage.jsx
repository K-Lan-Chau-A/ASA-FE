import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('web')

  const products = {
    web: {
      title: "Web POS - Quản lý bán hàng trên trình duyệt",
      description: "Giao diện bán hàng tối ưu cho máy tính, tablet. Kết nối trực tiếp với phần cứng POS.",
      features: [
        "Giao diện tối ưu cho màn hình lớn",
        "Kết nối máy in hóa đơn, quét mã vạch",
        "Quản lý nhiều ca làm việc",
        "Báo cáo real-time",
        "Hỗ trợ offline mode",
        "Tích hợp thanh toán đa dạng"
      ],
      image: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    desktop: {
      title: "Desktop App - Ứng dụng máy tính chuyên nghiệp", 
      description: "Phần mềm cài đặt trên Windows/Mac với hiệu năng cao, tích hợp sâu với hệ thống.",
      features: [
        "Hiệu năng cao, xử lý nhanh",
        "Tích hợp sâu với Windows/Mac",
        "Hỗ trợ nhiều màn hình",
        "Backup dữ liệu tự động",
        "Bảo mật nâng cao",
        "Hoạt động hoàn toàn offline"
      ],
      image: "🖥️",
      color: "from-purple-500 to-indigo-500"
    },
    mobile: {
      title: "Mobile App - Quản lý di động mọi lúc mọi nơi",
      description: "Ứng dụng di động cho iOS/Android, theo dõi kinh doanh real-time từ bất cứ đâu.",
      features: [
        "Theo dõi doanh thu real-time",
        "Quản lý kho hàng di động",
        "Notifications thông minh",
        "Phân tích AI insights",
        "Quét mã vạch bằng camera",
        "Đồng bộ đa thiết bị"
      ],
      image: "📱",
      color: "from-emerald-500 to-teal-500"
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Sản phẩm của chúng tôi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hệ sinh thái hoàn chỉnh cho mọi nhu cầu quản lý bán hàng: từ Web, Desktop đến Mobile App
          </p>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 sm:mb-16 px-4">
            <div className="relative bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm rounded-2xl p-1.5 border border-border/50 shadow-lg w-full max-w-3xl">
              {/* Background indicator */}
              <div 
                className={`absolute top-1.5 h-[calc(100%-12px)] bg-gradient-to-r from-primary to-secondary rounded-xl transition-all duration-500 ease-out shadow-md ${
                  activeTab === 'web' ? 'left-1.5 w-[calc(33.333%-6px)]' :
                  activeTab === 'desktop' ? 'left-[calc(33.333%+1.5px)] w-[calc(33.333%-6px)]' :
                  'left-[calc(66.666%+1.5px)] w-[calc(33.333%-6px)]'
                }`}
              />
              
              <div className="relative flex">
                {Object.entries(products).map(([key, product], index) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative px-3 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group flex-1 ${
                      activeTab === key
                        ? 'text-white z-10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                    }`}
                  >
                    <span className={`text-xl sm:text-2xl transition-transform duration-300 ${
                      activeTab === key ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                      {product.image}
                    </span>
                    <span className="font-medium text-xs sm:text-sm lg:text-base ml-2 hidden sm:block">
                      {key === 'web' ? 'Web POS' : key === 'desktop' ? 'Desktop App' : 'Mobile App'}
                    </span>
                    <span className="font-medium text-xs sm:hidden ml-1">
                      {key === 'web' ? 'Web' : key === 'desktop' ? 'Desktop' : 'Mobile'}
                    </span>
                    
                    {/* Hover effect */}
                    {activeTab !== key && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-sm" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full blur-sm" />
            </div>
          </div>

          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Product Info */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {products[activeTab].title}
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  {products[activeTab].description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Tính năng nổi bật:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {products[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="mr-2">🚀</span>
                  Dùng thử ngay
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <span className="mr-2 group-hover:animate-pulse">👁️</span>
                  Xem demo
                </Button>
              </div>
            </div>

            {/* Right: Visual Demo */}
            <div className="relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-primary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
              
              <Card className={`relative bg-gradient-to-br ${products[activeTab].color} text-white border-0 shadow-2xl transform transition-all duration-700 hover:shadow-3xl hover:scale-105 overflow-hidden`}>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />
                
                <CardHeader className="text-center relative z-10">
                  <div className="relative inline-block">
                    <div className="text-8xl mb-4 transform transition-transform duration-500 hover:scale-110">
                      {products[activeTab].image}
                    </div>
                    {/* Animated ring around icon */}
                    <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-ping" style={{animationDuration: '3s'}} />
                    <div className="absolute inset-2 border-2 border-white/20 rounded-full animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl text-white font-bold bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                    {activeTab === 'web' ? 'Web POS Interface' : 
                     activeTab === 'desktop' ? 'Desktop Application' : 
                     'Mobile Dashboard'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {activeTab === 'web' && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/20 rounded p-3 text-center">
                          <div className="text-2xl font-bold">127</div>
                          <div className="text-sm opacity-90">Đơn hôm nay</div>
                        </div>
                        <div className="bg-white/20 rounded p-3 text-center">
                          <div className="text-2xl font-bold">2.8M</div>
                          <div className="text-sm opacity-90">Doanh thu</div>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded p-4">
                        <div className="text-sm mb-2">Sản phẩm bán chạy:</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Cà phê</span>
                            <span>45 ly</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bánh mì</span>
                            <span>32 ổ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'desktop' && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <div className="mb-4">
                        <div className="text-lg font-semibold mb-2">Workspace Manager</div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white/20 rounded p-2 text-center text-sm">
                            <div>💻</div>
                            <div>POS 1</div>
                          </div>
                          <div className="bg-white/20 rounded p-2 text-center text-sm">
                            <div>🖨️</div>
                            <div>Printer</div>
                          </div>
                          <div className="bg-white/20 rounded p-2 text-center text-sm">
                            <div>💳</div>
                            <div>Payment</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded p-3">
                        <div className="text-sm">System Status: Online ✅</div>
                        <div className="text-sm">Last Backup: 2 mins ago</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'mobile' && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Doanh thu hôm nay</span>
                          <span className="text-lg font-bold">2,850,000₫</span>
                        </div>
                        <div className="bg-white/20 rounded p-3">
                          <div className="text-sm mb-2">📊 Thống kê nhanh</div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>📦 Tồn kho: 245</div>
                            <div>👥 Khách hàng: 89</div>
                            <div>🏪 Chi nhánh: 3</div>
                            <div>⭐ Rating: 4.8</div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded p-2">
                          <div className="text-xs">🔔 2 thông báo mới</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              So sánh các sản phẩm
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Chọn giải pháp phù hợp nhất với nhu cầu của bạn
            </p>
          </div>

          {/* Mobile Card Layout */}
          <div className="block lg:hidden space-y-6">
            {[
              { name: 'Web POS', icon: '💻', color: 'from-blue-500 to-cyan-500' },
              { name: 'Desktop App', icon: '🖥️', color: 'from-purple-500 to-indigo-500' },
              { name: 'Mobile App', icon: '📱', color: 'from-emerald-500 to-teal-500' }
            ].map((product, idx) => (
              <Card key={idx} className={`bg-gradient-to-r ${product.color} text-white border-0`}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <span className="text-3xl">{product.icon}</span>
                    <span>{product.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    ['Quản lý bán hàng', ['✅', '✅', '📊'][idx]],
                    ['Tích hợp phần cứng', ['✅', '✅', '❌'][idx]],
                    ['Hoạt động offline', ['⚠️', '✅', '⚠️'][idx]],
                    ['Hiệu năng cao', ['⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐'][idx]],
                    ['Theo dõi từ xa', ['❌', '❌', '✅'][idx]],
                    ['Dễ cài đặt', ['✅', '⚠️', '✅'][idx]],
                    ['Chi phí', ['Thấp', 'Trung bình', 'Thấp'][idx]]
                  ].map(([feature, value], index) => (
                    <div key={index} className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                      <span className="font-medium">{feature}</span>
                      <span className="text-lg">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop Table Layout */}
          <Card className="overflow-hidden hidden lg:block">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-6 font-semibold">Tính năng</th>
                    <th className="text-center p-6 font-semibold">💻 Web POS</th>
                    <th className="text-center p-6 font-semibold">🖥️ Desktop App</th>
                    <th className="text-center p-6 font-semibold">📱 Mobile App</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ['Quản lý bán hàng', '✅', '✅', '📊'],
                    ['Tích hợp phần cứng', '✅', '✅', '❌'],
                    ['Hoạt động offline', '⚠️', '✅', '⚠️'],
                    ['Hiệu năng cao', '⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐'],
                    ['Theo dõi từ xa', '❌', '❌', '✅'],
                    ['Dễ cài đặt', '✅', '⚠️', '✅'],
                    ['Chi phí', 'Thấp', 'Trung bình', 'Thấp']
                  ].map(([feature, web, desktop, mobile], index) => (
                    <tr key={index} className="hover:bg-muted/20">
                      <td className="p-6 font-medium">{feature}</td>
                      <td className="p-6 text-center text-lg">{web}</td>
                      <td className="p-6 text-center text-lg">{desktop}</td>
                      <td className="p-6 text-center text-lg">{mobile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Liên hệ với chúng tôi để được tư vấn giải pháp phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8">
              <span className="mr-2">🎯</span>
              Dùng thử miễn phí 14 ngày
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 group px-8">
              <span className="mr-2 group-hover:animate-bounce">📅</span>
              Đặt lịch demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
