import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'ASA - AI Store Assistant | Phần mềm quản lý bán hàng hiện đại tích hợp AI',
  description = 'ASA - Phần mềm quản lý bán hàng hiện đại tích hợp AI. Hệ sinh thái hoàn chỉnh cho mọi nhu cầu quản lý bán hàng: từ Web, Desktop đến Mobile App. Tinh giản quá trình, vươn mình tiến xa.',
  keywords = 'ASA, AI Store Assistant, phần mềm quản lý bán hàng, quản lý cửa hàng, bán hàng online, POS system, inventory management, AI assistant, ứng dụng quản lý, quản lý kinh doanh',
  image = '/logoASA.png',
  url = '',
  type = 'website',
  structuredData = null
}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://asa.systems'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ASA - AI Store Assistant" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="ASA - AI Store Assistant" />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Vietnamese" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO

