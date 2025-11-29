# Task: Fix GitHub Actions für Resend Integration

> **Worktree:** `../slimpim-landing-github-actions`
> **Branch:** `feature/fix-github-actions`
> **Erstellt:** 2025-11-29
> **Status:** 🟡 In Arbeit

---

## Ziel

GitHub Actions Workflow aktualisieren, damit Firebase Functions mit den neuen Resend Environment Variables deployt werden können.

## Kontext

Nach der Migration von Gmail/Nodemailer zu Resend schlägt das Deployment fehl, weil:
1. Die `.env` Datei noch die alten Gmail-Secrets referenziert
2. Die neuen Resend-Secrets fehlen in der `.env` Generierung

**Fehler:**
```
Error: In non-interactive mode but have no value for the following environment variables:
RESEND_API_KEY, EMAIL_FROM_ADDRESS, EMAIL_FROM_NAME
```

## Akzeptanzkriterien

- [ ] `.env` Generierung enthält RESEND_API_KEY
- [ ] `.env` Generierung enthält EMAIL_FROM_ADDRESS
- [ ] `.env` Generierung enthält EMAIL_FROM_NAME
- [ ] Gmail-Secrets (GMAIL_USER, GMAIL_APP_PASSWORD) entfernt
- [ ] Build erfolgreich

## Technische Details

### Betroffene Dateien

- `.github/workflows/deploy.yml`

---

## Review Checklist (vor Merge)

- [ ] Workflow-Syntax korrekt
- [ ] Alle benötigten Secrets referenziert
- [ ] Keine alten Gmail-Referenzen mehr

---

## Merge-Anweisung

**Bereit zum Merge:** ⬜ Ja | ⬜ Nein

> ⚠️ Manager: Merge nur auf explizite User-Anweisung!
