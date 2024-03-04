import nextPwa from 'next-pwa'
import withSerwistInit from "@serwist/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  // swcMinify: true, // Enable SWC minification for improved performance
  // compiler: {
  //   removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  // },
};

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
});

// Configuration object tells the next-pwa plugin
// const withPWA = nextPwa({
//   dest: "public", // Destination directory for the PWA files
//   // disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
//   register: true, // Register the PWA service worker
//   // skipWaiting: true, // Skip waiting for service worker activation
// });

export default withSerwist(nextConfig);
// export default (nextConfig);
