import ServiceDetailPage from "./ServiceDetailPage";
import { getServiceBySlug } from "../../data/services";

const service = getServiceBySlug("deck-repair-restoration")!;

export default function DeckRepairRestoration() {
  return <ServiceDetailPage service={service} />;
}
