import { AboutPage, HomePage } from "src/pages/index.js";
import { aboutPath, homePath, researchPath } from "src/consts/routePaths.js";

export const routeItems = [
  {
    element: <HomePage />,
    path: homePath(),
  },
  {
    element: <HomePage />,
    path: researchPath(),
  },
  {
    element: <AboutPage />,
    path: aboutPath(),
  },
];
