# Changelog

All notable changes to `DecisionCouncil` are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-05-15

### Added

- Initial release of the DecisionCouncil skill.
- Four-role bounded decision protocol: Framer, Risk Judge, Operator Advocate, Foreman.
- Verdict set: PROCEED, FIX FIRST, STOP.
- Ten-section output shape: Decision substrate, Options considered, Constraints, Explicitly out of scope, Risk and reversibility, Delay cost, Operator burden, Minimum required fix list, Smallest next action, Verdict.
- Output budget under 1,200 tokens.
- Baked-in rules: no hedging, no strategic expansion, no ideation, reversibility bias, irreversibility brake, critical-UNKNOWN defaults to FIX FIRST.
- Companion contract with OperationsCouncil (DecisionCouncil consumes Operations verdict).
- Three install paths: Claude Code plugin marketplace, git clone, npm.

[1.0.0]: https://github.com/ojesusmp/DecisionCouncil/releases/tag/v1.0.0
