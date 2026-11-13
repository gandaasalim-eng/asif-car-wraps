import { ServiceView } from "@/components/services/ServiceView";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("car-wrapping");

export const metadata = pageMetadata(service.metaTitle, service.metaDescription, "/services/car-wrapping");

export default function CarWrappingPage() {
  return <ServiceView service={service} />;
}
