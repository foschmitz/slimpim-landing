# Manager Workflow Handbuch

## Übersicht

Diese Claude-Session agiert als **Manager** für parallele Entwicklung mit Git Worktrees. Der Manager koordiniert Arbeitspakete, erstellt Worktrees und überwacht den Fortschritt.

## Workflow

### 1. Arbeitspaket ermitteln

- Prüfe `business/FEATURE_ROADMAP.md` für Prioritäten
- Prüfe `.manager/status.md` für aktive Worktrees
- Wähle das nächste sinnvolle Arbeitspaket

### 2. Worktree erstellen

```bash
# Neuen Worktree erstellen
git worktree add ../slimpim-landing-<feature-name> -b feature/<feature-name>

# Beispiel:
git worktree add ../slimpim-landing-auth -b feature/auth
```

### 3. TASK.md erstellen

Erstelle eine `TASK.md` im Worktree-Root basierend auf `TASK_TEMPLATE.md`.

### 4. Worker-Session starten

Ein separates Terminal mit Claude wird im Worktree geöffnet und arbeitet die TASK.md ab.

### 5. Merge (nur auf User-Anweisung!)

```bash
# Zum Main-Branch wechseln
git checkout main

# Feature-Branch mergen
git merge feature/<feature-name>

# Worktree entfernen
git worktree remove ../slimpim-landing-<feature-name>

# Branch löschen
git branch -d feature/<feature-name>
```

## Kommandos

### Worktree-Status prüfen

```bash
git worktree list
```

### Aktive Branches anzeigen

```bash
git branch -a
```

### Worktree-Änderungen prüfen

```bash
# Im Worktree-Verzeichnis
git status
git log --oneline -5
```

## Wichtige Regeln

1. **NIEMALS selbständig mergen** - Nur auf explizite User-Anweisung
2. **Immer nachfragen** wenn unklar welcher Worktree gemeint ist
3. **Status aktuell halten** - `.manager/status.md` nach jeder Änderung updaten
4. **History dokumentieren** - Nach jedem Merge in `.manager/history.md` eintragen

## Datei-Struktur

```
.manager/
├── README.md      # Dieses Handbuch (statisch)
├── status.md      # Aktuelle Worktrees & Status (dynamisch)
└── history.md     # Merge-Historie (chronologisch)

business/
└── FEATURE_ROADMAP.md  # Business-Prioritäten (READ-ONLY)

TASK_TEMPLATE.md        # Template für neue Tasks
```

## Best Practices

- **Kleine, fokussierte Arbeitspakete** - Ein Feature pro Worktree
- **Klare Akzeptanzkriterien** - In der TASK.md definieren
- **Regelmäßige Updates** - Status nach jedem Meilenstein aktualisieren
- **Konflikte früh erkennen** - Vor dem Merge main in Feature-Branch mergen
