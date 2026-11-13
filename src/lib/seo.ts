import type { Metadata } from "next";
import { business } from "@/config/business";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, business.siteUrl).toString();
  const fullTitle = `${title} | ${business.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: business.name,
      type: "website",
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
