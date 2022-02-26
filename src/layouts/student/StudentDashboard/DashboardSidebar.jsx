import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router";

import {
  CalendarIcon,
  CodeIcon,
  InboxIcon,
  AcademicCapIcon,
  LogoutIcon,
} from "@heroicons/react/solid";

const navigation = [
  {
    id: "projects",
    name: "Projects",
    icon: CodeIcon,
    href: "/dashboard/projects",
  },
  {
    id: "courses",
    name: "Courses",
    icon: CalendarIcon,
    href: "/dashboard/courses",
  },
  {
    id: "classes",
    name: "Classes",
    icon: InboxIcon,
    href: "/dashboard/classes",
  },
  {
    id: "certificates",
    name: "Certificates",
    icon: AcademicCapIcon,
    href: "/dashboard/certificates",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DashboardSidebar = () => {
  // instances
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className="w-20 md:w-48 lg:w-64 h-full bg-tph_purple">
      <div className="flex-shrink-0 flex bg-tph_purple p-4 hidden md:block">
        <RouterLink
          to={"/profile"}
          className="flex-shrink-0 w-full group block"
        >
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="md:ml-3">
              <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                Welcome back
              </p>
              <p className="text-md font-medium text-white">Tom Cook</p>
            </div>
          </div>
        </RouterLink>
      </div>
      <div className="overflow-y-auto bg-tph_purple">
        <nav className="bg-tph_purple px-3" aria-label="Sidebar">
          <div className="py-3 space-y-1">
            {navigation.map((item) => (
              <RouterLink
                key={item.name}
                to={item.href}
                className={classNames(
                  location.pathname === `/dashboard/${item.id}`
                    ? "bg-icon_bg text-white"
                    : "text-gray-300 hover:bg-icon_bg hover:text-white",
                  "group flex items-center justify-center md:justify-start px-2 py-3 text-sm font-medium rounded-md"
                )}
              >
                <item.icon
                  className={classNames(
                    location.pathname === `/dashboard/${item.id}`
                      ? "text-gray-300"
                      : "text-gray-400 group-hover:text-gray-300",
                    "md:mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span className="hidden md:block">{item.name}</span>
              </RouterLink>
            ))}
          </div>

          <div className="border-t border-gray-400 py-3 ">
            <div className="justify-center md:justify-start text-gray-300 hover:bg-icon_bg hover:text-white group flex items-center px-2 py-3 text-sm font-medium rounded-md cursor-pointer">
              <LogoutIcon
                className="text-gray-400 group-hover:text-gray-300 md:mr-3 flex-shrink-0 h-6 w-6"
                aria-hidden="true"
              />
              <span className="hidden md:block">Logout</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
