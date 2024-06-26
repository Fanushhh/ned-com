/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['thumb.rebs-site-builder.com', 'dcwebdesign.ro', 'www.familytravel.ro'],
    remotePatterns: [
      { hostname: "thumb.rebs-site-builder.com" },
      { hostname: "dcwebdesign.ro" },
      { hostname: "www.familytravel.ro" },
      { hostname: "thumb.crmrebs.com"},
      {hostname: "media.crmrebs.com"},
    ],
  },
  
};

export default nextConfig;
