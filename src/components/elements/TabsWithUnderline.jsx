import React from "react";

const TabsWithUnderline = ({ tabsOptions, currentTab, changeTab }) => {
  return (
    <div className="border-b border-gray-200">
      {/* <div> */}
      <ul className="flex flex-wrap">
        {tabsOptions.map((item, index) => (
          <li key={index} className="mr-2">
            <div
              className={`cursor-pointer inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent ${
                currentTab === item
                  ? "text-tph_purple font-semibold border-tph_purple hover:text-tph_purple hover:border-tph_purple"
                  : "text-gray-400"
              }`}
              onClick={() => changeTab(item)}
            >
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsWithUnderline;
