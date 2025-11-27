# SlimPIM Landing Page

Marketing landing page for SlimPIM - The Simple PIM for E-Commerce SMBs.

Built with React 19, Vite, TailwindCSS, and deployed to Firebase Hosting with Cloud Functions.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: TailwindCSS
- **i18n**: i18next (German/English)
- **Hosting**: Firebase Hosting
- **Backend**: Firebase Cloud Functions (newsletter, notifications)
- **Analytics**: Google Analytics 4, Sentry
- **Email**: Brevo (Sendinblue) for mailing lists

## Local Development

```bash
# Install dependencies
npm install
cd functions && npm install && cd ..

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   └── landing/     # Landing page sections
│   ├── pages/           # Route pages (Impressum, AGB, etc.)
│   ├── i18n/            # Translations (de/en)
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utilities (Sentry)
├── public/              # Static assets
├── functions/           # Firebase Cloud Functions
│   └── src/index.ts     # Newsletter & notification APIs
├── firebase.json        # Firebase config
└── vite.config.ts       # Vite config
```

## GitHub Actions Secrets Setup

To enable automatic deployment, configure these secrets in your GitHub repository:

**Settings → Secrets and variables → Actions → New repository secret**

### Required Secrets

| Secret | Description | How to Get |
|--------|-------------|------------|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase service account JSON | Firebase Console → Project Settings → Service accounts → Generate new private key. Paste entire JSON content. |

### Build Environment Secrets

| Secret | Description | How to Get |
|--------|-------------|------------|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID | Google Analytics → Admin → Data Streams → Your stream → Measurement ID (format: `G-XXXXXXXXXX`) |
| `VITE_SENTRY_DSN` | Sentry error tracking DSN | Sentry → Settings → Projects → Your project → Client Keys (DSN) |

### Email/Newsletter Secrets (Brevo)

| Secret | Description | How to Get |
|--------|-------------|------------|
| `BREVO_API_KEY` | Brevo (Sendinblue) API key | Brevo → Settings → SMTP & API → API Keys → Generate |
| `BREVO_NOTIFY_ME_LIST_ID` | Brevo list ID for "Notify Me" signups | Brevo → Contacts → Lists → Your list → List ID (number) |
| `BREVO_NEWSLETTER_LIST_ID` | Brevo list ID for newsletter subscribers | Brevo → Contacts → Lists → Your list → List ID (number) |

### Gmail Notification Secrets (Optional)

| Secret | Description | How to Get |
|--------|-------------|------------|
| `GMAIL_USER` | Gmail address for notifications | Your Gmail address |
| `GMAIL_APP_PASSWORD` | Gmail App Password | Google Account → Security → 2-Step Verification → App passwords → Generate |

## Firebase Setup

1. **Create Firebase Project** (if not exists):
   ```bash
   npx firebase login
   npx firebase projects:create slimpim
   ```

2. **Initialize Firebase** (already configured in `.firebaserc`):
   ```bash
   npx firebase use slimpim
   ```

3. **Deploy manually** (for testing):
   ```bash
   npm run build
   npx firebase deploy
   ```

## Environment Variables

For local development, copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

For Firebase Functions, copy `.env.example` to `functions/.env`:

```bash
cp .env.production.example functions/.env
# Edit with your actual values
```

## Deployment

Deployment is automatic on push to `main` branch via GitHub Actions.

Manual deployment:
```bash
npm run build
npx firebase deploy --only hosting
npx firebase deploy --only functions
```

## License

Proprietary - SlimPIM GmbH
