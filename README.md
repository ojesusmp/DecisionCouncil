# DecisionCouncil

> Four-role bounded go/no-go decision skill for solo operators and small teams.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**DecisionCouncil** is a Claude Code skill that takes a bounded decision and returns one of three verdicts — **PROCEED**, **FIX FIRST**, or **STOP** — with a concrete smallest next action. No hedging, no strategic expansion, no ideation.

Companion to OperationsCouncil. DecisionCouncil decides; OperationsCouncil runs the result.

---

## Install

### 1. Claude Code plugin marketplace

```
/plugin marketplace add ojesusmp/DecisionCouncil
/plugin install decisioncouncil@decisioncouncil
```

### 2. Git clone (manual)

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

### 3. npm

```bash
npm install -g @ojesusmp/decisioncouncil
```

---

## Usage

```
decisioncouncil Evaluate whether the operator should proceed to build Project M1 now.
```

The council produces a structured ten-section response and emits one verdict — **PROCEED**, **FIX FIRST**, or **STOP**.

See [SKILL.md](./SKILL.md) for the full protocol and [docs/EXAMPLES.md](./docs/EXAMPLES.md) for worked examples.

---

## The four roles

| Role | Owns |
|------|------|
| **Framer** | The actual decision, options, constraints, and what is explicitly out of scope |
| **Risk Judge** | Downside, reversibility class, delay cost, blast radius |
| **Operator Advocate** | Solo-founder time, cash, attention, execution reality |
| **Foreman** | Final verdict and smallest next action |

No fifth seat. No ideation seat. No strategy seat.

---

## Output shape

Ten sections, in order:

1. Decision substrate
2. Options considered
3. Constraints
4. Explicitly out of scope
5. Risk and reversibility
6. Delay cost
7. Operator burden
8. Minimum required fix list
9. Smallest next action
10. Verdict: **PROCEED** | **FIX FIRST** | **STOP**

Total output target: **under 1,200 tokens**.

---

## Rules

- No hedging. No "it depends." No "consider both options."
- No strategic expansion. No ideation. No business planning.
- Missing facts marked UNKNOWN. Missing **critical** facts default to **FIX FIRST**.
- Reversible and safe → prefer **PROCEED** with smallest test.
- Irreversible with unbounded downside → prefer **FIX FIRST** or **STOP**.
- Every recommendation maps to a concrete operator action.

---

## Sibling

- **OperationsCouncil** — runs readiness checks (runbooks, vendor list, restore docs, direct-contact fallback). DecisionCouncil consumes its verdict.

## Credits

Built and maintained by **Orlando Molina** under **TruePointAgents**.

## License

Released under the [MIT License](./LICENSE).
