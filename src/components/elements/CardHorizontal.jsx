import React from "react";
// components
import { Button } from "../forms";

const CardHorizontal = ({
  image,
  title,
  subtitle,
  buttonLabel,
  postfixIcon,
}) => {
  return (
    <div className="w-full flex bg-white rounded-lg border border-gray-200 shadow-md bg-white p-6">
      <div className="w-1/3">
        <img
          className="rounded-full w-28 h-28 object-cover bg-gray-100"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-2/3">
        <h5 className="mb-2 text-xl font-bold tracking-tight">{title}</h5>

        <div>
          <p className="mb-8 font-normal text-gray-500">{subtitle}</p>
        </div>

        <div className="w-36">
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
  );
};

export default CardHorizontal;
