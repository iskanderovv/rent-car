import { useRoutes } from "react-router-dom"
import Home from "./home/Home"

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home/>
    },
    {
      path: "dashboard",
      element: <div>Dashboard</div>
    }
  ])
}

export default RouteController