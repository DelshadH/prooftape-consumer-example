# ProofTape consumer example

This independent repository shows a real `camelcase` upgrade where ordinary
tests stay green while the supported observed return changes:

- base `camelcase@6.3.0`: `camelCase("-")` returns `"-"`;
- candidate `camelcase@7.0.1`: the same call returns `""`.

```bash
npm ci --ignore-scripts
npm test
npm start
```

The repository consumes the four exact ProofTape `0.1.0-alpha.1` tarballs from
`vendor/` because they are intentionally not published during release review.
`vendor/SHA256SUMS` is copied from ProofTape's bounded release evidence. This is
a temporary tarball-only evaluation path, not the final npm onboarding flow.

## Trust boundary

Observation authenticity is not established against code under test. The
ProofTape check provides regression evidence for captured supported calls; it is
not an attestation against a malicious candidate that suppresses or forges its
own observations.

The pull-request workflow pins the reusable ProofTape workflow to full commit
`7e2b4cf7aa0da8a7180ccf7a4b4f93a8ac0e157e`, runs ordinary tests at both exact
PR commits, and grants only `contents: read`.

## Dependency automation

Dependabot is configured for weekly npm pull requests. An equivalent Renovate
rule for the demonstrated dependency is:

```json
{
  "packageRules": [
    {
      "matchManagers": ["npm"],
      "matchPackageNames": ["camelcase"],
      "rangeStrategy": "pin"
    }
  ]
}
```

Keep the ProofTape workflow required for dependency-upgrade pull requests, but
interpret it only within the documented observation surface and authenticity
boundary.
