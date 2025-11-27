# Landing Page Deployment Guide

## Overview

This document outlines the deployment process for the SlimPIM landing page. The landing page is deployed separately from the main application using GitHub Actions and Firebase Hosting.

## Architecture

```
GitHub Repository
    │
    ├── Main App (GCP Cloud Run)
    │   ├── deploy-production.yml
    │   └── deploy-staging.yml
    │
    └── Landing Page (Firebase Hosting)
        └── deploy-landing-page.yml
```

## Prerequisites

### 1. Firebase Project

The landing page uses the same Firebase project as the main application:

- Project ID: `slimpim`
- Firebase Service Account credentials are already configured in GitHub Secrets

### 2. GitHub Secrets Configuration

The following secrets should already be configured:

```bash
# Firebase Configuration (existing)
FIREBASE_SERVICE_ACCOUNT=        # Firebase service account JSON

# Environment Variables (add these)
VITE_API_URL=                    # Production API URL (e.g., https://api.slimpim.ai)
VITE_GA_MEASUREMENT_ID=          # Google Analytics 4 Measurement ID (G-XXXXXXXXXX)
VITE_SENTRY_DSN=                 # Sentry DSN for error tracking (optional)
```

### 3. Firebase Hosting Configuration

Configuration files in `landing-page/`:

- `firebase.json` - Hosting configuration with security headers and caching
- `.firebaserc` - Project configuration (project ID: slimpim)

## Deployment Workflow

### Automatic Deployment

The landing page automatically deploys when:

- Changes are pushed to the `main` branch
- Changes are made to files in `landing-page/` directory
- Workflow file `.github/workflows/deploy-landing-page.yml` is modified

### Manual Deployment

To trigger a manual deployment:

```bash
# Via GitHub UI
Go to Actions > Deploy Landing Page > Run workflow

# Or push changes to main branch
git add .
git commit -m "feat(landing): update content"
git push origin main
```

### Deployment Process

1. **Lint and Test** (runs first):
   - ESLint code quality check
   - Production build test

2. **Deploy to Firebase Hosting**:
   - Builds the application with environment variables
   - Deploys to Firebase Hosting production channel
   - Returns deployment URL

3. **Notification**:
   - Success/failure status
   - Deployment confirmation

## Local Development

### Setup

```bash
# Navigate to landing page directory
cd landing-page

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables

Create `.env` file for local development:

```bash
# Development Environment
VITE_API_URL=http://localhost:8080
VITE_GA_MEASUREMENT_ID=           # Optional for development
VITE_SENTRY_DSN=                  # Optional for development
```

### Build and Preview

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Access at http://localhost:4173
```

### Firebase Emulator (optional)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Serve with Firebase emulator
firebase serve --only hosting

# Access at http://localhost:5000
```

### Linting

```bash
# Run ESLint
npm run lint

# Auto-fix issues
npm run lint -- --fix
```

## Production Build Optimization

The production build includes:

### Code Splitting

- React vendor bundle (react, react-dom, react-router-dom)
- i18n vendor bundle (i18next, react-i18next)
- Route-based code splitting

### Minification

- Terser minification
- CSS minification
- Console.log removal in production

### Performance

- Tree shaking for unused code
- Source maps for debugging
- Gzip/Brotli compression (Firebase automatic)

### Security Headers (firebase.json)

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

### Caching Strategy

- Static assets (images, fonts): 1 year cache
- JS/CSS bundles: 1 year cache (content-hashed filenames)
- index.html: No cache (must-revalidate)

## SEO Configuration

### Meta Tags

- Implemented via react-helmet-async
- Dynamic per-page titles and descriptions
- Open Graph tags for social media
- Twitter Card tags
- Language alternates (hreflang)

### Sitemap

- Static sitemap at `/sitemap.xml`
- Includes all pages with priorities and change frequencies
- Submit to Google Search Console after deployment

### Robots.txt

- Located at `/robots.txt`
- Allows all user agents
- References sitemap

## Analytics and Monitoring

### Google Analytics 4

- Configured with cookie consent integration
- Page view tracking
- Event tracking (newsletter, form submissions, CTA clicks)
- Respects user privacy preferences

### Sentry Error Tracking

- Automatic error capture
- Session replay for error debugging
- Performance monitoring (10% sample rate)
- Filters sensitive data (cookies, headers)

## Firebase Hosting Features

### Custom Domain

To configure a custom domain:

```bash
# Via Firebase Console
1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Enter domain name (e.g., slimpim.ai)
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (automatic)
```

### Multiple Channels

Firebase Hosting supports multiple channels:

- **Production**: Deployed via `channelId: live`
- **Preview**: Can create preview channels for PRs

```bash
# Deploy to preview channel locally
firebase hosting:channel:deploy preview-name
```

## Troubleshooting

### Build Failures

**Issue**: Build fails with TypeScript errors

```bash
# Solution: Run type check locally
npm run build

# Check for type errors
npx tsc --noEmit
```

**Issue**: Build fails with dependency errors

```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

**Issue**: Deployment fails with Firebase authentication error

```bash
# Solution: Verify GitHub secret
FIREBASE_SERVICE_ACCOUNT is properly configured with valid JSON
```

**Issue**: Environment variables not working

```bash
# Solution: Add to GitHub Secrets
# Go to Settings > Secrets > Actions
# Add VITE_API_URL, VITE_GA_MEASUREMENT_ID, etc.
```

### Domain Issues

**Issue**: Custom domain not resolving

```bash
# Check DNS configuration in Firebase Console
# Verify DNS records match Firebase requirements
# Wait 24-48 hours for full DNS propagation

# Check DNS
dig slimpim.ai
nslookup slimpim.ai
```

**Issue**: SSL certificate not working

```bash
# Firebase automatically provisions SSL
# If failing:
# 1. Domain must be verified
# 2. DNS must be correctly configured
# 3. Wait up to 24 hours for automatic provisioning
```

### Performance Issues

**Issue**: Slow page loads

```bash
# Check Firebase Hosting cache headers
# Verify static assets are cached properly
# Run Lighthouse audit
npm run build
npm run preview
npx lighthouse http://localhost:4173 --view
```

## Monitoring Post-Deployment

### Week 1 Checklist

- [ ] Verify all pages load correctly
- [ ] Test all forms (newsletter, contact)
- [ ] Check i18n switching (DE ⇄ EN)
- [ ] Test on mobile devices
- [ ] Verify analytics tracking
- [ ] Check Sentry for errors
- [ ] Run Lighthouse audit
- [ ] Test cookie consent banner

### Ongoing Monitoring

- **Daily**: Check Sentry for critical errors
- **Weekly**: Review Google Analytics metrics
- **Weekly**: Check Core Web Vitals in Search Console
- **Monthly**: Run full Lighthouse audit
- **Monthly**: Review and update sitemap

## Rollback Procedure

If deployment introduces issues:

```bash
# Via Firebase Console
1. Go to Firebase Console > Hosting
2. Click on "Release history"
3. Find last working deployment
4. Click "Rollback"

# Via Firebase CLI
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL TARGET_SITE_ID:live
```

## Firebase CLI Commands

Useful commands for local development and debugging:

```bash
# Deploy manually
cd landing-page
firebase deploy --only hosting

# View deployment history
firebase hosting:channel:list

# Delete old deployments
firebase hosting:clone --except SITE_ID:CHANNEL_ID

# View logs
firebase hosting:channel:open live
```

## Additional Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Vite Documentation](https://vitejs.dev/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Sentry React](https://docs.sentry.io/platforms/javascript/guides/react/)
- [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)

## Contact

For deployment issues or questions:

- Create an issue in the GitHub repository
- Contact DevOps team

---

**Last Updated**: 2025-11-25
**Maintained By**: DevOps Team
