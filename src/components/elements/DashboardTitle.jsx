import React from "react";

const DashboardTitle = ({ title, subtitle }) => {
  return (
    <div>
      <div className="flex items-center space-x-5">
        <div className="bg-tph_gold w-1 h-16"></div>
        <div>
          <h2 className="text-lg lg:text-2xl font-bold">{title}</h2>
          <p className="mt-1.5 font-semibold text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardTitle;
