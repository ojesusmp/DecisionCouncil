# Maintainer Notes — DecisionCouncil

## Design constraints (locked)

- **4 roles only.** Framer / Risk Judge / Operator Advocate / Foreman.
- **Output budget under 1,200 tokens.**
- **Verdict set: PROCEED / FIX FIRST / STOP only.**
- **Pre-decision only.** Not for post-hoc validation.
- **No 5th seat.** No ideation seat. No strategy seat.

## Common contributor mistakes

- Adding a "Strategy" or "Brainstorm" seat. DecisionCouncil is bounded; strategy lives elsewhere.
- Returning FIX FIRST without listing what to fix.
- Returning PROCEED without naming the smallest next action.
- Letting the council recommend AI / database / CRM / analytics when the operator's hard-exclusion list forbids them.
- Using DC to ratify decisions already executed → post-hoc rationalization, not a decision.

## When to update

If you change `SKILL.md`, mirror updates to:

- `README.md`
- `CHANGELOG.md`
- `docs/COUNCIL_PROTOCOL.md`
- `docs/USAGE.md` (if invocation pattern changed)
- `docs/EXAMPLES.md` (if output shape changed)

## Issue triage

- **`bug`** — protocol deviation.
- **`feature`** — new bounded-decision use case.
- **`documentation`** — README/docs/EXAMPLES.
- **`question`** — usage help.
- **`scope-creep`** — 5th seat, new verdict mode, ideation features, new council → polite close.

## Release cadence

No fixed cadence.

## Origin

Bounded go/no-go skill for solo operators. Companion to OperationsCouncil. DecisionCouncil decides; OperationsCouncil runs the result. Four roles is the minimum viable shape: Framer locks scope, Risk Judge weighs downside, Operator Advocate enforces capacity reality, Foreman commits to one verdict.
