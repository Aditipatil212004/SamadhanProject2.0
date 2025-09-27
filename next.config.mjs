/** @type {import('next').NextConfig} */
import path from 'node:path';

const nextConfig = {
  output: 'standalone',
  // Point output file tracing root to this project to avoid multi-lockfile inference
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
