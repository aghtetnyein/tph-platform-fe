import React from "react";
import { Outlet } from "react-router";

// components
import DashboardSidebar from "./DashboardSidebar";
import { DashboardTitleDivision } from "../../../components/Student/Dashboard";

const StudentDashboardLayout = () => {
  return (
    <div className="flex">
      <div className="fixed top-18 h-screen z-10">
        <DashboardSidebar />
      </div>
      <div className="w-full h-full ml-20 md:ml-48 lg:ml-64">
        <DashboardTitleDivision />
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboardLayout;
