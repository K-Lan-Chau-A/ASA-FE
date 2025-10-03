const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logoASA.png" 
                alt="ASA - AI STORE ASSISTANT" 
                className="h-10 w-10 mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">ASA - AI STORE ASSISTANT</h3>
                <p className="text-gray-400 text-sm">Tinh giản quá trình, vươn mình tiến xa</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Chúng tôi là một đội ngũ kinh nghiệm trẻ, đầy nhiệt huyết, mang hoài bão cống hiến vào hoạt động kinh doanh nhỏ lẻ cho các chủ kinh doanh.
            </p>
            <div className="flex space-x- text-gray-400 mb-4 max-w-md">
             Một sản phẩm của Kỳ Lân Châu Á
            </div>
            {/* Socials */}
            <div className="flex items-center space-x-4 mt-2">
              <a href="https://www.facebook.com/share/17A6shn6kf/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22 12.06C22 6.5 17.52 2 11.94 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.76-1.62 1.54v1.85h2.76l-.44 2.9h-2.32v7.03C18.34 21.21 22 17.06 22 12.06Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/asa_aistoreassistant?igsh=MWF2dGIxY2N4N2FkdA==" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/>
                  <circle cx="17.5" cy="6.5" r="1.3" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@kylanchaua?_t=ZS-90FDT0YiiBx&_r=1" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="h-5 w-5">
                  <path d="M41 17.5c-4.2 0-7.8-2.7-9.1-6.5v19.2c0 6.1-5 11-11.1 11s-11.1-4.9-11.1-11c0-6 4.8-10.9 10.9-11.1v5.8c-2.8.3-5 2.6-5 5.4 0 3 2.5 5.5 5.6 5.5s5.6-2.5 5.6-5.6V6h5.6c1.2 4.1 4.9 7.1 9.2 7.4V17.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sản phẩm */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sản phẩm của chúng tôi</h4>
            <ul className="space-y-2">
              <li><a href="/products?tab=web" className="text-gray-400 hover:text-white transition-colors">Dành cho website</a></li>
              <li><a href="/products?tab=desktop" className="text-gray-400 hover:text-white transition-colors">Dành cho ứng dụng máy tính</a></li>
              <li><a href="/products?tab=mobile" className="text-gray-400 hover:text-white transition-colors">Dành cho ứng dụng di động</a></li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Liên hệ hỗ trợ</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Asian Unicorn. Tất cả quyền được bảo lưu.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Asian Unicorn, 7 đường D1, Long Thạnh Mỹ, Thủ Đức, TP.HCM</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">📞</span>
              <span className="text-gray-400 text-sm">0356882700</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
