# Security policy — DecisionCouncil

## What lives in this repository

A Claude Code skill specification (`SKILL.md`) and supporting documentation. No application backend. No database. No secrets at rest.

## What MUST NOT live in this repository

- API keys, tokens, or credentials.
- Real customer / prospect / partner data.
- Personal or private business records.
- Strategic decisions of third parties that are not public.

Examples in `docs/EXAMPLES.md` MUST be generic. Anonymize if a real scenario is referenced.

## Supported versions

| Version | Supported |
|---------|-----------|
| `1.0.0` and newer | Yes |
| Older | No |

## Reporting a vulnerability

Report privately:

1. NO public GitHub issue.
2. GitHub's private vulnerability reporting (Security tab).
3. Email: ojesusmp@gmail.com.

### Include

- Description and impact.
- Reproduction steps.
- Affected version(s).
- Mitigations.

### Expect

- Acknowledgment within 7 days.
- Initial assessment within 14 days.
- Patch with CHANGELOG credit (if desired).

## Council-use security boundary

This council MUST NOT be used to:

- Rubber-stamp a decision the operator has already executed (DecisionCouncil is pre-decision; post-hoc validation belongs in a post-mortem).
- Manufacture fixes the operator does not intend to run.
- Approve decisions outside the operator's declared scope.
- Approve hard-excluded items (e.g. "no AI yet" → council MUST NOT recommend AI).

The reversibility / irreversibility brakes and the hard-exclusion honor rule are load-bearing. PRs touching these must preserve them.

## Past advisories

None.
