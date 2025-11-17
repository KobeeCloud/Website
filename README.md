# https://kobecloud.pl
# Oficjalna strona KobeCloud - DevOps Engineer B2B

## 🚀 O projekcie
Portfolio i strona firmowa oferująca usługi DevOps, automatyzacji infrastruktury i tworzenia stron WWW dla małych firm w Trójmieście i zdalnie.

## 📦 Stack technologiczny
- **Framework**: Next.js 16.0.3 (App Router, Turbopack, React Compiler)
- **Język**: TypeScript
- **Styling**: Tailwind CSS 4
- **Ikony**: Lucide React, React Icons
- **Legal**: react-cookie-consent (RODO)
- **Deployment**: Vercel

## 🛠️ Uruchomienie lokalnie

```bash
# Instalacja zależności
npm install

# Uruchomienie dev servera
npm run dev

# Build produkcyjny
npm run build

# Start produkcyjny
npm start
```

Strona będzie dostępna pod `http://localhost:3000`

## 📁 Struktura projektu

```
/app
  /api/contact      - Endpoint formularza kontaktowego
  /api/health       - Health check endpoint
  /privacy          - Polityka prywatności (RODO)
  layout.tsx        - Layout z metadatami SEO
  page.tsx          - Strona główna
  sitemap.ts        - Dynamiczny sitemap
/components
  /sections         - Sekcje strony (Hero, About, Contact, FAQ)
  CookieConsent.tsx - Banner zgody na cookies
  Footer.tsx        - Stopka z danymi firmy
  Header.tsx        - Nawigacja
/public
  robots.txt        - Konfiguracja robotów wyszukiwarek
  schema.json       - Structured data (Schema.org)
  manifest.json     - PWA manifest
```

## 🔒 Bezpieczeństwo
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ HTTPS enforced
- ✅ Walidacja formularzy
- ✅ 0 vulnerabilities npm
- ✅ RODO compliance

## 🌐 SEO
- ✅ 57 keywords (lokalne + techniczne)
- ✅ Schema.org structured data
- ✅ OpenGraph + Twitter Cards
- ✅ Sitemap XML
- ✅ robots.txt
- ✅ PWA manifest

## 📄 Zgodność prawna
- ✅ Polityka prywatności
- ✅ Cookie consent (RODO)
- ✅ Klauzule informacyjne
- ✅ Dane firmowe (NIP, REGON)

## 📮 Kontakt
**KobeCloud - Jakub Pospieszny**
- Email: kuba.pospieszny@gmail.com
- Tel: +48 795 493 833
- NIP: 5882530612
- REGON: 541797979
- Adres: Mickiewicza 19, 84-242 Luzino

## 📝 Licencja
Wszystkie prawa zastrzeżone © 2025 KobeCloud
