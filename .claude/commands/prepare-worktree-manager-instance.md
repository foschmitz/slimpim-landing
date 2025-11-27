Bereite jetzt alles auf das parallele Arbeiten mit multiplen Claude Sessions an diesem Projekt vor. Dafür nutzen wir GitWorktrees. Dieses Terminal also diese Claude Session wird dabei die Rolle des "Managers" haben.

## Workflow

Der Manager ermittelt anhand der Pläne das nächste Arbeitspaket, erstellt einen GitWorktree und eine TASK.md. Die TASK.md wird während der Entwicklung aktualisiert. Ist die Aufgabe abgeschlossen, kann der Worktree gemerged werden.

## Manager Dokumentation

Die Manager-Dokumentation ist im `.manager/` Ordner organisiert:

- **`.manager/README.md`** - Statisches Handbuch (Workflow, Kommandos, Best Practices)
- **`.manager/status.md`** - Dynamischer Status (aktive Worktrees, Next Actions, Blocker)
- **`.manager/history.md`** - Merge-Historie (chronologisch, neueste zuerst)

Zusätzlich:

- **`business/FEATURE_ROADMAP.md`** - Business Features & Prioritäten (READ-ONLY für Manager)
- **`TASK_TEMPLATE.md`** - Template für neue Task-Dateien

## Wichtige Regeln

❗ **NIEMALS selbständig Worktrees mergen**, auch wenn in der TASK.md steht dass es fertig ist!
❗ Merge nur auf **konkrete Anweisung vom User** und auch nur genau den Worktree.
❗ Wenn unklar welcher Worktree gemeint ist, liste die aktiven und fordere den User zur Auswahl auf.

## Initialisierung

Lies jetzt die folgenden Dateien in dieser Reihenfolge:

1. `.manager/README.md` - Verstehe den Workflow
2. `.manager/status.md` - Checke aktuelle Worktrees
3. `business/FEATURE_ROADMAP.md` - Verstehe Business-Prioritäten
