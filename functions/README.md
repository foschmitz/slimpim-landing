# Landing Page Cloud Functions

Firebase Cloud Functions v2 for handling newsletter signups independently from the main backend.

## Functions

### `notifySignup`

Handles "Notify Me" modal submissions from the landing page.

- **Endpoint**: `/api/v1/notify-signup`
- **Method**: POST
- **Body**: `{ email: string, name: string }`
- **Actions**:
  - Adds contact to Brevo list (ID: 3)
  - Sends confirmation email via Gmail to the subscriber

### `newsletterSubscribe`

Handles newsletter subscriptions from the footer.

- **Endpoint**: `/api/v1/newsletter/subscribe`
- **Method**: POST
- **Body**: `{ email: string, listType?: string }`
- **Actions**:
  - Adds contact to Brevo list (ID: 4 or 3 if listType is 'notify-me')
  - Sends confirmation email via Gmail to the subscriber

## Local Development

### Prerequisites

```bash
npm install -g firebase-tools
firebase login
```

### Configuration

For local testing, create `.runtimeconfig.json` in the `functions/` directory:

```json
{
  "brevo": {
    "api_key": "xkeysib-YOUR-API-KEY",
    "notify_me_list_id": "3",
    "newsletter_list_id": "4"
  },
  "gmail": {
    "user": "your-email@gmail.com",
    "app_password": "your-app-password"
  }
}
```

**Note**:
- Gmail App Password is required for sending confirmation emails. Generate one at https://myaccount.google.com/apppasswords
- `.runtimeconfig.json` is for local development only and is not committed to git
- Production uses Google Secret Manager (configured automatically via GitHub Actions)

### Local Testing

```bash
npm run serve
# Functions available at http://localhost:5001/slimpim/us-central1/
```

### Build

```bash
npm run build
```

## Deployment

Functions are deployed automatically with the landing page via GitHub Actions.

### Manual Deployment

```bash
cd landing-page
firebase deploy --only functions
```

## Environment Variables

Configured via Google Secret Manager (Firebase Functions v2):

### One-Time Setup (Required Before First Deployment)

Before deploying via GitHub Actions, create secrets in Google Secret Manager:

**Option 1: Using the setup script (Recommended)**

```bash
cd landing-page

# Set environment variables with your secret values
export BREVO_API_KEY="xkeysib-..."
export BREVO_NOTIFY_ME_LIST_ID="3"
export BREVO_NEWSLETTER_LIST_ID="4"
export GMAIL_USER="noreply@slimpim.ai"
export GMAIL_APP_PASSWORD="your-app-password"

# Run the setup script (requires gcloud auth with Secret Manager Admin role)
./scripts/setup-secrets.sh
```

**Option 2: Using Firebase CLI**

```bash
cd landing-page

# Set each secret (will prompt for value)
firebase functions:secrets:set BREVO_API_KEY --project slimpim
firebase functions:secrets:set BREVO_NOTIFY_ME_LIST_ID --project slimpim
firebase functions:secrets:set BREVO_NEWSLETTER_LIST_ID --project slimpim
firebase functions:secrets:set GMAIL_USER --project slimpim
firebase functions:secrets:set GMAIL_APP_PASSWORD --project slimpim
```

**Option 3: Using gcloud CLI**

```bash
echo -n "xkeysib-..." | gcloud secrets create BREVO_API_KEY --data-file=- --project=slimpim
echo -n "3" | gcloud secrets create BREVO_NOTIFY_ME_LIST_ID --data-file=- --project=slimpim
echo -n "4" | gcloud secrets create BREVO_NEWSLETTER_LIST_ID --data-file=- --project=slimpim
echo -n "noreply@slimpim.ai" | gcloud secrets create GMAIL_USER --data-file=- --project=slimpim
echo -n "your-app-password" | gcloud secrets create GMAIL_APP_PASSWORD --data-file=- --project=slimpim
```

### Required GitHub Secrets

Add these secrets to GitHub repository settings (for CI/CD deployment):
- `FIREBASE_SERVICE_ACCOUNT` - Firebase service account JSON for deployment
- (Other secrets like BREVO_API_KEY are stored in Secret Manager, not GitHub)

### How It Works

1. **One-time setup**: Secrets created in Google Secret Manager (see above)
2. **Deployment**: GitHub Actions deploys functions that reference these secrets
3. **Runtime**: Firebase automatically grants Cloud Functions access and injects secrets as `process.env`

**Security Note**: CI/CD service account does NOT need Secret Manager Admin role. Secrets are managed separately by admins.

## Monitoring

View logs:

```bash
firebase functions:log
```

Or in Firebase Console:
https://console.firebase.google.com/project/slimpim/functions/logs

## Security

- **Secrets Management**: API keys stored in Google Secret Manager (encrypted at rest)
- **Access Control**: Cloud Functions service account has minimal secretAccessor role
- **CORS**: Enabled for Firebase Hosting origin only
- **Input Validation**: All endpoints validate and sanitize user input
- **Error Handling**: Errors logged without exposing internals to users
- **Audit Trail**: Secret access logged in Google Cloud for security monitoring

## Benefits of v2 + Secret Manager

- **No Manual Configuration**: Secrets managed entirely via GitHub Actions
- **Automatic Rotation**: Update GitHub secret → auto-deploys to functions
- **Better Performance**: v2 functions have improved cold start times
- **Simplified Code**: Direct `process.env` access, no fallback logic needed
