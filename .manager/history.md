# Merge Historie

> Chronologisch sortiert, neueste zuerst

## 2025

### November

#### 2025-11-29: Fix GitHub Actions für Resend

- **Branch:** feature/fix-github-actions
- **Worktree:** ../slimpim-landing-github-actions
- **Commits:** 1 commit
- **Beschreibung:** GitHub Actions Workflow aktualisiert - Gmail-Secrets durch Resend-Secrets ersetzt
- **Merge-Typ:** Fast-forward

#### 2025-11-29: Email Service Migration zu Resend

- **Branch:** feature/resend-email
- **Worktree:** ../slimpim-landing-resend
- **Commits:** 1 commit
- **Beschreibung:** Email-Versand von Gmail/Nodemailer auf Resend migriert. Neue Env-Variablen: RESEND_API_KEY, EMAIL_FROM_ADDRESS, EMAIL_FROM_NAME
- **Merge-Typ:** Merge-Commit

---

## Template für neue Einträge

```
### YYYY-MM-DD: Feature-Name

- **Branch:** feature/feature-name
- **Worktree:** ../slimpim-landing-feature-name
- **Commits:** X commits
- **Beschreibung:** Kurze Beschreibung was implementiert wurde
- **Merge-Typ:** Fast-forward / Merge-Commit
```
