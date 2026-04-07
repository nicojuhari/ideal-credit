import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/autoritatea-de-supraveghere" },
    sitemap: "https://idealcredit.md/sitemap.xml",
  };
}
