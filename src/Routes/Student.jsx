import { Navigate, useRoutes } from "react-router-dom";

// utils pages
import PageNotFound from "../pages/PageNotFound";

// Layouts
import StudentLayout from "../layouts/student";
import StudentDashboardLayout from "../layouts/student/StudentDashboard";

// pages
import {
  AccountSettings,
  ChangeAccountTypeSettings,
  ChangePassword,
  Profile,
  StudentHomePage,
  StudentLessons,
  StudentProjects,
} from "../pages/Student";

import {
  Projects,
  EnrolledCourses,
  Classes,
  Certificates,
} from "../components/Student/Dashboard";

const Student = () => {
  console.log("student routes");
  return useRoutes([
    {
      path: "/",
      element: <StudentLayout />,
      children: [
        { path: "", element: <StudentHomePage /> },
        {
          path: "account-settings",
          children: [
            { path: "", element: <AccountSettings /> },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "change-password",
              element: <ChangePassword />,
            },
            {
              path: "change-account-type",
              element: <ChangeAccountTypeSettings />,
            },
          ],
        },
        {
          path: "dashboard",
          element: <StudentDashboardLayout />,
          children: [
            { path: "", element: <Navigate to="projects" replace /> },
            { path: "projects", element: <Projects /> },
            { path: "courses", element: <EnrolledCourses /> },
            { path: "classes", element: <Classes /> },
            { path: "certificates", element: <Certificates /> },
          ],
        },
        { path: "lessons", element: <StudentLessons /> },
        { path: "projects", element: <StudentProjects /> },
        { path: "projects", element: <StudentProjects /> },
      ],
    },
    {
      path: "/404",
      element: <PageNotFound />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

export default Student;
