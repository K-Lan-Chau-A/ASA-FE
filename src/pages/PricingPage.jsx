import PricingSection from '../components/PricingSection'

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009DA5]/5 to-[#0D6CE8]/5">
      {/* Header */}
      <section className="pt-16 py-20 bg-gradient-to-br from-[#009DA5] to-[#0D6CE8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Bảng giá dịch vụ
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tùy chọn phù hợp với mọi mô hình quản lý kinh doanh, từ cửa hàng nhỏ đến các chuỗi lớn
          </p>
        </div>
      </section>
      
      <PricingSection />
    </div>
  )
}

export default PricingPage
