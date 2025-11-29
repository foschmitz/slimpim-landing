# SlimPIM Landing Page - Feature Roadmap

> **Hinweis:** Diese Datei ist READ-ONLY für den Manager. Änderungen nur durch Product Owner.

## Projekt-Kontext

SlimPIM ist ein PIM-System (Product Information Management) für kleine und mittelständische E-Commerce Unternehmen. Diese Landing Page dient der Leadgenerierung vor dem Launch.

## Aktueller Stand

- React 19 + TypeScript + Vite
- i18n (DE/EN) implementiert
- Landing Page Sections: Hero, Problem, Solution, Features, Pricing, CTA, Footer
- NotifyMe Modal für Leadgenerierung
- Firebase Functions Backend
- Sentry Error Tracking
- Cookie Consent implementiert

---

## Phase 1: Core Landing Page (MVP)

### P1.1 - Performance & SEO Optimierung
**Priorität:** Hoch
**Status:** Offen

- [ ] Lighthouse Score > 90 für alle Metriken
- [ ] Core Web Vitals optimieren
- [ ] Lazy Loading für Bilder
- [ ] Critical CSS extrahieren

### P1.2 - Analytics & Tracking
**Priorität:** Hoch
**Status:** Offen

- [ ] Google Analytics 4 Events definieren
- [ ] Conversion Tracking für NotifyMe
- [ ] Scroll-Tracking implementieren
- [ ] A/B Testing Framework vorbereiten

### P1.3 - Content & Copy
**Priorität:** Mittel
**Status:** Offen

- [ ] Testimonials/Social Proof hinzufügen
- [ ] FAQ Section erstellen
- [ ] Vergleichstabelle (vs. Konkurrenz)
- [ ] Use Cases / Branchen-Fokus

---

## Phase 2: Conversion Optimierung

### P2.1 - Lead Magnet
**Priorität:** Hoch
**Status:** Offen

- [ ] Whitepaper/Guide als Download
- [ ] E-Mail Sequenz für Leads
- [ ] Early-Bird Pricing kommunizieren

### P2.2 - Trust Building
**Priorität:** Mittel
**Status:** Offen

- [ ] Über Uns Seite erweitern
- [ ] Team-Vorstellung
- [ ] Zertifikate/Partner Logos
- [ ] Datenschutz-Badges

### P2.3 - Interactive Elements
**Priorität:** Niedrig
**Status:** Offen

- [ ] ROI Calculator
- [ ] Feature Tour / Demo Video
- [ ] Chatbot für FAQs

---

## Phase 3: Pre-Launch

### P3.1 - Waitlist Management
**Priorität:** Hoch
**Status:** Offen

- [ ] Admin Dashboard für Leads
- [ ] Waitlist-Position anzeigen
- [ ] Referral-System

### P3.2 - Beta Access
**Priorität:** Mittel
**Status:** Offen

- [ ] Beta Signup Flow
- [ ] Onboarding Dokumentation
- [ ] Feedback Widget

---

## Technische Verbesserungen

### T1 - Testing
**Priorität:** Mittel
**Status:** Offen

- [ ] Unit Tests für Komponenten
- [ ] E2E Tests für kritische Flows
- [ ] Visual Regression Tests

### T2 - CI/CD
**Priorität:** Niedrig
**Status:** Offen

- [ ] GitHub Actions Pipeline
- [ ] Preview Deployments
- [ ] Automatische Lighthouse Checks

### T3 - Accessibility
**Priorität:** Mittel
**Status:** Offen

- [ ] WCAG 2.1 AA Compliance
- [ ] Keyboard Navigation
- [ ] Screen Reader Optimierung

---

## Legende

**Priorität:**
- Hoch = Nächste 2 Wochen
- Mittel = Nächste 4 Wochen
- Niedrig = Backlog

**Status:**
- Offen = Noch nicht begonnen
- In Arbeit = Worktree existiert
- Review = Fertig, wartet auf Merge
- Erledigt = Gemerged
