import { business } from "@/config/business";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: business.name,
    telephone: business.phone,
    url: business.siteUrl,
    image: `${business.siteUrl}/images/hero/slide-1.jpg`,
    description:
      "Premium car wrapping, paint protection film, custom wraps, and automotive styling consultations.",
    makesOffer: business.services.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
