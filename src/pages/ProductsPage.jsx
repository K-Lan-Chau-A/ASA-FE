import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { AuroraBackground2 } from '@/components/ui/aurora-background2'
import { MacbookScroll } from '@/components/ui/macbook-scroll'
import { IphoneScroll } from '@/components/ui/iphone16-pro'

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('web')

  // Read URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const tabParam = urlParams.get('tab')
    
    // Validate tab parameter and set if valid
    if (tabParam && ['web', 'desktop', 'mobile'].includes(tabParam)) {
      setActiveTab(tabParam)
    }

    // Handle browser back/forward buttons
    const handlePopState = (event) => {
      const urlParams = new URLSearchParams(window.location.search)
      const tabParam = urlParams.get('tab')
      
      if (tabParam && ['web', 'desktop', 'mobile'].includes(tabParam)) {
        setActiveTab(tabParam)
      } else {
        setActiveTab('web')
      }
    }

    window.addEventListener('popstate', handlePopState)
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // Function to handle tab change and update URL
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    
    // Update URL without page reload
    const newUrl = `${window.location.pathname}?tab=${tab}`
    window.history.pushState({ tab }, '', newUrl)
  }

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
    <div className="min-h-screen bg-gradient-to-br from-[#009DA5]/5 to-[#0D6CE8]/5">
      {/* Header */}
      <AuroraBackground className="pt-16 py-12 text-slate-900 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 drop-shadow-lg">
            Sản phẩm của chúng tôi
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto drop-shadow-md">
            Hệ sinh thái hoàn chỉnh cho mọi nhu cầu quản lý bán hàng: từ Web, Desktop đến Mobile App
          </p>
        </div>
      </AuroraBackground>

      {/* MacBook Scroll Section */}
      <AuroraBackground2 className="relative -mt-60">
        <MacbookScroll
          src="/logoASA.png"
        />
      </AuroraBackground2>

      {/* iPhone Scroll Section - đưa lên sát MacBook */}
      <AuroraBackground2 className="relative -mt-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IphoneScroll
            src="/mobileApp.png" 
          />
        </div>
      </AuroraBackground2>

      {/* Khoảng trắng để xem ảnh di chuyển ra ngoài */}
      <div className="h-96"></div>
    </div>
  )
}

export default ProductsPage
