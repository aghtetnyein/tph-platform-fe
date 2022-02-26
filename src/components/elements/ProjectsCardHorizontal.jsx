import React from "react";

// components
import { Button } from "../forms";

const ProjectsCardHorizontal = (props) => {
  const {
    image,
    title,
    body,
    buttonLabel,
    projectsCount,
    postfixIcon,
    footerBg,
  } = props.item;

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md bg-white">
      <div className="flex space-x-4 p-5">
        <div className="w-1/3">
          <img
            className="rounded-lg w-24 h-24 object-cover bg-gray-100"
            src={image}
            alt={title}
          />
        </div>
        <div className="w-2/3">
          <h5 className="mb-2 text-xl font-bold tracking-tight">{title}</h5>

          <div>
            <p className="font-normal text-gray-500">{body}</p>
          </div>
        </div>
      </div>

      <div
        className="rounded-bl-lg rounded-br-lg p-3 flex items-center justify-between"
        style={{
          background: `linear-gradient(to right, transparent , ${footerBg})`,
        }}
      >
        <p className="font-semibold text-gray-600 text-sm">
          {projectsCount}+ created
        </p>

        <div className="w-40">
          <Button
            type={"button"}
            variant={"secondary"}
            label={buttonLabel}
            handleClick={() => console.log("hello")}
            postfixIcon={postfixIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCardHorizontal;
