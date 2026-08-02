import ServiceDetailPage from "./ServiceDetailPage";
import { getServiceBySlug } from "../../data/services";

const service = getServiceBySlug("pool-deck-construction")!;

export default function PoolDeckConstruction() {
  return <ServiceDetailPage service={service} />;
}
