import React from "react";

const StageCircles = ({ item }) => {
  return (
    <div className="w-8 h-8 bg-white font-semibold text-sm rounded-full flex items-center justify-center cursor-pointer">
      {item + 1}
    </div>
  );
};

export default StageCircles;
