/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "beaming-echidna-513.convex.cloud",
			},
		],
	},
};

export default nextConfig;
