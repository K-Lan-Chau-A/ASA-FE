import { useState, useEffect } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { MacbookScroll } from '@/components/ui/macbook-scroll'
import { IphoneScroll } from '@/components/ui/iphone16-pro'

const ProductsPage = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AuroraBackground className="min-h-screen">
      {/* Header */}
      <div className="pt-16 py-12 text-slate-900 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 drop-shadow-lg">
            Sản phẩm của chúng tôi
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto drop-shadow-md">
            Hệ sinh thái hoàn chỉnh cho mọi nhu cầu quản lý bán hàng: từ Web, Desktop đến Mobile App
          </p>
        </div>
      </div>

      {/* MacBook Scroll Section */}
      <div className="relative -mt-60 sm:-mt-40 md:-mt-60">
        <MacbookScroll
          src="/webApp.png"
          scrollY={scrollY}
        />
      </div>

      {/* iPhone Scroll Section - đưa lên sát MacBook */}
      <div className="relative -mt-60 sm:-mt-40 md:-mt-60 overflow-x-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <IphoneScroll
            src="/mobileApp.png" 
          />
        </div>
      </div>

      {/* Khoảng trắng để logo có thời gian ẩn phía sau iPhone */}
      <div className="h-[400px]"></div>
    </AuroraBackground>
  )
}

export default ProductsPage
