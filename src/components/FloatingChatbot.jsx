import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'bot',
      message: 'Xin chào! Tôi có thể giúp gì cho bạn hôm nay? 😊',
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  // Auto scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages, isTyping])

  const quickReplies = ['Giá cả', 'Demo sản phẩm', 'Hỗ trợ kỹ thuật', 'Liên hệ']

  const handleSendMessage = () => {
    if (!inputMessage.trim() || inputMessage.length > 500) return
    
    const newMessage = {
      type: 'user',
      message: inputMessage,
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }
    
    setChatMessages(prev => [...prev, newMessage])
    setInputMessage('')
    setIsTyping(true)
    
    // Simulate AI response
    setTimeout(() => {
      const responses = {
        'giá': 'Gói cơ bản: 150,000đ/tháng, Gói chuyên nghiệp: 300,000đ/tháng. Bạn muốn tôi giải thích chi tiết hơn không?',
        'demo': 'Tuyệt vời! Tôi sẽ kết nối bạn với team để đặt lịch demo. Bạn có thể để lại số điện thoại không?',
        'hỗ trợ': 'Tôi sẵn sàng hỗ trợ! Bạn đang gặp vấn đề gì với hệ thống?',
        'liên hệ': 'Hotline: 1900-xxxx (24/7) hoặc email: support@asa.vn. Bạn muốn tôi kết nối trực tiếp không?'
      }
      
      let botResponse = 'Cảm ơn bạn đã liên hệ! Tôi đã ghi nhận yêu cầu. Một chuyên viên sẽ liên hệ sớm nhất.'
      
      const lowerInput = inputMessage.toLowerCase()
      for (const [key, response] of Object.entries(responses)) {
        if (lowerInput.includes(key)) {
          botResponse = response
          break
        }
      }
      
      const newBotMessage = {
        type: 'bot',
        message: botResponse,
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      }
      
      setIsTyping(false)
      setChatMessages(prev => [...prev, newBotMessage])
    }, 1500)
  }

  const handleQuickReply = (reply) => {
    // Auto-send the quick reply immediately
    const newMessage = {
      type: 'user',
      message: reply,
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }
    
    setChatMessages(prev => [...prev, newMessage])
    setIsTyping(true)
    
    // Simulate AI response with better context awareness
    setTimeout(() => {
      const responses = {
        'Giá cả': 'Gói cơ bản: 150,000đ/tháng, Gói chuyên nghiệp: 300,000đ/tháng. Bạn muốn tôi giải thích chi tiết hơn không?',
        'Demo sản phẩm': 'Tuyệt vời! Tôi sẽ kết nối bạn với team để đặt lịch demo. Bạn có thể để lại số điện thoại không?',
        'Hỗ trợ kỹ thuật': 'Tôi sẵn sàng hỗ trợ! Bạn đang gặp vấn đề gì với hệ thống?',
        'Liên hệ': 'Hotline: 1900-xxxx (24/7) hoặc email: support@asa.vn. Bạn muốn tôi kết nối trực tiếp không?'
      }
      
      const botResponse = {
        type: 'bot',
        message: responses[reply] || 'Cảm ơn bạn đã liên hệ! Tôi đã ghi nhận yêu cầu. Một chuyên viên sẽ liên hệ sớm nhất.',
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      }
      
      setIsTyping(false)
      setChatMessages(prev => [...prev, botResponse])
    }, 1500)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
        >
          <div className="relative">
            <span className="text-xl sm:text-2xl">🤖</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </button>
        
        {/* Tooltip with animation - hidden on mobile */}
        <div className="absolute bottom-20 right-0 bg-primary/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform translate-y-2 group-hover:translate-y-0 hidden sm:block">
          <div className="relative">
            🤖 Hỗ trợ AI 24/7
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/95"></div>
          </div>
        </div>
        
        {/* Floating notification badge */}
        <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
          1
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-4 sm:bottom-6 sm:right-6 sm:inset-auto z-50 sm:w-96 sm:max-w-[calc(100vw-3rem)]">
      <div className="h-full sm:h-auto sm:max-h-[80vh] shadow-2xl rounded-xl overflow-hidden border-2 border-primary/20 bg-background flex flex-col">
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-3 sm:p-4 relative flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                <span className="text-lg sm:text-xl">🤖</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-white text-base sm:text-lg font-semibold">ASA AI Assistant</h3>
                <p className="text-white/80 text-xs sm:text-sm">Trực tuyến</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-full p-1 flex-shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="bg-background/95 backdrop-blur-sm flex-1 flex flex-col min-h-0">
          {/* Chat Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0"
            style={{ scrollBehavior: 'smooth' }}
          >
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`max-w-[85%] sm:max-w-xs px-3 sm:px-4 py-2 rounded-2xl break-words ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-md' 
                    : 'bg-muted text-foreground border border-border'
                }`}>
                  <p className="text-xs sm:text-sm leading-relaxed">{msg.message}</p>
                  <p className={`text-xs mt-1 ${
                    msg.type === 'user' ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-muted text-foreground max-w-[85%] sm:max-w-xs px-3 sm:px-4 py-3 rounded-2xl border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
                    <span className="text-xs sm:text-sm text-muted-foreground">ASA AI đang trả lời</span>
                    <div className="flex space-x-1 justify-center sm:justify-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick Replies */}
          <div className="px-3 sm:px-4 py-2 border-t bg-muted/30 flex-shrink-0">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-2 sm:px-3 py-1.5 sm:py-1 text-xs sm:text-sm bg-background text-muted-foreground rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-primary/90 hover:text-white transition-all duration-300 border border-border hover:border-primary shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={isTyping}
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="p-3 sm:p-4 border-t flex-shrink-0 bg-background">
            <div className="flex space-x-2 items-end">
              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setInputMessage(e.target.value)
                    }
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  placeholder="Nhập câu hỏi của bạn..."
                  className="w-full px-3 py-2.5 sm:py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-background resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isTyping}
                />
              </div>
              <Button 
                onClick={handleSendMessage}
                size="sm"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary px-3 py-2.5 sm:py-2 shadow-md min-h-[40px] sm:min-h-[36px] flex-shrink-0 disabled:opacity-50"
                disabled={isTyping || !inputMessage.trim()}
              >
                {isTyping ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </Button>
            </div>
            
            {/* Character count for long messages */}
            {inputMessage.length > 100 && (
              <div className="text-xs text-muted-foreground mt-1.5 text-right">
                {inputMessage.length}/500
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatingChatbot
