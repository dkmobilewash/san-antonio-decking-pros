import ServiceAreaPage from "./ServiceAreaPage";
import { getServiceAreaBySlug } from "../../data/serviceAreas";

const area = getServiceAreaBySlug("live-oak")!;

export default function LiveOak() {
  return <ServiceAreaPage area={area} />;
}
