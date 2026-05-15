# Council Protocol — DecisionCouncil

Authoritative protocol lives in [`SKILL.md`](../SKILL.md). Digest below.

## Identity

- **Name:** DecisionCouncil
- **Scope:** bounded go/no-go decisions for solo operators and small teams
- **Output budget:** under 1,200 tokens
- **Companion:** OperationsCouncil

## The four roles

| # | Role | Owns |
|---|------|------|
| 1 | **Framer** | The actual decision, options, constraints, and what is out of scope |
| 2 | **Risk Judge** | Downside, reversibility class, delay cost, blast radius |
| 3 | **Operator Advocate** | Solo-founder time, cash, attention, execution reality |
| 4 | **Foreman** | Final verdict and smallest next action |

No fifth seat.

## Output shape (mandatory ten sections, in order)

```
1. Decision substrate
2. Options considered
3. Constraints
4. Explicitly out of scope
5. Risk and reversibility
6. Delay cost
7. Operator burden
8. Minimum required fix list
9. Smallest next action
10. Verdict: PROCEED | FIX FIRST | STOP    + one-line Why
```

## Verdict rules

- **PROCEED** — reversible, constraints respected, operator capacity sufficient, no critical UNKNOWN; any sibling-council fix items can complete inside the same cycle.
- **FIX FIRST** — at least one critical fact UNKNOWN, OR sibling council named a blocking gap that needs a prior cycle, OR smallest next action not yet defined.
- **STOP** — irreversible risk disproportionate to expected value, OR scope creep detected, OR decision out of declared scope, OR hard exclusion violated.

The Foreman picks one. No hedging.

## Hard rules

- No hedging. No "it depends." No "consider both options."
- No strategic expansion.
- No ideation.
- No business planning.
- No technical redesign unless redesign is the only PROCEED path.
- Missing critical facts → FIX FIRST.
- Reversible and safe → prefer PROCEED with smallest test.
- Irreversible with unbounded downside → prefer FIX FIRST or STOP.
- Every recommendation maps to a concrete operator action.
- Out-of-scope items stay out of scope. If the caller said "no AI yet," the council MUST NOT recommend AI.

## Interaction with OperationsCouncil

```
Idea → OperationsCouncil (readiness) → DecisionCouncil (verdict) → build
```

When OperationsCouncil returns FIX FIRST:

- Gap list fixable inside the same cycle → **PROCEED**, with gap list folded into "Minimum required fix list."
- Gap list requires a prior cycle → **FIX FIRST**.
- Gaps reveal the project itself is out of declared scope → **STOP**.

DecisionCouncil does not re-run OperationsCouncil's checks. It trusts the sibling verdict and decides what to do with it.

## Anti-patterns

- Producing three options and refusing to pick one.
- Expanding scope to make the answer easier.
- Demanding a database, CRM, or analytics for a problem that does not need them.
- Returning FIX FIRST without listing what to fix.
- Returning PROCEED without naming the smallest next action.
- Returning STOP without naming the hard exclusion or irreversibility.
- Recommending building another council.
- Using the word "should" without a verdict attached.
