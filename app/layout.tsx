// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = 'https://onshim-therapy.netlify.app';

export const viewport: Viewport = {
  themeColor: '#070709',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '온쉼테라피 | 수도권 프리미엄 출장 웰니스 테라피',
    template: '%s | 온쉼테라피',
  },
  description:
    '도심 속 편안한 휴식을 선사하는 온쉼테라피입니다. 서울, 경기, 인천 전 지역 프리미엄 홈케어 출장 마사지 및 맞춤형 웰니스 테라피 서비스를 제공합니다.',
  keywords: [
    '온쉼테라피',
    '출장마사지',
    '출장웰니스',
    '스웨디시테라피',
    '아로마마사지',
    '홈케어마사지',
    '수도권출장마사지',
  ],
  authors: [{ name: '온쉼테라피', url: SITE_URL }],
  creator: '온쉼테라피',
  publisher: '온쉼테라피',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: '온쉼테라피',
    title: '온쉼테라피 | 수도권 프리미엄 출장 웰니스 테라피',
    description:
      '도심 속 편안한 휴식을 선사하는 온쉼테라피입니다. 전문 테라피스트의 프라이빗한 1:1 맞춤형 홈케어 서비스를 만나보세요.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '온쉼테라피 - 프리미엄 출장 웰니스 마사지',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    other: {
      'naver-site-verification': '88faad0958579b65c5703320ee4590ccb4dafa39',
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD 구조화 데이터 (검색엔진 표준 스키마)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: '온쉼테라피',
      description: '수도권 전 지역 출장 웰니스 마사지 및 프리미엄 테라피 안내 플랫폼',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'ko-KR',
    },
    {
      '@type': ['HealthAndBeautyBusiness', 'Organization'],
      '@id': `${SITE_URL}/#organization`,
      name: '온쉼테라피',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.png`,
        width: '512',
        height: '512',
      },
      image: `${SITE_URL}/banner.jpg`,
      description: '수도권 전역 1:1 맞춤 출장 스웨디시, 아로마, 웰니스 힐링 케어 안내',
      telephone: '0507-1280-3344',
      priceRange: '60,000원~180,000원',
      currenciesAccepted: 'KRW',
      paymentAccepted: 'Cash, Credit Card',
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: '서울특별시',
        },
        {
          '@type': 'AdministrativeArea',
          name: '경기도',
        },
        {
          '@type': 'AdministrativeArea',
          name: '인천광역시',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: '서울특별시',
        addressRegion: '수도권',
        addressCountry: 'KR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '0507-1280-3344',
        contactType: 'customer service',
        areaServed: 'KR',
        availableLanguage: ['Korean'],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-[#070709] text-gray-100 antialiased" suppressHydrationWarning>
        {/* JSON-LD 삽입 (필요시 컴포넌트 내에서 Script 태그로 렌더링하여 사용) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}