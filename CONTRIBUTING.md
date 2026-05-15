# Contributing to DecisionCouncil

Thanks for your interest. This document explains how to propose changes, design constraints, and review process.

## Ways to contribute

- **Bug reports** — open an issue using the bug template.
- **Feature requests** — open an issue using the feature template.
- **Pull requests** — small, focused, with a smoke test or manual verification plan.
- **Documentation** — README, CHANGELOG, EXAMPLES improvements.

## Pull request workflow

1. Fork and branch from `main`.
2. Small focused diffs.
3. Update `CHANGELOG.md` under `## [Unreleased]`.
4. If you touched `SKILL.md`, update `docs/COUNCIL_PROTOCOL.md` and `README.md`.
5. Run smoke test in `docs/TESTING.md`.
6. Open PR.

## How to test changes

- Smoke test in `docs/TESTING.md` (HostingPR M1 prompt is canonical).
- JSON validation of `package.json` and `.claude-plugin/marketplace.json`.
- `node --check install.cjs`.

## How to avoid scope creep

- **4 roles only.** Framer / Risk Judge / Operator Advocate / Foreman.
- **Output budget under 1,200 tokens.**
- **Verdict set: PROCEED / FIX FIRST / STOP only.**
- **No new council.** Do not propose adding one.
- **No new verdict modes.**
- **No ideation, brainstorming, or strategic-expansion features.**

## Coding conventions

- Match existing style. Plain ASCII source.
- No new dependencies without justification.

## Protocol change requirement

Changes to `SKILL.md` MUST update `README.md`, `CHANGELOG.md`, `docs/COUNCIL_PROTOCOL.md`, and (if examples change) `docs/EXAMPLES.md`.

## Reporting security issues

See [SECURITY.md](./SECURITY.md). Do NOT open public issues.

## Code of conduct

[Contributor Covenant 2.1](./CODE_OF_CONDUCT.md).
