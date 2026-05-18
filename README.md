# Reproduction: sentry-javascript#20951

Minimal reproduction attempt for [getsentry/sentry-javascript#20951](https://github.com/getsentry/sentry-javascript/issues/20951) — "Cannot deploy my NextJS app to SST with Sentry's config".

The reported error is `Dynamic require of "fs" is not supported` during the OpenNext bundling step when `withSentryConfig` is used in `next.config.ts`.

## Setup

```bash
npm install
```

## Reproduce

```bash
# Standard Next.js build — works
npm run build

# OpenNext build — works
npm run opennext
```

## Versions

- `next@16.1.6` (as reported in the issue)
- `@sentry/nextjs@10.53.1` (as reported in the issue)
- `@opennextjs/aws@3.9.5` (also tested 3.10.4 and 4.0.2)

## Result

**Could not reproduce.** All of the following succeed without error:

| Method | Result |
|--------|--------|
| `next build` | Pass |
| `open-next build` (v3.9.5, 3.10.4, 4.0.2) | Pass |
| `sst deploy` (v4.14.1) | Pass |
| With `"type": "module"` in package.json | Pass |
| With `next.config.js` instead of `.ts` | Pass |

The issue is likely specific to the reporter's project configuration.
