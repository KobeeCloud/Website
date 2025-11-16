import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "KobeCloud - DevOps, Infrastructure & Automation | Jakub Pospieszny",
  description: "Profesjonalne usługi DevOps, Infrastructure as Code, Kubernetes, CI/CD, monitoring i automatyzacja. Szybkie wdrożenia, transparentny monitoring, operational excellence.",
  keywords: ["DevOps", "Infrastructure as Code", "Kubernetes", "CI/CD", "Terraform", "Ansible", "AWS", "Azure", "GCP", "GitOps", "Monitoring", "Prometheus", "Grafana"],
  authors: [{ name: "Jakub Pospieszny", url: "https://github.com/Kobeep" }],
  openGraph: {
    title: "KobeCloud - DevOps, Infrastructure & Automation",
    description: "Twój partner w nowoczesnej infrastrukturze i automatyzacji - Jakub Pospieszny",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
