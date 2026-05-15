# Examples — DecisionCouncil

## Example 1: HostingPR M1 (canonical smoke test)

**Prompt:**

```
Evaluate whether Orlando should proceed to build HostingPR M1 now.
Scope: static homepage, lead form, Telegram notification endpoint, privacy page,
terms page, mobile-friendly layout, bilingual-ready copy structure, env vars
for Telegram bot token and chat ID, no AI yet.
OperationsCouncil verdict: FIX FIRST. Missing: runbooks, .env.example, restore docs,
vendor list, direct-contact fallback.
```

**Council output:**

```
1. Decision substrate
   Proceed to build HostingPR M1 (homepage + lead form + Telegram notify) given
   OperationsCouncil returned FIX FIRST on operational documents.

2. Options considered
   - PROCEED — build M1 and create the missing operational documents in the same cycle.
   - FIX FIRST — stop, complete the docs as a prior cycle, then build M1.
   - STOP — abandon M1 entirely.

3. Constraints
   - Solo operator, evenings, low cash.
   - Time-to-launch is the binding constraint.
   - Hosting + Telegram bot are the only infra dependencies.

4. Explicitly out of scope
   - Checkout, CRM, AI, database, multi-agent, SEO automation,
     newsletter funnel, Google Maps prospecting, analytics, new council.

5. Risk and reversibility
   - Downside: a lead is missed because Telegram secret is wrong or runbook absent.
   - Reversibility: high — static site + single endpoint redeploys cheaply.
   - Blast radius: small — no payments, no PII storage beyond a forwarded lead.

6. Delay cost
   - One more evening of delay = one more evening without any lead capture
     and continued momentum loss.

7. Operator burden
   - M1 fits in solo capacity. Adding runbooks + .env.example + vendor list
     + restore docs + direct-contact fallback is < 1 hour of writing
     and goes into the same repo as the build.

8. Minimum required fix list  (carried in from OperationsCouncil)
   - runbooks/  one runbook for deploy, one for incident.
   - .env.example  TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID placeholders.
   - docs/restore.md  steps to redeploy from git.
   - docs/vendors.md  hosting, domain, Telegram bot owner.
   - direct-contact fallback  mailto: link visible if the Telegram endpoint fails.

9. Smallest next action
   Create the five operational files above as the first commit on the
   HostingPR repo, then scaffold the static homepage in the same session.

10. Verdict: PROCEED
    Why: M1 is reversible, scope-locked, and the Operations gap list is
    completable inside the same build cycle before launch.
```

## Example 2: Out-of-scope creep

**Prompt:**

```
Should I add a phone-AI receptionist to HostingPR M1 to qualify leads automatically?
```

**Council output (compressed):**

```
1. Decision substrate
   Add phone-AI receptionist to HostingPR M1.

2. Options considered
   - STOP — out of declared M1 scope and a hard exclusion ("no phone AI", "no AI yet").
   - FIX FIRST — redefine M1.
   - PROCEED — forbidden under hard exclusion.

3. Constraints
   M1 hard exclusion list explicitly bans phone AI.

4. Explicitly out of scope
   Phone AI, email AI, AI of any kind in M1.

5. Risk and reversibility
   Adding it is reversible but violates the operator's own scope contract.

6. Delay cost
   Zero — adding it now delays M1 launch and burns capital on infra.

7. Operator burden
   High. Phone-AI requires vendor account, voice number, training data, runbook.

8. Minimum required fix list
   None. The decision itself is out of bounds.

9. Smallest next action
   Drop the feature. Ship M1 as scoped. Reconsider AI features post-launch.

10. Verdict: STOP
    Why: violates declared hard exclusion ("no AI yet"); scope creep, not a decision.
```

## Example 3: Critical UNKNOWN

**Prompt:**

```
Should I switch HostingPR's lead notification from Telegram to SMS?
Facts: SMS vendor unknown, cost per message unknown, deliverability unknown.
```

**Council output (compressed):**

```
1. Decision substrate
   Replace Telegram lead notification with SMS in HostingPR M1.

2. Options considered
   - PROCEED — pick a vendor, configure, replace endpoint.
   - FIX FIRST — pick vendor + price + deliverability before switching.
   - STOP — keep Telegram, defer SMS.

3. Constraints
   M1 already has working Telegram path. Budget low. Time-to-launch binding.

4. Explicitly out of scope
   CRM, database, AI.

5. Risk and reversibility
   Reversible (revert to Telegram), but UNKNOWN vendor = UNKNOWN cost ceiling.

6. Delay cost
   Switching now blocks M1. Keeping Telegram costs zero.

7. Operator burden
   Vendor evaluation + API integration + deliverability test = multi-evening.

8. Minimum required fix list
   - Pick SMS vendor.
   - Confirm cost per message.
   - Confirm US deliverability and rate limits.

9. Smallest next action
   Keep Telegram for M1 launch. After launch, run a 1-evening vendor pick + price test.

10. Verdict: FIX FIRST
    Why: three critical facts UNKNOWN; switching infra mid-cycle violates time-to-launch constraint.
```
