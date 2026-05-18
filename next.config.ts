import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {};

export default withSentryConfig(nextConfig, {
  org: 'test-org',
  project: 'test-project',
  silent: true,
  tunnelRoute: '/sentry-tunnel',
});
