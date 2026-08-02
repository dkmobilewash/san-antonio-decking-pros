import ServiceDetailPage from "./ServiceDetailPage";
import { getServiceBySlug } from "../../data/services";

const service = getServiceBySlug("composite-decking")!;

export default function CompositeDecking() {
  return <ServiceDetailPage service={service} />;
}
