import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://it.stallionadvertising.ma/",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
