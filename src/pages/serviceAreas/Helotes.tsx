import ServiceAreaPage from "./ServiceAreaPage";
import { getServiceAreaBySlug } from "../../data/serviceAreas";

const area = getServiceAreaBySlug("helotes")!;

export default function Helotes() {
  return <ServiceAreaPage area={area} />;
}
