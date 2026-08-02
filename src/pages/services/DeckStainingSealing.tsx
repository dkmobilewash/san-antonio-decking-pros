import ServiceDetailPage from "./ServiceDetailPage";
import { getServiceBySlug } from "../../data/services";

const service = getServiceBySlug("deck-staining-sealing")!;

export default function DeckStainingSealing() {
  return <ServiceDetailPage service={service} />;
}
