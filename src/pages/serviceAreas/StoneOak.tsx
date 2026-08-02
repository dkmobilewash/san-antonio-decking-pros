import ServiceAreaPage from "./ServiceAreaPage";
import { getServiceAreaBySlug } from "../../data/serviceAreas";

const area = getServiceAreaBySlug("stone-oak")!;

export default function StoneOak() {
  return <ServiceAreaPage area={area} />;
}
