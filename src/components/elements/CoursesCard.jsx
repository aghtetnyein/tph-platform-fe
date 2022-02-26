import React from "react";

// icons
import { DotsVerticalIcon, KeyIcon } from "@heroicons/react/solid";

// components
import { PercentageProgressBar } from ".";
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

const CoursesCard = ({ item }) => {
  const {
    title,
    subtitle,
    sessionCode,
    totalUnits,
    finishedUnits,
    progressColor,
  } = item;

  return (
    <div className="w-full bg-white rounded-lg shadow-md bg-white">
      <div
        className="w-full p-4 rounded-t-lg flex justify-between"
        style={{ background: progressColor }}
      >
        <div>
          <h5 className="mb-1 text-lg font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="text-sm font-semibold text-white">
            Thate Pan Hub - Batch 1
          </p>
        </div>
        <div className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center group hover:bg-white">
          <DotsVerticalIcon
            className="block h-5 w-5 text-white group-hover:text-black"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex items-center justify-between p-4 space-x-4">
        <div className="w-full">
          <p className="mb-2 font-semibold text-gray-400 text-sm">
            {finishedUnits} of {totalUnits} units
          </p>
          <PercentageProgressBar
            current={finishedUnits}
            total={totalUnits}
            progressColor={progressColor}
          />
          <p className="mt-3 font-semibold text-gray-400 text-sm">{subtitle}</p>
        </div>
        <div>
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      <div className="p-4 w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <KeyIcon
            className="block h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
          <p className="font-semibold text-sm text-gray-500">
            {sessionCode}
          </p>
        </div>
        <div>
          <Button
            type={"button"}
            variant={"primary"}
            label={"Continue"}
            backgroundColor={progressColor}
            postfixIcon={moreIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
