import React from "react";

const TabsInPills = ({ items, currentTab, handleTabChange }) => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {items.map((item, index) => (
          <li
            key={index}
            className="mr-2"
            onClick={() => handleTabChange(item)}
          >
            <p
              className={`inline-block py-2 px-4 text-sm font-medium text-center text-white ${
                item === currentTab ? "bg-icon_bg" : null
              } rounded-full cursor-pointer`}
            >
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsInPills;
