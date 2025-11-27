#!/bin/bash

# One-time setup script to create Firebase Functions secrets in Google Secret Manager
# Run this script locally with admin permissions BEFORE deploying via GitHub Actions
#
# Prerequisites:
# 1. gcloud CLI installed and authenticated: gcloud auth login
# 2. You have Secret Manager Admin role on the project
# 3. Environment variables set with secret values (see below)
#
# Usage:
#   export BREVO_API_KEY="xkeysib-..."
#   export BREVO_NOTIFY_ME_LIST_ID="3"
#   export BREVO_NEWSLETTER_LIST_ID="4"
#   export GMAIL_USER="noreply@slimpim.ai"
#   export GMAIL_APP_PASSWORD="your-app-password"
#   ./scripts/setup-secrets.sh

set -e

PROJECT_ID="slimpim"
REGION="us-central1"

echo "🔐 Setting up Firebase Functions secrets for project: ${PROJECT_ID}"
echo ""

# Check if required environment variables are set
REQUIRED_VARS=("BREVO_API_KEY" "BREVO_NOTIFY_ME_LIST_ID" "BREVO_NEWSLETTER_LIST_ID" "GMAIL_USER" "GMAIL_APP_PASSWORD")
for VAR in "${REQUIRED_VARS[@]}"; do
  if [ -z "${!VAR}" ]; then
    echo "❌ Error: ${VAR} environment variable is not set"
    echo ""
    echo "Please set all required environment variables:"
    echo "  export BREVO_API_KEY='your-api-key'"
    echo "  export BREVO_NOTIFY_ME_LIST_ID='3'"
    echo "  export BREVO_NEWSLETTER_LIST_ID='4'"
    echo "  export GMAIL_USER='noreply@slimpim.ai'"
    echo "  export GMAIL_APP_PASSWORD='your-app-password'"
    exit 1
  fi
done

echo "✅ All required environment variables are set"
echo ""

# Function to create or update a secret
create_or_update_secret() {
  local SECRET_NAME=$1
  local SECRET_VALUE=$2

  echo "📝 Processing secret: ${SECRET_NAME}"

  # Try to create the secret
  if echo -n "${SECRET_VALUE}" | gcloud secrets create "${SECRET_NAME}" \
    --project="${PROJECT_ID}" \
    --replication-policy="automatic" \
    --data-file=- 2>/dev/null; then
    echo "  ✅ Created new secret: ${SECRET_NAME}"
  else
    # Secret already exists, add a new version
    if echo -n "${SECRET_VALUE}" | gcloud secrets versions add "${SECRET_NAME}" \
      --project="${PROJECT_ID}" \
      --data-file=- 2>/dev/null; then
      echo "  ✅ Updated existing secret: ${SECRET_NAME}"
    else
      echo "  ⚠️  Failed to create or update secret: ${SECRET_NAME}"
      return 1
    fi
  fi
}

# Create/update all secrets
create_or_update_secret "BREVO_API_KEY" "${BREVO_API_KEY}"
create_or_update_secret "BREVO_NOTIFY_ME_LIST_ID" "${BREVO_NOTIFY_ME_LIST_ID}"
create_or_update_secret "BREVO_NEWSLETTER_LIST_ID" "${BREVO_NEWSLETTER_LIST_ID}"
create_or_update_secret "GMAIL_USER" "${GMAIL_USER}"
create_or_update_secret "GMAIL_APP_PASSWORD" "${GMAIL_APP_PASSWORD}"

echo ""
echo "🎉 All secrets have been set up successfully!"
echo ""
echo "📋 Next steps:"
echo "  1. Secrets are now stored in Google Secret Manager"
echo "  2. Deploy via GitHub Actions workflow"
echo "  3. Firebase will automatically grant Cloud Functions access to these secrets"
echo ""
echo "🔍 Verify secrets:"
echo "  gcloud secrets list --project=${PROJECT_ID}"
echo ""
