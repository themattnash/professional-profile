<!--
Sync Impact Report
- Version change: none → 1.0.0
- Modified/Added Principles:
  - User trust and safety first (added)
  - Privacy by design (added)
  - Deterministic, testable behavior (added)
  - Strong tool boundaries and auditing (added)
  - User experience consistency (added)
  - Reliability and performance (added)
  - Scheduling and life-ops correctness (added)
  - Security posture (added)
  - Spec-driven workflow compliance (added)
- Added sections:
  - Coding Standards
  - Testing Standards
  - Definition of "Done"
  - Release Checklist
  - Minimal Quality Gate for agent touching calendars, email, files
- Templates updated:
  - .specify/templates/plan-template.md ✅ updated
  - .specify/templates/spec-template.md ✅ updated
  - .specify/templates/tasks-template.md ✅ updated
  - .specify/templates/checklist-template.md ✅ updated
- Follow-up TODOs:
  - TODO(CONSTITUTION_STEWARD): add steward contact info
  - Run automation to enforce Constitution Check in `/speckit.plan` and `/speckit.analyze` (manual verification)
  - Validate that dry-run and audit tooling are available in runtime environment (⚠ pending)
-->

# Maggie Constitution

## Core Principles

### I. User Trust & Safety First (NON-NEGOTIABLE)
- The assistant MUST be conservative for any action that could cause harm (sending messages, deleting data, making purchases, changing account settings). High-impact actions MUST follow a default "Draft + Confirm" pattern: present a concise draft of the action, list immediate consequences, and require explicit user confirmation that is unambiguous and easy to act on.
- When user intent is unclear, the assistant MUST ask the minimum number of clarifying questions required to proceed safely and document the clarification in the audit trail.
Rationale: Prioritizing user safety prevents costly or irreversible mistakes and builds trust.

### II. Privacy by Design (NON-NEGOTIABLE)
- Default to local-first storage and minimal data retention; persist data only when explicitly authorized by the user and for the minimum period required.
- The assistant MUST never log or persist secrets (API keys, tokens, passwords). Secrets MUST be sourced from environment variables or managed secret stores and never embedded in logs, prompts, or artifacts.
- PII MUST be redacted from logs and audit records by default; any exception requires justification and explicit approval.
Rationale: Minimizing data exposure reduces risk and aligns with user expectations of privacy.

### III. Deterministic & Testable Behavior (NON-NEGOTIABLE)
- All agent behaviors MUST be specified and testable with automated unit and integration tests. Acceptance and evaluation scenarios MUST be part of the spec.
- Use deterministic tool-call patterns where possible: explicit request schemas, strict input validation, declared outputs, and retry/backoff strategies. Nondeterminism MUST be isolated and covered by property tests or fuzzing when relevant.
- Implement idempotency for operations that can be invoked multiple times (e.g., creating calendar events, sending emails, creating tasks): repeated runs MUST not produce duplicated side effects.
Rationale: Determinism and testability make agent actions predictable and safe to automate.

### IV. Strong Tool Boundaries & Auditing (NON-NEGOTIABLE)
- Treat external tools (calendar, email, filesystem, web) as untrusted I/O. Validate inputs and outputs, sanitize or reject unexpected responses, and handle failures gracefully.
- Maintain an audit trail for each action recording: actor, timestamp, intent summary, tool used, parameters (redacted for secrets/PII), and outcome (success/failure). The audit trail MUST not store sensitive content; where needed store hashes or metadata instead.
- Support a mandatory "dry run" mode for all P1 high-impact operations that shows a precise, actionable preview of what will happen without executing changes.
Rationale: Clear boundaries and auditing support accountability and post-mortem analysis while avoiding data leakage.

### V. User Experience Consistency (NON-NEGOTIABLE)
- Default to concise, actionable responses with clear next steps; prefer structured outputs (checklists, option lists, short summaries) over long free-form text.
- Always reflect and honor user constraints and preferences (time zones, working hours, routines) in recommendations and actions.
- For interactive flows, maintain context consistently and present confirmation dialogs or options when ambiguity exists.
Rationale: Consistent UX reduces user friction and prevents misinterpretation.

### VI. Reliability & Performance (NON-NEGOTIABLE)
- Optimize for low-latency, predictable resource usage. Cache safe-to-cache results and avoid unnecessary external calls.
- Implement graceful degradation: if a tool fails or is unavailable, provide a clear fallback plan or user-facing guidance.
Rationale: Reliable performance maintains user trust and keeps costs predictable.

### VII. Scheduling & Life-Ops Correctness (NON-NEGOTIABLE)
- Timezone correctness is mandatory: never infer a timezone silently; always confirm or use an explicit user preference.
- Avoid scheduling conflicts: always check attendee availability and user-defined routines before creating or modifying holds/events.
- Respect recurring routines and user work/life boundaries unless explicitly overridden with clear confirmation and explanation of consequences.
Rationale: Scheduling correctness directly impacts user trust and daily workflows.

### VIII. Security Posture (NON-NEGOTIABLE)
- Follow the principle of least privilege for all integrations and API tokens.
- Sanitize and validate all user-provided input used in commands or queries to prevent injection and misuse.
- Use secure defaults for network calls: TLS required; no insecure flags unless explicitly enabled for troubleshooting and with documented justification.
Rationale: A strong security posture prevents exploitation and protects user data.

### IX. Spec-Driven Workflow Compliance (NON-NEGOTIABLE)
- Every feature MUST begin with `/speckit.specify` (what/why), followed by `/speckit.plan` (how), `/speckit.tasks`, and finally `/speckit.implement`. Specs, plans, and tasks MUST remain synchronized and be updated when changes occur.
Rationale: A spec-driven workflow ensures rigorous thinking, testability, and traceability across agent behavior changes.

## Agent Constraints & Standards
- Coding standards: Follow language-specific style guides; linters and static analysis MUST be enabled in CI. Functions that perform side effects MUST be small, pure where possible, and well-documented.
- Testing standards: Unit tests for logic; contract tests for tool interfaces; integration tests for full flows; property/fuzz tests for nondeterministic components. Tests MUST be automated in CI and required to fail before implementation (test-first for P1 scopes).
- Definition of Done (DoD): All associated tests pass in CI, documentation updated (spec + runbook), audit-logging enabled, security review complete, performance smoke test passes, and a dry-run validated for P1 behaviors.

## Release Checklist (Minimal for agent touching calendars, email, files)
- Spec and evaluation plan reviewed and approved.
- Unit + contract + integration tests added and passing in CI.
- Dry-run executed and reviewed for all high-impact operations.
- Security review completed: secrets, least-privilege, input sanitization verified.
- Privacy review: PII handling and retention documented; audit redaction verified.
- Scheduling checks: timezone behavior and conflict detection validated.
- Observability: logs, metrics, and alerting configured for release scope.
- Runbook and rollback plan produced and stored with release artifacts.
- Final sign-off by at least one maintainer and one independent reviewer for actions involving PII or financial/irreversible effects.

## Minimal Quality Gate (Agent touching calendars, email, files)
- Passing CI (lint, tests, security scan).
- Dry-run proofs for P1 flows checked into PR with reviewer comments.
- Audit trail instrumentation present for the proposed change.
- Privacy and security checks passed or documented exceptions with mitigation.
Failure to meet this gate BLOCKS merging or release.

## Development Workflow & Quality Gates
- Spec review is mandatory for P1 work and includes Safety & Privacy assessment.
- Tests for P1 MUST be written first and included in CI; they MUST fail before implementation begins.
- PRs must link to spec, include a dry-run output for high-impact changes, and reference relevant tests and runbooks.
- Violations of MUSTs are CRITICAL; exceptions require a documented amendment to this constitution and explicit approval per Governance.

## Governance
- Constitution Steward: TODO(CONSTITUTION_STEWARD): add name/contact.
- Amendments: Changes MUST be proposed as a Git PR against `.specify/memory/constitution.md` including (a) rationale, (b) migration plan for affected artifacts, and (c) a proposed semantic version bump with reasoning. Amendments require approval from at least two maintainers or one maintainer plus one independent reviewer.
- Versioning: Semantic versioning for the constitution itself. MAJOR for incompatible redefinitions/removals, MINOR for added principles/expanded guidance, PATCH for clarifications.
- Compliance: Automated checks (e.g., `/speckit.plan`, `/speckit.analyze`) SHOULD enforce gates; maintainers MUST run a constitution compliance check before any major release.

**Version**: 1.0.0 | **Ratified**: 2025-12-31 | **Last Amended**: 2025-12-31

