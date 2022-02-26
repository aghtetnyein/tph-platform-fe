import React from "react";
// components
import { Button } from "../forms";

// icons
import { SaveIcon, ViewGridIcon, EyeIcon } from "@heroicons/react/outline";
// import { BookmarkIcon } from "@heroicons/react/solid";

const CardVertical = ({
  image,
  avatar,
  title,
  body,
  units,
  buttonLabel,
  postfixIcon,
  projectTitle,
  date,
  url,
  handleOnClick,
  myProjects,
}) => {
  return (
    <>
      {!avatar ? (
        <div
          className={`${
            units && "relative"
          } w-full bg-white rounded-xl shadow-lg -z-10`}
        >
          <img
            className="rounded-t-lg w-full h-56 object-cover bg-gray-100"
            src={image}
            alt={title}
          />
          {units && (
            <div
              className="absolute top-2 right-2 px-3 py-2 rounded-lg"
              style={{ background: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="flex gap-1">
                <ViewGridIcon
                  className="block h-5 w-5 text-white"
                  aria-hidden="true"
                />
                <p className="text-white font-semibold text-sm">
                  {units} units
                </p>
              </div>
            </div>
          )}

          <div className="p-6 ">
            <div>
              <h5 className="mb-2 text-xl font-bold tracking-tight">{title}</h5>
              <p className="font-normal text-gray-500">{body}</p>
              <div className="mt-8 w-36">
                <Button
                  type={"button"}
                  variant={"border"}
                  label={buttonLabel}
                  postfixIcon={postfixIcon}
                  handleClick={handleOnClick}
                />
              </div>
            </div>
          </div>
        </div>
      ) : !myProjects ? (
        <div className="w-full bg-white rounded-xl shadow-md -z-10">
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 right-0 p-2">
              <div
                className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center"
                style={{ background: "rgba(0,0,0, 0.6)" }}
              >
                <SaveIcon
                  className="block h-5 w-5 text-tph_gold"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div
              className="absolute w-full p-3 bottom-0 inset-x-0"
              style={{ background: "rgba(0,0,0, 0.5)" }}
            >
              <h5 className="text-md font-semibold tracking-tight text-white">
                {projectTitle}
              </h5>
              <p className="text-sm mt-0.5 font-medium text-gray-100">{date}</p>
            </div>
          </div>

          <div className="p-4 flex items-center space-x-4">
            <div>
              <img
                className="rounded-full w-14 h-14 object-cover bg-gray-100"
                src={avatar}
                alt={title}
              />
            </div>
            <div>
              <h5 className="text-md font-bold tracking-tight">{title}</h5>
              <p className="text-md font-normal text-gray-500">{body}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-white rounded-xl shadow-md -z-10">
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 right-0 p-2">
              <div
                className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center"
                style={{ background: "rgba(0,0,0, 0.6)" }}
              >
                <SaveIcon
                  className="block h-5 w-5 text-tph_gold"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="p-4 flex items-start justify-between">
            <div>
              <h5 className="text-md font-semibold tracking-tight">
                {projectTitle}
              </h5>
              <p className="text-sm mt-0.5 font-medium text-gray-700">{date}</p>
            </div>
            <div className="flex items-center gap-1">
              <EyeIcon className="w-5h h-5 text-gray-700" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-700">120</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardVertical;
