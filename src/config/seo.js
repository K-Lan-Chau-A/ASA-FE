// SEO Configuration for all pages

// Base URL - change to your production domain
const baseUrl = 'https://asa.systems'

export const seoConfig = {
  home: {
    title: 'ASA - AI Store Assistant | Phần mềm quản lý bán hàng hiện đại tích hợp AI',
    description: 'ASA - Phần mềm quản lý bán hàng hiện đại tích hợp AI. Hệ sinh thái hoàn chỉnh cho mọi nhu cầu quản lý bán hàng: từ Web, Desktop đến Mobile App. Chúng tôi là một đội ngũ kinh nghiệm trẻ, đầy nhiệt huyết, mang hoài bão cống hiến sự hoạt động kinh doanh nhỏ lẻ cho các chủ kinh doanh.',
    keywords: 'ASA, AI Store Assistant, phần mềm quản lý bán hàng, quản lý cửa hàng, bán hàng online, POS system, inventory management, AI assistant, ứng dụng quản lý, quản lý kinh doanh, quản lý kho hàng, bán hàng thông minh',
    url: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ASA - AI Store Assistant',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android, iOS',
      url: 'https://asa.systems',
      description: 'Phần mềm quản lý bán hàng hiện đại tích hợp AI. Hệ sinh thái hoàn chỉnh cho mọi nhu cầu quản lý bán hàng: từ Web, Desktop đến Mobile App.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'VND'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1000'
      },
      publisher: {
        '@type': 'Organization',
        name: 'ASA - AI Store Assistant',
        url: 'https://asa.systems'
      }
    }
  },
  products: {
    title: 'Sản phẩm ASA | Hệ sinh thái quản lý bán hàng Web, Desktop, Mobile App',
    description: 'Hệ sinh thái hoàn chỉnh cho mọi nhu cầu quản lý bán hàng: từ Web, Desktop đến Mobile App. Tải xuống ứng dụng Android ngay để trải nghiệm phần mềm quản lý bán hàng hiện đại với AI.',
    keywords: 'sản phẩm ASA, ứng dụng quản lý bán hàng, mobile app, web app, desktop app, download app, tải app Android, quản lý bán hàng mobile',
    url: '/products',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'ASA - Hệ sinh thái quản lý bán hàng',
      description: 'Hệ sinh thái hoàn chỉnh cho mọi nhu cầu quản lý bán hàng: từ Web, Desktop đến Mobile App',
      image: 'https://asa.systems/logoASA.png',
      category: 'Business Software',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        price: '0',
        priceCurrency: 'VND',
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'VN',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 30,
          returnMethod: 'https://schema.org/ReturnByMail',
          returnFees: 'https://schema.org/FreeReturn'
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '0',
            currency: 'VND'
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            businessDays: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            cutoffTime: '23:59',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 0,
              unitCode: 'DAY'
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 0,
              unitCode: 'DAY'
            }
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'VN'
          }
        }
      }
    }
  },
  pricing: {
    title: 'Bảng giá dịch vụ ASA | Phí dịch vụ quản lý bán hàng',
    description: 'Tùy chọn phù hợp với mọi mô hình quản lý kinh doanh, từ cửa hàng nhỏ đến các chuỗi lớn. Xem bảng giá chi tiết và chọn gói dịch vụ phù hợp nhất với doanh nghiệp của bạn.',
    keywords: 'bảng giá ASA, phí dịch vụ, giá phần mềm quản lý bán hàng, pricing, giá dịch vụ, gói dịch vụ, đăng ký dịch vụ',
    url: '/pricing',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'ASA - Dịch vụ quản lý bán hàng',
      description: 'Tùy chọn phù hợp với mọi mô hình quản lý kinh doanh',
      provider: {
        '@type': 'Organization',
        name: 'ASA - AI Store Assistant'
      }
    }
  },
  contact: {
    title: 'Liên hệ ASA | Hỗ trợ khách hàng 24/7',
    description: 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí! Liên hệ qua Facebook, Instagram, TikTok hoặc email.',
    keywords: 'liên hệ ASA, hỗ trợ khách hàng, tư vấn, liên hệ, contact, customer support, hotline',
    url: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Liên hệ ASA',
      description: 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn'
    }
  },
  support: {
    title: 'Trung tâm hỗ trợ ASA | Hỗ trợ khách hàng 24/7',
    description: 'Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 với đội ngũ chuyên viên tận tình và AI Assistant thông minh. Gửi ticket hỗ trợ, liên hệ qua email hoặc hotline.',
    keywords: 'hỗ trợ ASA, support, trung tâm hỗ trợ, ticket hỗ trợ, customer support, technical support, help desk',
    url: '/support',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'ASA - Trung tâm hỗ trợ',
      description: 'Hỗ trợ khách hàng 24/7 với đội ngũ chuyên viên và AI Assistant',
      areaServed: 'VN'
    }
  },
  trial: {
    title: 'Dùng thử miễn phí ASA | Đăng ký ngay',
    description: 'Đăng ký dùng thử miễn phí ASA - Phần mềm quản lý bán hàng hiện đại tích hợp AI. Trải nghiệm đầy đủ tính năng trong thời gian dùng thử.',
    keywords: 'dùng thử miễn phí, đăng ký, free trial, trial, demo, trải nghiệm',
    url: '/trial',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Dùng thử miễn phí ASA',
      description: 'Đăng ký dùng thử miễn phí',
      price: '0',
      priceCurrency: 'VND'
    }
  },
  buy: {
    title: 'Mua ASA | Đăng ký dịch vụ quản lý bán hàng',
    description: 'Đăng ký dịch vụ ASA ngay hôm nay để tối ưu hóa hoạt động kinh doanh của bạn. Chọn gói dịch vụ phù hợp và bắt đầu quản lý bán hàng hiệu quả.',
    keywords: 'mua ASA, đăng ký dịch vụ, mua phần mềm, subscribe, purchase',
    url: '/buy',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Đăng ký dịch vụ ASA',
      description: 'Đăng ký dịch vụ quản lý bán hàng',
      price: '300000',
      priceCurrency: 'VND'
    }
  }
}

export default seoConfig

