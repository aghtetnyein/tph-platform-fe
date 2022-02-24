import { Navigate, useRoutes } from "react-router-dom";

// Layouts
import GuestLayout from "../layouts/guest";

// utils pages
import PageNotFound from "../pages/PageNotFound";

// pages
import Login from "../pages/Guest/Login";
import Register from "../pages/Guest/Register";
import DancePartyDashboard from "../pages/Guest/DancePartyDashboard";
import DancePartyCharacterGallery from "../pages/Guest/DancePartyCharacterGallery";
import Dance from "../pages/DanceParty/DancePartyWorkspace";

// test
// import BlocklyTest from "../pages/Test/BlocklyTest";
// import DanceTest from "../pages/Test/Dance";

// Guest routes
const GuestRoute = () => {
  console.log("guest routes");

  return useRoutes([
    { path: "", element: <Navigate to="/login" replace /> },
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
        { path: "workspace", element: <Dance /> },
        { path: "character-gallery/:character", element: <DancePartyCharacterGallery />}

      ],
    },
    {
      path: "/404",
      element: <PageNotFound />,
    },
    { path: "*", element: <Navigate to="/login" replace /> },
  ]);
};

export default GuestRoute;
