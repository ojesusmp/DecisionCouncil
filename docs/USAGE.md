# Usage — DecisionCouncil

## Invocation

```
decisioncouncil <one-sentence decision>
```

Optional follow-up lines: scope, constraints, what is out of scope, known facts, sibling-council verdicts.

## Example

```
decisioncouncil Evaluate whether Orlando should proceed to build HostingPR M1 now.
Scope: static homepage, lead form, Telegram notification endpoint, privacy page, terms page,
mobile-friendly layout, bilingual-ready copy structure, env vars for Telegram bot token and chat ID,
no AI yet.
Constraints: solo operator, evenings, low cash, fast time-to-launch.
Out of scope: checkout, CRM, AI, database, multi-agent, SEO automation, newsletter funnel,
Google Maps prospecting.
Facts: OperationsCouncil verdict = FIX FIRST (missing runbooks, .env.example, restore docs,
vendor list, direct-contact fallback).
```

## Output (ten sections)

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
10. Verdict: PROCEED | FIX FIRST | STOP   (one-line Why)
```

Total budget: **under 1,200 tokens**.

## Inputs

- **Decision** — one sentence.
- **Scope** — what is being built.
- **Constraints** — time, money, energy, dependencies.
- **Out of scope** — hard exclusions. The council MUST honor these.
- **Facts** — what is known. Anything missing → mark `UNKNOWN`.
- **Sibling verdicts** — optional. OperationsCouncil verdict is the typical input.

## When the council refuses or defaults

- Decision is not yet defined → council prints "decision not framed; cannot decide" and exits.
- Trivial reversible decision (file naming, formatting) → council prints "below threshold; just do it."
- The operator has already committed → council prints "post-hoc not supported; run a post-mortem instead."
- A critical fact is UNKNOWN → council emits FIX FIRST with the UNKNOWN list as the fix list.

## Hard rules (mirrored from SKILL.md)

- No hedging.
- No "it depends."
- No strategic expansion.
- No ideation.
- No business planning.
- No technical redesign unless redesign is the only path to PROCEED.
- Missing critical facts default to FIX FIRST.
- Reversible and safe → prefer PROCEED with smallest test.
- Irreversible with unbounded downside → prefer FIX FIRST or STOP.

## See also

- [SKILL.md](../SKILL.md)
- [docs/COUNCIL_PROTOCOL.md](./COUNCIL_PROTOCOL.md)
- [docs/EXAMPLES.md](./EXAMPLES.md)
- [docs/TESTING.md](./TESTING.md)
