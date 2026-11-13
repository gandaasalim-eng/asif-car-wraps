import { ServiceView } from "@/components/services/ServiceView";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("custom-wrapping");

export const metadata = pageMetadata(service.metaTitle, service.metaDescription, "/services/custom-wrapping");

export default function CustomWrappingPage() {
  return <ServiceView service={service} />;
}
