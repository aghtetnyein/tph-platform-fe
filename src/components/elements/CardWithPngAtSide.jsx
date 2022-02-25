import React from "react";

// components
import { Button } from "../forms";

// constants
const moreIcon = (
  <span>
    <svg
      className="ml-2 -mr-1 w-4 h-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
);

const CardWithPngAtSide = ({ item }) => {
  return (
    <div
      className="w-full flex bg-white rounded-lg border border-gray-200 shadow-md bg-white"
      style={{
        background: "linear-gradient(140deg, #57475B, #927699)",
        // background: item.background,
      }}
    >
      <div className="p-6">
        <div className="flex items-center content-between space-x-4">
          <div>
            <img className="w-14 h-14" src={item.image} alt={item.title} />
            <h5 className="mt-4 mb-2 text-xl font-semibold tracking-tight text-white">
              {item.title}
            </h5>
            <p className="mb-8 font-sm font-normal text-gray-200">
              {item.body}
            </p>
          </div>
          <div>
            <img
              className="w-72 h-auto"
              src={item.illustration}
              alt={item.title}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-1 items-center">
            {item.courses && (
              <p className="font-semibold text-white text-sm">
                {item.courses}+ courses
              </p>
            )}
            {item.projects && (
              <p className="font-semibold text-white text-sm">
                {item.projects}+ projects
              </p>
            )}
          </div>
          <div className="mt-2 md:mt-0">
            <Button
              type={"button"}
              variant={"primary"}
              label={item.buttonLabel}
              postfixIcon={moreIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithPngAtSide;
