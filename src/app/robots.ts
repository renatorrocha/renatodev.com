import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/private/"],
			},
		],
		sitemap: "https://renatodev.com/sitemap.xml",
		host: "https://renatodev.com",
	};
}
