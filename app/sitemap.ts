import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://rose-mae-portfolio.vercel.app", changeFrequency: "monthly" }];
}
