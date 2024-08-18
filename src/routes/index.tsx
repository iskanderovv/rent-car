import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import SingleCar from "./single-car/SingleCar";

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "dashboard",
      element: <div>Dashboard</div>,
    },
    {
      path: "single-car/:id",
      element: <SingleCar />,
    },
  ]);
};

export default RouteController;
