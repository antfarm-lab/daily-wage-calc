import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://daily-wage-calc.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://daily-wage-calc.vercel.app/privacy-policy",
      lastModified: new Date(),
    },
  ];
}