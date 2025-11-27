# Firebase Functions Deployment Guide

## Overview

The landing page now uses Firebase Cloud Functions for newsletter signups, making it completely independent from the PIM backend.

## Architecture

```
Landing Page (Firebase Hosting)
    ↓
    ├─ /api/v1/notify-signup → notifySignup Cloud Function → Brevo API
    └─ /api/v1/newsletter/subscribe → newsletterSubscribe Cloud Function → Brevo API
```

## Prerequisites

1. **Firebase CLI** (for local testing)

   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **GitHub Secrets** (already configured)
   - `FIREBASE_SERVICE_ACCOUNT` - For deployment
   - `BREVO_API_KEY` - Brevo API key
   - `FIREBASE_TOKEN` - Firebase CI token (if needed)

3. **Brevo Account**
   - List ID 3: Notify Me
   - List ID 4: Newsletter

## Local Development

### 1. Install Dependencies

```bash
cd landing-page
npm ci --legacy-peer-deps

cd functions
npm ci
```

### 2. Configure Firebase Functions

```bash
cd landing-page

# Set Brevo configuration
firebase functions:config:set \
  brevo.api_key="xkeysib-YOUR-ACTUAL-KEY" \
  brevo.notify_me_list_id="3" \
  brevo.newsletter_list_id="4"
```

### 3. Build Functions

```bash
cd functions
npm run build
```

### 4. Run Local Emulator

```bash
cd functions
npm run serve
```

Functions will be available at:

- http://localhost:5001/slimpim/us-central1/notifySignup
- http://localhost:5001/slimpim/us-central1/newsletterSubscribe

### 5. Test Frontend Locally

```bash
cd landing-page
npm run dev
```

## Production Deployment

### Automated (GitHub Actions)

The workflow `.github/workflows/deploy-landing-page.yml` handles everything automatically:

1. Builds the React app
2. Installs function dependencies
3. Sets Firebase Functions config from GitHub secrets
4. Deploys hosting + functions together

**Trigger**: Manual workflow dispatch or push to main

### Manual Deployment

```bash
cd landing-page

# Deploy everything
firebase deploy

# Deploy only functions
firebase deploy --only functions

# Deploy only hosting
firebase deploy --only hosting
```

## Verification

### 1. Check Deployment Status

```bash
# View deployed functions
firebase functions:list

# View function logs
firebase functions:log
```

### 2. Test Production Endpoints

```bash
# Test notify-signup
curl -X POST https://slimpim.ai/api/v1/notify-signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User"}'

# Expected response:
# {"success":true,"message":"Thank you for signing up! Check your email for confirmation."}
```

### 3. Verify in Brevo Dashboard

1. Go to https://app.brevo.com/contact/lists
2. Check "Notify Me" list (ID: 3)
3. Verify test contact appears

### 4. Check Firebase Console

1. Go to https://console.firebase.google.com/project/slimpim/functions
2. View function invocations and logs
3. Check for errors

## Configuration Updates

### Update Brevo API Key

```bash
# Production
firebase functions:config:set brevo.api_key="NEW-KEY" --project=slimpim
firebase deploy --only functions

# Also update GitHub secret BREVO_API_KEY
```

### Change List IDs

```bash
firebase functions:config:set \
  brevo.notify_me_list_id="NEW_ID" \
  brevo.newsletter_list_id="NEW_ID" \
  --project=slimpim

firebase deploy --only functions
```

## Troubleshooting

### Functions Not Deploying

```bash
# Check Firebase project
firebase projects:list

# Use correct project
firebase use slimpim

# Re-authenticate
firebase login --reauth
```

### 500 Errors in Production

```bash
# Check function logs
firebase functions:log --limit 50

# Common issues:
# - Missing Brevo config: Run functions:config:set
# - Invalid API key: Update secret
# - CORS errors: Check origin settings
```

### Local Emulator Not Working

```bash
# Clean install
cd functions
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build

# Start emulator with debug
firebase emulators:start --only functions --debug
```

## Monitoring

### Firebase Console

- https://console.firebase.google.com/project/slimpim/functions/logs
- View real-time invocations, errors, performance

### Brevo Dashboard

- https://app.brevo.com/statistics/logs
- Monitor API usage, contact additions, bounces

## Rollback Plan

If issues occur in production:

1. **Quick Fix**: Revert frontend to use backend API

   ```typescript
   // In NotifyMeModal.tsx and Footer.tsx
   const response = await fetch('https://api.slimpim.ai/api/v1/notify-signup', {...})
   ```

2. **Redeploy**: Use previous commit

   ```bash
   git checkout <previous-commit>
   firebase deploy
   ```

3. **Disable Functions**: Keep hosting, disable functions
   ```bash
   firebase functions:delete notifySignup
   firebase functions:delete newsletterSubscribe
   ```

## Cost Monitoring

Firebase free tier includes:

- 2M function invocations/month
- 400K GB-seconds compute
- 200K CPU-seconds

Landing page usage (estimated):

- ~1,000 signups/month
- Well within free tier
- Cost: $0.00/month

## Next Steps

After deployment:

1. ✅ Test notify-me modal on production site
2. ✅ Test newsletter footer on production site
3. ✅ Verify contacts in Brevo
4. ✅ Monitor function logs for 24 hours
5. ✅ Update documentation if needed

## Support

- Firebase Functions: https://firebase.google.com/docs/functions
- Brevo API: https://developers.brevo.com/
- GitHub Actions: Check workflow run logs
