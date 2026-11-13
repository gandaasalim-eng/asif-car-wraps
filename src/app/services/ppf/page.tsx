import { ServiceView } from "@/components/services/ServiceView";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("ppf");

export const metadata = pageMetadata(service.metaTitle, service.metaDescription, "/services/ppf");

export default function PpfPage() {
  return <ServiceView service={service} />;
}
