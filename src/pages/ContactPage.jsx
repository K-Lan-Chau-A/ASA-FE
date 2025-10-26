import { AuroraBackground } from '@/components/ui/aurora-background'
import { PinContainer } from '@/components/ui/3d-pin'

const ContactPage = () => {
  
  return (
    <AuroraBackground className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 drop-shadow-lg">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto drop-shadow-md">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí!
          </p>
        </div>

        {/* Social Media Pins */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Facebook */}
          <PinContainer
            title="Facebook"
            href="https://www.facebook.com/share/17A6shn6kf/?mibextid=wwXIfr"
          >
            <div className="flex flex-col items-center justify-center p-4 w-full h-full text-center bg-white rounded-lg">
              <svg className="w-20 h-20 mb-2" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </PinContainer>

          {/* Instagram */}
          <PinContainer
            title="Instagram"
            href="https://www.instagram.com/asa_aistoreassistant?igsh=MWF2dGIxY2N4N2FkdA=="
          >
            <div className="flex flex-col items-center justify-center p-4 w-full h-full text-center bg-white rounded-lg">
              <svg className="w-20 h-20 mb-2" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.225-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </PinContainer>

          {/* TikTok */}
          <PinContainer
            title="TikTok"
            href="https://www.tiktok.com/@kylanchaua?_t=ZS-90FDT0YiiBx&_r=1"
          >
            <div className="flex flex-col items-center justify-center p-4 w-full h-full text-center bg-white rounded-lg">
              <svg className="w-20 h-20 mb-2" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 455 512.098">
                <path fill="#000000" fillRule="nonzero" d="M321.331.011h-81.882v347.887c0 45.59-32.751 74.918-72.582 74.918-39.832 0-75.238-29.327-75.238-74.918 0-52.673 41.165-80.485 96.044-74.727v-88.153c-7.966-1.333-15.932-1.77-22.576-1.77C75.249 183.248 0 255.393 0 344.794c0 94.722 74.353 167.304 165.534 167.304 80.112 0 165.097-58.868 165.097-169.96V161.109c35.406 35.406 78.341 46.476 124.369 46.476V126.14C398.35 122.151 335.494 84.975 321.331 0v.011z"/>
              </svg>
            </div>
          </PinContainer>

          {/* Gmail */}
          <PinContainer
            title="Gmail"
            href="mailto:aistoreassistant@gmail.com"
          >
            <div className="flex flex-col items-center justify-center p-4 w-full h-full text-center bg-white rounded-lg">
              <svg className="w-20 h-20 mb-2" viewBox="0 0 24 24" fill="#EA4335">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </div>
          </PinContainer>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default ContactPage
