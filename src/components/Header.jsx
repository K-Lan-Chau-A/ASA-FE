import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/asianUnicorn.png" 
                alt="Asian Unicorn" 
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
            </div>
            <div className="ml-2 sm:ml-3">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">ASA</h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Công nghệ vượt trội, tích hợp mọi phần cứng</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
            >
              Trang chủ
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${isActive('/products') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
            >
              Sản phẩm
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${isActive('/pricing') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
            >
              Phí dịch vụ
            </Link>
            <Link 
              to="/support" 
              className={`transition-colors ${isActive('/support') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
            >
              Hỗ trợ
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
            >
              Liên hệ
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-[#009DA5] text-[#009DA5] hover:bg-[#009DA5] hover:text-white">
              Đăng nhập
            </Button>
            <Button className="bg-[#009DA5] hover:bg-[#007a82] text-white">
              Dùng thử miễn phí
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#009DA5] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link 
                to="/" 
                className={`block px-3 py-2 ${isActive('/') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link 
                to="/products" 
                className={`block px-3 py-2 ${isActive('/products') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sản phẩm
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-3 py-2 ${isActive('/pricing') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Phí dịch vụ
              </Link>
              <Link 
                to="/support" 
                className={`block px-3 py-2 ${isActive('/support') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hỗ trợ
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 ${isActive('/contact') ? 'text-[#009DA5] font-semibold' : 'text-gray-700 hover:text-[#009DA5]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full border-[#009DA5] text-[#009DA5] hover:bg-[#009DA5] hover:text-white">
                  Đăng nhập
                </Button>
                <Button className="w-full bg-[#009DA5] hover:bg-[#007a82] text-white">
                  Dùng thử miễn phí
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
