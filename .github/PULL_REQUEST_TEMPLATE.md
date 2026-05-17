# Pull request

## What does this PR change?

## Why is this change needed?

## Type of change

- [ ] Documentation only
- [ ] Bug fix (no protocol behavior change)
- [ ] Protocol change (modifies SKILL.md)
- [ ] Tooling / CI / packaging
- [ ] Other (describe)

## Verification

- [ ] Smoke test from `docs/TESTING.md` (Project M1 prompt) passes
- [ ] JSON files validate (`package.json`, `.claude-plugin/marketplace.json`)
- [ ] `node --check install.cjs` passes
- [ ] Manual end-to-end invocation produced the expected ten-section output shape
- [ ] Verdict is one of: PROCEED / FIX FIRST / STOP

## Documentation

If this PR changes `SKILL.md`:

- [ ] `README.md` updated
- [ ] `CHANGELOG.md` updated under `## [Unreleased]`
- [ ] `docs/COUNCIL_PROTOCOL.md` updated
- [ ] `docs/USAGE.md` updated if invocation pattern changed
- [ ] `docs/EXAMPLES.md` updated if output shape changed

## Scope

- [ ] No new external dependencies
- [ ] No secrets, tokens, real strategic data, or PII
- [ ] No new council added
- [ ] No new verdict modes beyond PROCEED / FIX FIRST / STOP
- [ ] No 5th seat added

## Checklist

- [ ] Branch up to date with `main`
- [ ] CI passes
- [ ] Read CONTRIBUTING.md
