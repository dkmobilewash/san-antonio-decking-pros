import ServiceDetailPage from "./ServiceDetailPage";
import { getServiceBySlug } from "../../data/services";

const service = getServiceBySlug("deck-design-installation")!;

export default function DeckDesignInstallation() {
  return <ServiceDetailPage service={service} />;
}
