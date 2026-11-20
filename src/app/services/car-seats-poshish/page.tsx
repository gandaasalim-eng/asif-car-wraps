
import { ServiceView } from "@/components/services/ServiceView";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("car-seats-poshish");

export const metadata = pageMetadata(
  service.metaTitle,
  service.metaDescription,
  "/services/car-seats-poshish"
);

export default function CarSeatsPoshishPage() {
  return <ServiceView service={service} />;
}
