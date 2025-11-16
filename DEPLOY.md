# KobeCloud Website - Deployment Guide

## Quick Deploy to Vercel (FREE)

### Step 1: Commit & Push

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy on Vercel

**Option A: Dashboard (Easiest)**

1. Go to https://vercel.com
2. Click "Sign Up" (login with GitHub)
3. Click "Add New..." → "Project"
4. Select repository: `ConceptSamchodyZUSA/Website`
5. **IMPORTANT**: Set Root Directory to `kobecloud-website`
6. Click "Deploy"
7. Done! 🎉

**Option B: CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd /home/jakubpospieszny/Documents/github/KobeCloud/kobecloud-website
vercel

# Deploy to production
vercel --prod
```

### Step 3: Custom Domain (Optional)

1. Vercel Dashboard → Project Settings → Domains
2. Add `kobecloud.pl`
3. Configure DNS:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`

## Costs

- **Vercel Hobby**: FREE ✅
  - 100 GB bandwidth/month
  - Unlimited deployments
  - Automatic HTTPS
  - Global CDN
  - CI/CD with GitHub

- **Domain**: ~50-80 PLN/year

## Auto-Deployment

After setup:
- Push to `main` = auto deploy to production
- Pull requests = preview deployments
- Rollback in 1 click
