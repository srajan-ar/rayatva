import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rayatva.in/sitemap.xml",
    host: "https://rayatva.in",
  };
}
