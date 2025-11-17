import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL('https://kobecloud.pl'),
  title: {
    default: "KobeCloud - DevOps Engineer B2B | Trójmiasto | Jakub Pospieszny",
    template: "%s | KobeCloud - DevOps & Infrastructure"
  },
  description: "DevOps Engineer B2B - Trójmiasto i zdalnie. Automatyzacja infrastruktury (Azure, AWS, Terraform, Kubernetes), CI/CD, strony WWW dla małych firm. Wdrożenia i maintenance. ~2 lata komercyjnego doświadczenia.",
  keywords: [
    // Lokalizacja główna
    "DevOps Trójmiasto",
    "DevOps Gdańsk",
    "DevOps Sopot",
    "DevOps Gdynia",
    "DevOps Rumia",
    "DevOps Wejherowo",
    "DevOps Luzino",
    "DevOps Reda",
    "DevOps Puck",
    "DevOps Pomorskie",

    // Rodzaj współpracy
    "DevOps B2B Polska",
    "DevOps Engineer Trójmiasto",
    "DevOps freelancer Polska",
    "DevOps kontrakt B2B",
    "DevOps zdalnie Polska",
    "DevOps konsultant Trójmiasto",
    "inżynier DevOps na zlecenie",
    "wsparcie DevOps B2B",

    // Infrastructure as Code
    "Infrastructure as Code Trójmiasto",
    "IaC Polska",
    "automatyzacja infrastruktury",
    "automatyzacja deploymentów",
    "infrastruktura jako kod",

    // Terraform
    "Terraform Trójmiasto",
    "Terraform Polska",
    "Terraform wdrożenie",
    "Terraform konsultant",
    "Terraform automatyzacja",

    // Ansible
    "Ansible automatyzacja",
    "Ansible Trójmiasto",
    "Ansible konfiguracja serwerów",

    // Kubernetes
    "Kubernetes Trójmiasto",
    "Kubernetes Gdańsk",
    "Kubernetes wdrożenie",
    "Kubernetes setup Polska",
    "K8s Trójmiasto",
    "konteneryzacja aplikacji",

    // Docker
    "Docker kontenery",
    "Docker Trójmiasto",
    "konteneryzacja Polska",

    // CI/CD
    "CI/CD pipeline",
    "CI/CD automatyzacja",
    "CI/CD wdrożenie Polska",
    "Jenkins Trójmiasto",
    "GitHub Actions Polska",
    "GitLab CI/CD",
    "pipeline automatyzacja",

    // Cloud - Azure
    "Azure DevOps Polska",
    "Azure Trójmiasto",
    "Azure Cloud Polska",
    "Azure infrastruktura",
    "Azure automatyzacja",
    "Microsoft Azure Trójmiasto",

    // Cloud - AWS
    "AWS Polska",
    "AWS wdrożenie",
    "AWS Trójmiasto",
    "Amazon Web Services Polska",

    // Cloud - GCP
    "GCP Polska",
    "Google Cloud Polska",
    "Google Cloud Platform Trójmiasto",

    // GitOps
    "GitOps ArgoCD",
    "GitOps Flux",
    "ArgoCD Trójmiasto",
    "GitOps Polska",

    // Monitoring
    "Prometheus monitoring",
    "Grafana dashboards",
    "monitoring aplikacji",
    "Prometheus Grafana Trójmiasto",
    "monitoring infrastruktury",

    // Strony WWW - główny focus
    "strony internetowe dla małych firm",
    "strony internetowe małe firmy Trójmiasto",
    "strony WWW dla firm Trójmiasto",
    "strony WWW małe firmy",
    "tanie strony internetowe dla firm",
    "strony internetowe dla małych firm Gdańsk",
    "strony internetowe dla firm Sopot",
    "strony internetowe dla firm Gdynia",
    "tworzenie stron internetowych dla firm",
    "tworzenie stron WWW małe firmy",
    "strona internetowa dla małej firmy",
    "strona firmowa Trójmiasto",
    "strona wizytówka dla firmy",
    "landing page dla firmy",
    "landing page małe firmy",
    "strony one-page dla firm",
    "responsywne strony dla firm",
    "nowoczesne strony internetowe dla firm",
    "szybkie strony WWW dla firm",
    "strony internetowe z hostingiem",
    "strony internetowe z maintenance",
    "utrzymanie stron internetowych",
    "aktualizacja strony firmowej",
    "modernizacja strony firmowej",
    "redesign strony firmowej",
    "strony Next.js dla firm",
    "strony React dla firm",
    "profesjonalne strony dla firm",
    "strony WWW na zlecenie",
    "tworzenie stron B2B",
    "strony dla startupów",
    "strony dla lokalnych firm",
    "strony dla usługodawców",
    "strony dla restauracji Trójmiasto",
    "strony dla sklepów lokalnych",
    "portfolio firmowe online",
    "website dla małej firmy",
    "jak zrobić stronę dla firmy Trójmiasto",
    "ile kosztuje strona dla małej firmy",
    "tania strona firmowa Trójmiasto",

    // Frontend/Backend
    "Next.js Polska",
    "React developer Trójmiasto",
    "Next.js Trójmiasto",
    "TypeScript developer",

    // Ogólne IT
    "programista Trójmiasto",
    "IT freelancer Trójmiasto",
    "konsultant DevOps",
    "wsparcie infrastruktury",
    "IT konsultant B2B",

    // Migracje i wdrożenia
    "migracja do chmury",
    "cloud migration Polska",
    "wdrożenia aplikacji",
    "modernizacja infrastruktury",
    "przeprowadzka do chmury Trójmiasto",

    // Long-tail keywords
    "jak wdrożyć Kubernetes Trójmiasto",
    "automatyzacja CI/CD dla firm",
    "DevOps dla startupów Polska",
    "outsourcing DevOps Trójmiasto",
    "infrastructure automation Polska",
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
    title: "KobeCloud - DevOps Engineer B2B | Trójmiasto",
    description: "DevOps Engineer - Trójmiasto i zdalnie. Automatyzacja infrastruktury (Terraform, Kubernetes, Docker), CI/CD (Jenkins, GitHub Actions), monitoring (Prometheus, Grafana), strony WWW dla małych firm. Kontrakt B2B, projekty, maintenance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KobeCloud - DevOps Engineer B2B | Trójmiasto",
    description: "DevOps Engineer - Trójmiasto i zdalnie. Automatyzacja infrastruktury, Kubernetes, CI/CD, strony WWW.",
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
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/logo.svg',
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
              "description": "DevOps Engineer B2B - Trójmiasto i zdalnie - automatyzacja infrastruktury, Kubernetes, CI/CD, strony WWW",
              "url": "https://kobecloud.pl",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Luzino",
                "addressRegion": "Pomorskie",
                "addressCountry": "PL"
              },
              "areaServed": ["Gdańsk", "Sopot", "Trójmiasto", "Pomorskie", "Polska"],
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
        <CookieConsent />
      </body>
    </html>
  );
}
