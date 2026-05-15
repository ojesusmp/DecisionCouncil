# Installation — DecisionCouncil

Three paths.

## 1. Claude Code plugin marketplace

```
/plugin marketplace add ojesusmp/DecisionCouncil
/plugin install decisioncouncil@decisioncouncil
```

## 2. Git clone (manual)

```bash
git clone https://github.com/ojesusmp/DecisionCouncil.git
```

POSIX:
```bash
mkdir -p ~/.claude/skills/decisioncouncil
cp DecisionCouncil/SKILL.md ~/.claude/skills/decisioncouncil/SKILL.md
```

Windows PowerShell:
```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills\decisioncouncil" | Out-Null
Copy-Item "DecisionCouncil\SKILL.md" "$env:USERPROFILE\.claude\skills\decisioncouncil\SKILL.md"
```

**Verify SHA-256:**
```bash
sha256sum ~/.claude/skills/decisioncouncil/SKILL.md
```

## 3. npm

```bash
npm install -g @ojesusmp/decisioncouncil
```

Postinstall copies SKILL.md, SHA-256 verified, refuses to run inside the source repo unless `DECISIONCOUNCIL_FORCE_INSTALL=1`.

## Uninstall

```bash
rm -rf ~/.claude/skills/decisioncouncil/
npm uninstall -g @ojesusmp/decisioncouncil
```

## Troubleshooting

- **Skill not detected** — restart Claude Code.
- **SHA-256 mismatch** — re-run install.
- **Postinstall skipped** — set `DECISIONCOUNCIL_FORCE_INSTALL=1` if running inside the source repo.
