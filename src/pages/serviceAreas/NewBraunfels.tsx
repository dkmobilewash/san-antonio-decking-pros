import ServiceAreaPage from "./ServiceAreaPage";
import { getServiceAreaBySlug } from "../../data/serviceAreas";

const area = getServiceAreaBySlug("new-braunfels")!;

export default function NewBraunfels() {
  return <ServiceAreaPage area={area} />;
}
