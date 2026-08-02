import ServiceAreaPage from "./ServiceAreaPage";
import { getServiceAreaBySlug } from "../../data/serviceAreas";

const area = getServiceAreaBySlug("schertz")!;

export default function Schertz() {
  return <ServiceAreaPage area={area} />;
}
