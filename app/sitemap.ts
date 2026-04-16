import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/pricing`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}
