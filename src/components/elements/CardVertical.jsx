import React from "react";

// components
import { Button } from "../forms";

// icons
import { BookmarkIcon as BookmarkIconBefore } from "@heroicons/react/outline";
// import { BookmarkIcon } from "@heroicons/react/solid";

const CardVertical = ({
  image,
  avatar,
  title,
  body,
  buttonLabel,
  postfixIcon,
  projectTitle,
  date,
}) => {
  return (
    <>
      {!avatar ? (
        <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md">
          <img
            className="rounded-t-lg w-full h-56 object-cover bg-gray-100"
            src={image}
            alt={title}
          />

          <div className="p-6 ">
            <div>
              <h5 className="mb-2 text-xl font-bold tracking-tight">{title}</h5>
              <p className="font-normal text-gray-500">{body}</p>
              <div className="mt-8 w-36">
                <Button
                  type={"button"}
                  variant={"primary"}
                  label={buttonLabel}
                  handleClick={() => console.log("hello")}
                  postfixIcon={postfixIcon}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md">
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
                <BookmarkIconBefore
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

          <div className="p-4 lg:flex">
            <div className="w-1/3">
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
      )}
    </>
  );
};

export default CardVertical;
