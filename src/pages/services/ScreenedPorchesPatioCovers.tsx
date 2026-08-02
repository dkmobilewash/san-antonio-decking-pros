import ServiceDetailPage from "./ServiceDetailPage";
import { getServiceBySlug } from "../../data/services";

const service = getServiceBySlug("screened-porches-patio-covers")!;

export default function ScreenedPorchesPatioCovers() {
  return <ServiceDetailPage service={service} />;
}
