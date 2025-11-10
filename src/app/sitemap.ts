import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://renatodev.com",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					pt: "https://renatodev.com/pt",
					en: "https://renatodev.com/en",
				},
			},
		},
	];
}
