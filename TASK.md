# Task: Email Service Migration zu Resend

> **Worktree:** `../slimpim-landing-resend`
> **Branch:** `feature/resend-email`
> **Erstellt:** 2025-11-29
> **Status:** 🟢 Abgeschlossen

---

## Ziel

Email-Versand von Gmail/Nodemailer auf Resend umstellen für bessere Deliverability und einfacheres Setup.

## Kontext

Aktuell werden Bestätigungs-Emails über Gmail App Password + Nodemailer versendet. Dies erfordert:
- Gmail Account mit App Password
- Komplexe Konfiguration
- Potentielle Deliverability-Probleme

Resend bietet:
- Einfache API
- Bessere Deliverability
- Modernes SDK
- Firebase Functions kompatibel

## Umgebungsvariablen

| Variable           | Beschreibung                                            |
|--------------------|--------------------------------------------------------|
| RESEND_API_KEY     | API Key von Resend (Pflicht für Produktion)            |
| EMAIL_FROM_ADDRESS | Absender-Email (optional, Default: noreply@example.com)|
| EMAIL_FROM_NAME    | Absender-Name (optional, Default: SlimPIM)             |

## Akzeptanzkriterien

- [x] Nodemailer + Gmail Dependencies entfernt
- [x] Resend SDK installiert und konfiguriert
- [x] `sendUserConfirmationEmail` nutzt Resend statt Nodemailer
- [x] Environment-Variablen korrekt definiert (defineString)
- [x] Fallback-Werte für FROM_ADDRESS und FROM_NAME
- [x] Bestehende Email-Templates bleiben erhalten
- [x] Error Handling für Resend API Fehler
- [x] Logging für erfolgreiche/fehlgeschlagene Sends
- [x] Build erfolgreich (`npm run build` in functions/)
- [x] TypeScript Typen korrekt

## Technische Details

### Betroffene Dateien

- `functions/src/index.ts` - Hauptlogik
- `functions/package.json` - Dependencies

### Zu entfernende Dependencies

- `nodemailer`
- `@types/nodemailer`

### Neue Dependencies

- `resend`

### Code-Änderungen

1. **Environment Variables:**
```typescript
const resendApiKey = defineString('RESEND_API_KEY');
const emailFromAddress = defineString('EMAIL_FROM_ADDRESS');
const emailFromName = defineString('EMAIL_FROM_NAME');
```

2. **Resend Client erstellen:**
```typescript
import { Resend } from 'resend';

function getResendClient(): Resend {
  const apiKey = resendApiKey.value();
  if (!apiKey) {
    throw new Error('RESEND_API_KEY not configured');
  }
  return new Resend(apiKey);
}
```

3. **sendUserConfirmationEmail umschreiben:**
```typescript
async function sendUserConfirmationEmail(email: string, name: string, type: string): Promise<boolean> {
  const resend = getResendClient();
  const fromAddress = emailFromAddress.value() || 'noreply@example.com';
  const fromName = emailFromName.value() || 'SlimPIM';

  await resend.emails.send({
    from: `${fromName} <${fromAddress}>`,
    to: email,
    subject: '...',
    html: '...',
    text: '...'
  });
}
```

### Breaking Changes

- Gmail-Credentials werden nicht mehr benötigt
- Neue Environment Variables müssen gesetzt werden

---

## Fortschritt

### Phase 1: Dependencies
- [x] `nodemailer` und `@types/nodemailer` aus package.json entfernen
- [x] `resend` zu package.json hinzufügen
- [x] `npm install` ausführen

### Phase 2: Code-Migration
- [x] Gmail-spezifische Imports entfernen
- [x] Resend importieren
- [x] Environment Variables anpassen
- [x] `createEmailTransporter()` entfernen
- [x] `sendUserConfirmationEmail()` auf Resend umstellen

### Phase 3: Validation
- [x] TypeScript kompilieren (`npm run build`)
- [x] Code-Review der Änderungen
- [x] Lint-Check

---

## Notizen

- Brevo bleibt für Kontakt-Management bestehen (nur Email-Versand wird migriert)
- Email-Templates (HTML/Text) bleiben identisch
- Resend Docs: https://resend.com/docs/send-with-nodejs

---

## Review Checklist (vor Merge)

- [x] Alle Akzeptanzkriterien erfüllt
- [x] Keine TypeScript/ESLint Fehler
- [x] Build erfolgreich
- [x] Gmail-Code vollständig entfernt
- [x] Environment Variables dokumentiert

---

## Merge-Anweisung

**Bereit zum Merge:** ✅ Ja | ⬜ Nein

> ⚠️ Manager: Merge nur auf explizite User-Anweisung!
