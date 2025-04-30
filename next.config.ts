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
            value: "frame-ancestors 'none';", //ensure script protections
          },
      
        ],
      },
    ];
  },
};

export default nextConfig;
