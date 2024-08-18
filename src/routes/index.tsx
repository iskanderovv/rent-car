import { useRoutes } from "react-router-dom";
import { lazy } from "react";


import Suspense from "../utils";

const Home = lazy(() => import("./home/Home"));
const SingleCar = lazy(() => import("./single-car/SingleCar"));


const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Suspense><Home /></Suspense>,
    },
    {
      path: "dashboard",
      element: <div>Dashboard</div>,
    },
    {
      path: "single-car/:id",
      element: <Suspense><SingleCar /></Suspense>,
    },
  ]);
};

export default RouteController;
