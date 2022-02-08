import React from "react";

const PercentageProgressBar = ({ current, total, progressColor }) => {
  // functions
  const calculatePercentage = (currentValue, totalValue) => {
    const percentage = ((currentValue / totalValue) * 100).toFixed(2);
    return percentage;
  };

  return (
    <div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${calculatePercentage(current, total)}%`,
            backgroundColor: progressColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PercentageProgressBar;
