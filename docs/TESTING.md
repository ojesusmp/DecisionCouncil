# Testing — DecisionCouncil

## Smoke test pattern

```
decisioncouncil Evaluate whether Orlando should proceed to build HostingPR M1 now.
Scope: static homepage, lead form, Telegram notification endpoint, privacy page,
terms page, mobile-friendly layout, bilingual-ready copy structure, env vars for
Telegram bot token and chat ID, no AI yet.
OperationsCouncil verdict: FIX FIRST. Missing: runbooks, .env.example, restore docs,
vendor list, direct-contact fallback.
```

### Smoke pass criteria

- [ ] Exactly ten sections, in the order defined in SKILL.md.
- [ ] Verdict ∈ {PROCEED, FIX FIRST, STOP}.
- [ ] Verdict line includes a one-line `Why`.
- [ ] "Smallest next action" is concrete (a verb + an artifact), not "evaluate further."
- [ ] No hedging phrases ("it depends", "consider both", "either could work").
- [ ] No strategic expansion: no new councils, no new SaaS products proposed.
- [ ] No out-of-scope item appears as a recommendation.
- [ ] Total output **under 1,200 tokens**.
- [ ] Critical UNKNOWN, if any, forces FIX FIRST (not PROCEED).

### Expected smoke verdict (HostingPR M1)

- **PROCEED** — Operations' gap list is completable inside the same M1 build cycle (five small text files).
- Or **FIX FIRST** — only if the council judges the gap list must precede product code as a separate cycle.

**Not acceptable:**

- STOP on HostingPR M1 (M1 is in declared scope and has no irreversibility).
- A verdict that asks for AI, database, CRM, analytics, or a new council.

## JSON validation

```bash
node -e "JSON.parse(require('fs').readFileSync('package.json','utf8'))"
node -e "JSON.parse(require('fs').readFileSync('.claude-plugin/marketplace.json','utf8'))"
```

## Install script check

```bash
node --check install.cjs
```

## Regression before release

1. Smoke test against HostingPR M1.
2. Smoke test the out-of-scope example (Example 2 in EXAMPLES.md).
3. Smoke test the UNKNOWN example (Example 3 in EXAMPLES.md).
4. JSON validation.
5. `node --check install.cjs`.
6. `DECISIONCOUNCIL_FORCE_INSTALL=1 node install.cjs` outside source repo.
7. SHA-256 verification.

## Manual protocol audit

- [ ] 4 roles unchanged: Framer, Risk Judge, Operator Advocate, Foreman.
- [ ] Verdict set unchanged: PROCEED, FIX FIRST, STOP.
- [ ] Output budget under 1,200 tokens.
- [ ] No 5th role.
- [ ] No additional council referenced.
