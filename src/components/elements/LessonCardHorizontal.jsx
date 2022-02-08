import React from "react";

// icons
import { ViewGridIcon, CubeIcon } from "@heroicons/react/solid";

// components
import { PercentageProgressBar } from ".";

const LessonCardHorizontal = (props) => {
  const {
    image,
    title,
    // subtitle,
    recommendedAge,
    unitsCount,
    lessonsCount,
    enrolledCount,
    currentProgress,
    progressColor,
    total,
  } = props.item;

  return (
    <div className="w-full flex bg-white rounded-lg border border-gray-200 shadow-md bg-white">
      <div className="w-1/5">
        <img
          className="rounded-tl-lg rounded-bl-lg h-full w-full object-cover bg-gray-100"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-4/5 p-4">
        <h5 className="mb-1 text-xl font-semibold tracking-tight">{title}</h5>
        <p className="mb-6 font-semibold text-tph_orange">
          Recommended age : {recommendedAge}
        </p>
        <p className="mb-8 font-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla
          odio, eos ipsa quod adipisci dicta qui iusto non aliquid.
        </p>

        {unitsCount ? (
          <div className="md:flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1 items-center">
                <ViewGridIcon className="w-5 h-5 text-gray-500" />
                <p className="font-semibold text-gray-500 text-sm">
                  {unitsCount} units
                </p>
              </div>

              <div className="flex space-x-1 items-center">
                <CubeIcon className="w-5 h-5 text-gray-500" />
                <p className="font-semibold text-gray-500 text-sm">
                  {lessonsCount} lessons
                </p>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <p className="font-semibold text-tph_orange text-sm">
                {enrolledCount}+ enrolled
              </p>
            </div>
          </div>
        ) : currentProgress ? (
          <div>
            <PercentageProgressBar
              current={currentProgress}
              total={total}
              progressColor={progressColor}
            />

            <div className="mt-3 flex items-center justify-between">
              <p className="font-semibold text-gray-400 text-sm">
                {currentProgress} of {total} units
              </p>
              <p className="font-semibold text-tph_orange text-sm">
                {enrolledCount}+ enrolled
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LessonCardHorizontal;
