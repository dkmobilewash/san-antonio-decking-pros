import ServiceAreaPage from "./ServiceAreaPage";
import { getServiceAreaBySlug } from "../../data/serviceAreas";

const area = getServiceAreaBySlug("alamo-heights")!;

export default function AlamoHeights() {
  return <ServiceAreaPage area={area} />;
}
