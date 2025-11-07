/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
       
        pathname: '/**',
        
      },
      {
        protocol: 'https',
        hostname: 'auth.w3.org/login',
       
        pathname: '/**',  
        
      },
    ],
  },
};

export default nextConfig;
