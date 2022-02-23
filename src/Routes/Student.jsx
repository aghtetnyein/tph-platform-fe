import { Navigate, useRoutes } from "react-router-dom";

// utils pages
import PageNotFound from "../pages/PageNotFound";

// Layouts
import StudentLayout from "../layouts/student";

// pages
import AccountSettings from "../pages/Student/AccountSettings";
import Profile from "../pages/Student/Profile";
import ChangePassword from "../pages/Student/ChangePassword";
import ChangeAccountTypeSettings from "../pages/Student/ChangeAccountTypeSettings";
import StudentLessons from "../pages/Student/StudentLessons";
import StudentProjects from "../pages/Student/StudentProjects";

const Student = () => {
  console.log("student routes");
  return useRoutes([
    {
      path: "/",
      element: <StudentLayout />,
      children: [
        { path: "", element: <Navigate to="/account-settings" replace /> },
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
        { path: "lessons", element: <StudentLessons /> },
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
