import React from "react";

const CardWithIcon = (props) => {
  const { icon, iconBg, title, subtitle, postfixIcon } = props.item;

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md hover:cursor-pointer">
      <div
        className={`w-10 h-10 ${iconBg} flex items-center justify-center rounded-full`}
      >
        <img className="w-5 h-5" src={icon} alt={title}></img>
      </div>
      <div className="flex items-center justify-between space-x-4">
        <div>
          <h5 className="mt-5 mb-1 text-md font-semibold tracking-tight">
            {title}
          </h5>
          <p className="text-sm font-semibold text-gray-400">{subtitle}</p>
        </div>
        {postfixIcon}
      </div>
    </div>
  );
};

export default CardWithIcon;
