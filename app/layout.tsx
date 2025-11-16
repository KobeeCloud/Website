import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://kobecloud.pl'),
  title: {
    default: "KobeCloud - DevOps Engineer B2B | Gdynia, Trójmiasto | Jakub Pospieszny",
    template: "%s | KobeCloud - DevOps & Infrastructure"
  },
  description: "DevOps Engineer B2B z Gdyni/Rumi. Automatyzacja infrastruktury (Azure, AWS, Terraform, Kubernetes), CI/CD, strony WWW dla małych firm. Wdrożenia i maintenance. ~2 lata komercyjnego doświadczenia.",
  keywords: [
    "DevOps Gdynia",
    "DevOps Trójmiasto",
    "DevOps B2B Polska",
    "Infrastructure as Code",
    "Kubernetes Gdynia",
    "CI/CD",
    "Terraform",
    "Ansible",
    "Azure DevOps",
    "AWS",
    "GCP",
    "GitOps",
    "Monitoring Prometheus Grafana",
    "strony internetowe małe firmy",
    "maintenance stron WWW",
    "wdrożenia aplikacji",
    "automatyzacja infrastruktury",
    "DevOps freelancer Polska"
  ],
  authors: [{ name: "Jakub Pospieszny", url: "https://github.com/Kobeep" }],
  creator: "Jakub Pospieszny",
  publisher: "KobeCloud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://kobecloud.pl",
    siteName: "KobeCloud - DevOps & Infrastructure",
    title: "KobeCloud - DevOps Engineer B2B | Gdynia, Trójmiasto",
    description: "DevOps Engineer z Gdyni. Automatyzacja infrastruktury, Kubernetes, CI/CD, strony WWW dla małych firm. Kontrakt B2B, projekty, maintenance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KobeCloud - DevOps Engineer B2B Gdynia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KobeCloud - DevOps Engineer B2B | Gdynia",
    description: "DevOps Engineer z Gdyni. Automatyzacja infrastruktury, Kubernetes, CI/CD, strony WWW.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-verification-code',
  },
  alternates: {
    canonical: "https://kobecloud.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "KobeCloud",
              "description": "DevOps Engineer B2B z Gdyni - automatyzacja infrastruktury, Kubernetes, CI/CD, strony WWW",
              "url": "https://kobecloud.pl",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rumia",
                "addressRegion": "Pomorskie",
                "addressCountry": "PL"
              },
              "areaServed": ["Gdynia", "Gdańsk", "Sopot", "Trójmiasto", "Polska"],
              "founder": {
                "@type": "Person",
                "name": "Jakub Pospieszny",
                "jobTitle": "DevOps Engineer"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
