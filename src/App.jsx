import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingChatbot from './components/FloatingChatbot'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import PricingPage from './pages/PricingPage'
import SupportPage from './pages/SupportPage'
import ContactPage from './pages/ContactPage'
import TrialPage from './pages/TrialPage'
import BuyPage from './pages/BuyPage'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/trial" element={<TrialPage />} />
            <Route path="/buy" element={<BuyPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingChatbot />
      </div>
    </Router>
  )
}
