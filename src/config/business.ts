const explicitSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const previewHost = process.env.VERCEL_URL;

function resolveSiteUrl() {
  if (explicitSiteUrl) return explicitSiteUrl;
  if (productionHost) return `https://${productionHost}`;
  if (previewHost) return `https://${previewHost}`;
  return "http://localhost:3000";
}

export const business = {
  name: "Asif Car Wraps",
  tagline: "Premium Automotive Styling",
  phone: "+923215221369",
  displayPhone: "0321-5221369",
  internationalPhone: "+92 321 5221369",
  whatsapp: "923215221369",
  whatsappUrl: "https://wa.me/923215221369",
  email: null as string | null,
  address: null as string | null,
  hours: null as string | null,
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    tiktok: null as string | null,
    youtube: null as string | null,
  },
  services: [
    "Car Wrapping",
    "Paint Protection Film",
    "Custom Wrapping",
    "Car Modifications",
  ],
  siteUrl: resolveSiteUrl(),
  copyrightYear: new Date().getFullYear(),
} as const;

export const inquiryServices = [
  ...business.services,
  "Not sure yet",
] as const;
