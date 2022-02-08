import { Navigate, useRoutes } from "react-router-dom";

// utils pages
import PageNotFound from "../pages/PageNotFound";

// Layouts
import TeacherLayout from "../layouts/teacher";

// Teacher routes

const Teacher = () => {
  return useRoutes([
    {
      path: "/",
      element: <TeacherLayout />,
      // children: [{ path: "", element: <InitialPage /> }],
    },
    {
      path: "/404",
      element: <PageNotFound />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

export default Teacher;
