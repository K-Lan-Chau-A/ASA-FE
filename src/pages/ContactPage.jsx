import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/aurora-background'

const ContactPage = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009DA5]/5 to-[#0D6CE8]/5">
      {/* Header */}
      <AuroraBackground className="pt-16 py-12 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 drop-shadow-lg">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto drop-shadow-md">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí!
          </p>
        </div>
      </AuroraBackground>
    </div>
  )
}

export default ContactPage
