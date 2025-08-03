import { Route, Routes } from "react-router";
import { routeItems } from "src/consts/index.js";

export const AppRoutes = () => {
  return (
    <Routes>
      {routeItems.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};
