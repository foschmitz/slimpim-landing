# Landing Page Production Deployment Checklist

Use this checklist to ensure all steps are completed before going live.

## Pre-Deployment Checklist

### 1. Vercel Account Setup

- [ ] Create Vercel account at https://vercel.com
- [ ] Create new project for landing page
- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] Login to Vercel: `vercel login`
- [ ] Note Vercel Token (Account Settings > Tokens)
- [ ] Note Vercel Organization ID (Settings > General)
- [ ] Note Vercel Project ID (Project Settings > General)

### 2. GitHub Secrets Configuration

- [ ] Add `VERCEL_TOKEN` to GitHub Secrets
- [ ] Add `VERCEL_ORG_ID` to GitHub Secrets
- [ ] Add `VERCEL_PROJECT_ID` to GitHub Secrets
- [ ] Add `VITE_API_URL` to GitHub Secrets
- [ ] Add `VITE_GA_MEASUREMENT_ID` to GitHub Secrets (optional)
- [ ] Add `VITE_SENTRY_DSN` to GitHub Secrets (optional)

### 3. Google Analytics 4 Setup

- [ ] Create GA4 Property at https://analytics.google.com
- [ ] Note GA4 Measurement ID (G-XXXXXXXXXX)
- [ ] Add Measurement ID to GitHub Secrets
- [ ] Configure data streams (Web)
- [ ] Set up conversion goals
- [ ] Configure event tracking

### 4. Sentry Setup

- [ ] Create Sentry account at https://sentry.io
- [ ] Create new React project
- [ ] Note Sentry DSN
- [ ] Add DSN to GitHub Secrets
- [ ] Configure alert rules
- [ ] Test error tracking

### 5. Domain Configuration

- [ ] Purchase domain (slimpim.ai / ordersatz.de)
- [ ] Access domain registrar DNS settings
- [ ] Note nameserver information
- [ ] Prepare for DNS configuration (do this after Vercel deployment)

### 6. Local Build Test

- [ ] Run `cd landing-page && npm install`
- [ ] Run `npm run lint` (should pass)
- [ ] Run `npm run build` (should succeed)
- [ ] Check build size (<500KB initial bundle)
- [ ] Run `npm run preview` and test locally
- [ ] Verify all pages load
- [ ] Test all forms
- [ ] Test language switching
- [ ] Test on mobile viewport

## Deployment Checklist

### 7. Initial Deployment

- [ ] Push code to main branch
- [ ] Monitor GitHub Actions workflow
- [ ] Verify workflow completes successfully
- [ ] Note Vercel deployment URL

### 8. Vercel Configuration

- [ ] Go to Vercel project settings
- [ ] Add environment variables:
  - [ ] `VITE_API_URL`
  - [ ] `VITE_GA_MEASUREMENT_ID`
  - [ ] `VITE_SENTRY_DSN`
- [ ] Verify build command: `npm run build`
- [ ] Verify output directory: `dist`
- [ ] Verify Node.js version: 20

### 9. Domain Setup in Vercel

- [ ] Go to Project Settings > Domains
- [ ] Add custom domain
- [ ] Copy DNS configuration instructions
- [ ] Configure DNS records in domain registrar:
  - [ ] Add A record or CNAME to Vercel
  - [ ] Wait for DNS propagation (24-48 hours)
- [ ] Verify SSL certificate is provisioned
- [ ] Configure www redirect (optional)
- [ ] Test HTTPS redirect

### 10. DNS Verification

- [ ] Run `dig slimpim.ai` to check DNS
- [ ] Run `nslookup slimpim.ai`
- [ ] Verify A/CNAME records point to Vercel
- [ ] Wait for full DNS propagation
- [ ] Test domain accessibility

## Post-Deployment Checklist

### 11. Functional Testing

- [ ] Visit production URL
- [ ] Test all pages load correctly:
  - [ ] Homepage (/)
  - [ ] German version (/de)
  - [ ] English version (/en)
  - [ ] Impressum
  - [ ] Datenschutz
  - [ ] About Us
  - [ ] Contact
  - [ ] AGB
  - [ ] AVV
  - [ ] Cookie Policy
- [ ] Test all links (no 404s)
- [ ] Test all forms:
  - [ ] Newsletter subscription
  - [ ] Notify Me modal
  - [ ] Contact form
- [ ] Test language switching (DE ⇄ EN)
- [ ] Test cookie consent banner
- [ ] Test cookie settings modal

### 12. Cross-Browser Testing

- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)
- [ ] Safari (iOS)
- [ ] Chrome (Android)

### 13. Mobile Testing

- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad)
- [ ] Test responsive design at various breakpoints

### 14. Performance Testing

- [ ] Run Lighthouse audit
- [ ] Verify Performance score ≥90
- [ ] Verify Accessibility score ≥90
- [ ] Verify Best Practices score ≥90
- [ ] Verify SEO score ≥90
- [ ] Check Core Web Vitals:
  - [ ] LCP (Largest Contentful Paint) <2.5s
  - [ ] FID (First Input Delay) <100ms
  - [ ] CLS (Cumulative Layout Shift) <0.1

### 15. SEO Verification

- [ ] Verify robots.txt is accessible
- [ ] Verify sitemap.xml is accessible
- [ ] Check meta tags on all pages (View Page Source)
- [ ] Verify Open Graph tags
- [ ] Verify Twitter Card tags
- [ ] Verify canonical URLs
- [ ] Verify hreflang tags (language alternates)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools (optional)

### 16. Analytics Verification

- [ ] Open GA4 Real-Time view
- [ ] Visit site and verify session appears
- [ ] Check page view tracking
- [ ] Test event tracking:
  - [ ] Newsletter subscription event
  - [ ] Notify Me modal event
  - [ ] CTA button clicks
  - [ ] Language switch event
- [ ] Verify cookie consent integration
- [ ] Test tracking opt-out

### 17. Error Tracking Verification

- [ ] Open Sentry dashboard
- [ ] Trigger a test error (temporarily)
- [ ] Verify error appears in Sentry
- [ ] Check source maps are uploaded
- [ ] Verify stack trace is readable
- [ ] Configure alert rules
- [ ] Test alert notifications

### 18. Security Headers Verification

- [ ] Open browser DevTools > Network tab
- [ ] Check response headers:
  - [ ] X-Content-Type-Options: nosniff
  - [ ] X-Frame-Options: DENY
  - [ ] X-XSS-Protection: 1; mode=block
  - [ ] Referrer-Policy: strict-origin-when-cross-origin
  - [ ] Strict-Transport-Security (HSTS)
  - [ ] Permissions-Policy
- [ ] Run security headers check at https://securityheaders.com

### 19. Google Search Console Setup

- [ ] Add property at https://search.google.com/search-console
- [ ] Verify domain ownership
- [ ] Submit sitemap
- [ ] Request indexing for main pages
- [ ] Set up email alerts
- [ ] Monitor coverage report

### 20. Monitoring Setup

- [ ] Set up uptime monitoring (UptimeRobot / Pingdom)
- [ ] Configure status page (optional)
- [ ] Set up email alerts for downtime
- [ ] Set up Slack/Discord notifications (optional)

## Week 1 Post-Launch Checklist

### Daily Tasks

- [ ] Check Sentry for errors
- [ ] Review GA4 traffic
- [ ] Verify uptime (should be 100%)
- [ ] Test critical forms
- [ ] Monitor Core Web Vitals

### Week 1 Tasks

- [ ] Day 1: Verify all systems operational
- [ ] Day 2: Review analytics data
- [ ] Day 3: Check for any reported issues
- [ ] Day 4: Monitor error rates in Sentry
- [ ] Day 5: Review performance metrics
- [ ] Day 6: Check SEO indexing progress
- [ ] Day 7: Complete week 1 review

## Ongoing Maintenance Checklist

### Weekly

- [ ] Review Google Analytics metrics
- [ ] Check Sentry error logs
- [ ] Monitor Core Web Vitals
- [ ] Review uptime reports

### Monthly

- [ ] Run full Lighthouse audit
- [ ] Review and update sitemap (if needed)
- [ ] Check for dependency updates
- [ ] Security audit (`npm audit`)
- [ ] Review SEO performance
- [ ] Update content (if needed)

### Quarterly

- [ ] Review and optimize images
- [ ] Performance optimization review
- [ ] SEO strategy review
- [ ] User feedback review
- [ ] Update legal pages (if needed)

## Rollback Plan

If critical issues are discovered:

### Immediate Actions

- [ ] Identify the issue
- [ ] Document the problem
- [ ] Decide on rollback vs. hotfix

### Rollback Steps

- [ ] Go to Vercel Dashboard > Deployments
- [ ] Find last stable deployment
- [ ] Click "Promote to Production"
- [ ] Verify rollback successful
- [ ] Notify stakeholders

### Post-Rollback

- [ ] Investigate root cause
- [ ] Create fix in separate branch
- [ ] Test fix thoroughly
- [ ] Deploy fix with monitoring

---

## Completion Sign-Off

- [ ] All pre-deployment tasks completed
- [ ] All deployment tasks completed
- [ ] All post-deployment tests passed
- [ ] Week 1 monitoring completed
- [ ] Documentation updated
- [ ] Stakeholders notified

**Deployment Date**: ******\_\_\_******

**Deployed By**: ******\_\_\_******

**Sign-Off**: ******\_\_\_******

---

**Last Updated**: 2025-11-25
