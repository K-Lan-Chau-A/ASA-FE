import { AuroraBackground } from '@/components/ui/aurora-background'
const SupportPage = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <AuroraBackground className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Trung tâm hỗ trợ
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 với đội ngũ chuyên viên tận tình và AI Assistant thông minh
            </p>
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}

export default SupportPage
