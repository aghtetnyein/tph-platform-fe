import React from "react";
import { Outlet } from "react-router";

// components
import StudentNavbar from "./StudentNavbar";

const StudentLayout = () => {
  return (
    <div>
      <StudentNavbar />
      <Outlet />
    </div>
  );
};

export default StudentLayout;
