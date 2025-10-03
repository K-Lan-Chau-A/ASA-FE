import PricingSection from '../components/PricingSection'
import { AuroraBackground } from '@/components/ui/aurora-background'

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009DA5]/5 to-[#0D6CE8]/5">
      {/* Header */}
      <AuroraBackground className="pt-16 py-12 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 drop-shadow-lg">
            Bảng giá dịch vụ
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto drop-shadow-md">
            Tùy chọn phù hợp với mọi mô hình quản lý kinh doanh, từ cửa hàng nhỏ đến các chuỗi lớn
          </p>
        </div>
      </AuroraBackground>
      
      <PricingSection />
    </div>
  )
}

export default PricingPage
