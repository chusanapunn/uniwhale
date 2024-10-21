/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'drive.google.com'
        }],
    },
//     experimental:{ 
    //      appDir: true,
    //      fontLoaders: [
    //       { 
        //      loader: "@next/font/google", 
        //      options: { 
        //          subsets: ["latin"] } },
//     ],
//   },
};

export default nextConfig;
