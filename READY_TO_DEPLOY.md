# ✅ GOTOWE - Deploy na Vercel

## Kod jest na GitHubie!
Repozytorium: `KobeeCloud/Website`
Branch: `main`

## Teraz wdróż na Vercel:

### Opcja 1: Dashboard (POLECAM)

1. Wejdź na **https://vercel.com**
2. Kliknij **"Sign Up"** lub zaloguj się przez GitHub
3. Kliknij **"Add New..." → "Project"**
4. Znajdź i wybierz: **KobeeCloud/Website**
5. Vercel automatycznie wykryje Next.js ✅
6. Kliknij **"Deploy"** (wszystkie ustawienia są OK)
7. Poczekaj ~2 minuty
8. GOTOWE! 🎉

### Opcja 2: CLI

```bash
npm i -g vercel
cd ~/Documents/github/KobeCloud/Website
vercel --prod
```

## Po deployment:

Dostaniesz URL: `https://website-xxx.vercel.app`

## Własna domena (opcjonalnie):

1. W Vercel → Settings → Domains
2. Dodaj `kobecloud.pl`
3. Skonfiguruj DNS:
   - A: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`

## Koszty:

**Vercel Hobby Plan: DARMOWY** 🆓
- 100 GB bandwidth/miesiąc
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- Auto-deployment (każdy push = deploy)

**Tylko domena**: ~60 PLN/rok

---

**Build test:** ✅ PASSED
**Git push:** ✅ SUCCESS
**Ready:** ✅ YES
