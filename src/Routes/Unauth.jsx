import { Navigate, useRoutes } from "react-router-dom";

// Layouts
import GuestLayout from "../layouts/guest";

// utils pages
import PageNotFound from "../pages/PageNotFound";

// pages
import Login from "../pages/Guest/Login";
import Register from "../pages/Guest/Register";
import DancePartyDashboard from "../pages/Guest/DancePartyDashboard";

// Guest routes
const GuestRoute = () => {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      element: <GuestLayout />,
      path: "/dance-party",
      children: [
        {
          index: true,
          element: <Navigate to="/dance-party/dashboard" replace />,
        },
        { path: "dashboard", element: <DancePartyDashboard /> },
      ],
    },
    {
      path: "/404",
      element: <PageNotFound />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

export default GuestRoute;
