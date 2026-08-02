import ServiceAreaPage from "./ServiceAreaPage";
import { getServiceAreaBySlug } from "../../data/serviceAreas";

const area = getServiceAreaBySlug("boerne")!;

export default function Boerne() {
  return <ServiceAreaPage area={area} />;
}
