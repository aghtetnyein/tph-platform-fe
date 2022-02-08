import React from "react";
import { Outlet } from "react-router";
// components
import GuestNavbar from "./GuestNavbar";

const GuestLayout = () => {
  return (
    <div>
      <GuestNavbar />
      <Outlet />
    </div>
  );
};

export default GuestLayout;
