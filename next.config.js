const nextVersion = require('next/package.json').version;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // resolved at build time so the footer never quotes a stale version
  env: { NEXT_PUBLIC_NEXT_VERSION: nextVersion },

  // used to be four separate routes, now it's one page. send the old urls to
  // the right section instead of a 404.
  async redirects() {
    return [
      { source: '/intro', destination: '/#top', permanent: true },
      { source: '/experience', destination: '/#work', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
    ];
  },
};
