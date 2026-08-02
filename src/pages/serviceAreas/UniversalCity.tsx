import ServiceAreaPage from "./ServiceAreaPage";
import { getServiceAreaBySlug } from "../../data/serviceAreas";

const area = getServiceAreaBySlug("universal-city")!;

export default function UniversalCity() {
  return <ServiceAreaPage area={area} />;
}
