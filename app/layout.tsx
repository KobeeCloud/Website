import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

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
    "DevOps Gdańsk",
    "DevOps Sopot",
    "DevOps Luzino",
    "DevOps B2B Polska",
    "DevOps Engineer Gdynia",
    "DevOps freelancer Polska",
    "DevOps kontrakt B2B",
    "DevOps zdalnie Polska",
    "Infrastructure as Code",
    "IaC Polska",
    "automatyzacja infrastruktury",
    "automatyzacja deploymentów",
    "Terraform Gdynia",
    "Terraform Polska",
    "Ansible automatyzacja",
    "Kubernetes Gdynia",
    "Kubernetes Trójmiasto",
    "Kubernetes wdrożenie",
    "Docker kontenery",
    "CI/CD pipeline",
    "CI/CD automatyzacja",
    "Jenkins Gdynia",
    "GitHub Actions",
    "GitLab CI/CD",
    "Azure DevOps Polska",
    "Azure Gdynia",
    "Azure Cloud Polska",
    "AWS Polska",
    "AWS wdrożenie",
    "GCP Polska",
    "Google Cloud Polska",
    "GitOps ArgoCD",
    "GitOps Flux",
    "Prometheus monitoring",
    "Grafana dashboards",
    "monitoring aplikacji",
    "strony internetowe małe firmy",
    "strony WWW Gdynia",
    "tworzenie stron internetowych",
    "maintenance stron WWW",
    "wdrożenia aplikacji",
    "hosting stron Gdynia",
    "Next.js Polska",
    "React developer Gdynia",
    "programista Gdynia",
    "IT freelancer Trójmiasto",
    "konsultant DevOps",
    "wsparcie infrastruktury",
    "migracja do chmury",
    "cloud migration Polska",
    "Kubernetes cluster setup",
    "CI/CD wdrożenie",
    "automatyzacja procesów IT"
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
    description: "DevOps Engineer z Gdyni/Rumi. Automatyzacja infrastruktury (Terraform, Kubernetes, Docker), CI/CD (Jenkins, GitHub Actions), monitoring (Prometheus, Grafana), strony WWW dla małych firm. Kontrakt B2B, projekty, maintenance.",
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
                "addressLocality": "Luzino",
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
        <CookieConsent />
      </body>
    </html>
  );
}
