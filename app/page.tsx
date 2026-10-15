// app/page.tsx
import { Metadata } from "next";
import MainClientUI from "./MainClientUI";

const SITE_URL = "https://onshim-therapy.netlify.app";

export const metadata: Metadata = {
  title: "온쉼테라피 | 수도권 프리미엄 출장 웰니스 테라피",
  description:
    "도심 속 편안한 휴식을 선사하는 온쉼테라피입니다. 서울, 경기, 인천 전 지역 프리미엄 홈케어 출장 마사지 및 맞춤형 웰니스 테라피를 제공합니다.",
  keywords: [
    "온쉼테라피",
    "출장마사지",
    "출장웰니스",
    "스웨디시테라피",
    "아로마마사지",
    "홈케어마사지",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "온쉼테라피 | 수도권 프리미엄 출장 웰니스 테라피",
    description:
      "도심 속 편안한 휴식을 선사하는 온쉼테라피입니다. 전문 테라피스트의 프라이빗한 1:1 맞춤형 홈케어 서비스를 만나보세요.",
    url: SITE_URL,
    siteName: "온쉼테라피",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/banner.jpg`,
        width: 1200,
        height: 630,
        alt: "온쉼테라피 - 프리미엄 출장 웰니스 마사지",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "온쉼테라피",
        description: "수도권 전 지역 출장 웰니스 마사지 및 프리미엄 테라피 안내 플랫폼",
        inLanguage: "ko-KR",
      },
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: "온쉼테라피",
        url: SITE_URL,
        telephone: "0507-1280-3344",
        priceRange: "60,000원~180,000원",
        currenciesAccepted: "KRW",
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "서울특별시",
          },
          {
            "@type": "AdministrativeArea",
            name: "경기도",
          },
          {
            "@type": "AdministrativeArea",
            name: "인천광역시",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#070709]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainClientUI />
    </main>
  );
}