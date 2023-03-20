import { createHashRouter } from "react-router-dom";
import { PlanetPage } from "@src/pages"
const router = createHashRouter([
  {
    path: "/",
    element: <PlanetPage />
  }
]);

export { router };