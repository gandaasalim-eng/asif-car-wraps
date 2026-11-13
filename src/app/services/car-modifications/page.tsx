import { ServiceView } from "@/components/services/ServiceView";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("car-modifications");

export const metadata = pageMetadata(service.metaTitle, service.metaDescription, "/services/car-modifications");

export default function CarModificationsPage() {
  return <ServiceView service={service} />;
}
