import ServiceAreaPage from "./ServiceAreaPage";
import { getServiceAreaBySlug } from "../../data/serviceAreas";

const area = getServiceAreaBySlug("converse")!;

export default function Converse() {
  return <ServiceAreaPage area={area} />;
}
