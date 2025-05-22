import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: "standalone",
   poweredByHeader: false,
   async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes 
        headers: [
          {
            key: 'Content-Security-Policy',  //avoid iframe embedding - clickjacking
            value: `
            object-src 'none';
            frame-ancestors 'none';
          `.replace(/\n/g, '').trim(), //ensure script protections 
          //need to update stlye-src later to nonce request - unsafe-inline is a temporary fix and should be removed later 
          //  object-src 'none'; - prevents embedding of other content(plugins)
          //  script-src 'self' - avoids script injection
          //  frame-ancestors 'none'; - prevents embedding in iframes
          //  base-uri 'self'; - prevents embedding of other content(plugins)
          //   style-src 'self' - need to remove style-src due to an effect on my code - need to fix it - allows inline styles but prevents embedding css content form others need 
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
          key: 'X-DNS-Prefetch-Control',
          value: 'on', // or 'on' to allow DNS prefetching
        },
        {
          key: 'Referrer-Policy', //prevents leaking of referrer information
          value: 'strict-origin', //not use in development - use in production
        },
        {
          key: 'X-Frame-Options',  //prevents clickjacking - embedding in iframes
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options', //prevents MIME type sniffing
          value: 'nosniff',
        },
        {
          key: 'X-XSS-Protection', //prevents XSS attacks on the browser
          value: '1; mode=block',
        },

      
        ],
      },
    ];
  },
};

export default nextConfig;
