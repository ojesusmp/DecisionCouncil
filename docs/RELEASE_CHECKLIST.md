# Release Checklist — DecisionCouncil

## Pre-flight

- [ ] `CHANGELOG.md` has new-version entry.
- [ ] `package.json` `version` matches tag.
- [ ] `.claude-plugin/marketplace.json` `metadata.version` matches.
- [ ] LICENSE year current.
- [ ] No secrets, real strategic decisions, or PII.

## Validation

- [ ] Smoke test passes (Project M1 prompt + out-of-scope + UNKNOWN examples).
- [ ] CI passes.
- [ ] `node --check install.cjs` clean.
- [ ] `DECISIONCOUNCIL_FORCE_INSTALL=1 node install.cjs` succeeds outside repo.
- [ ] SHA-256 verification.

## Documentation

- [ ] README.md install section accurate.
- [ ] `docs/INSTALLATION.md` references current commands.
- [ ] `docs/COUNCIL_PROTOCOL.md` matches `SKILL.md`.
- [ ] `docs/EXAMPLES.md` examples still produce expected verdict shape.

## Tag + publish

1. Commit.
2. `git tag -a v<X.Y.Z> -m "release: v<X.Y.Z>"`
3. `git push origin main --tags`
4. GitHub release.
5. (Optional) `npm publish`.

## Post-release

- [ ] Smoke-test from clean install.
- [ ] Close milestone issues.

## Rollback

1. `git revert <commit>` OR previous tag.
2. Re-publish patch.
3. CHANGELOG regression entry.
