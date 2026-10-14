/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  trailingSlash: true, // canonical URLs all end with /

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },

  // ⚠️ DO NOT add redirects() / rewrites() / headers() here.
  //
  // Next.js silently ignores all three when `output: 'export'` is set —
  // there is no server to run them. The previous redirects() block in this
  // file never executed once, which is why /index.html stayed live as a
  // 200 duplicate of the homepage and the legacy .html URLs never resolved.
  //
  // All redirects now live in public/.htaccess, which Apache actually reads.
  // Static export copies public/ into out/, so it ships to the site root.
};

module.exports = nextConfig;
