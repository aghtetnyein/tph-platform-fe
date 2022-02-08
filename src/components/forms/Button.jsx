import React from "react";

const Button = ({
  type,
  variant,
  label,
  handleClick,
  postfixIcon,
  textColor,
}) => {
  return (
    <div>
      {variant === "primary" ? (
        <button
          type={type}
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-tph_purple hover:bg-tph_purple_hover focus:outline-none"
        >
          {label}
          {postfixIcon}
        </button>
      ) : variant === "secondary" ? (
        <button
          type={type}
          onClick={handleClick}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full text-sm font-semibold text-gray-500 bg-white hover:bg-gray-100"
        >
          {label}
          {postfixIcon}
        </button>
      ) : variant === "text" ? (
        <button
          type={type}
          onClick={handleClick}
          className={`w-full inline-flex justify-center text-sm font-semibold ${textColor}`}
        >
          {label}
          {postfixIcon}
        </button>
      ) : variant === "alert" ? (
        <button
          type={type}
          onClick={handleClick}
          className={`w-full inline-flex justify-center py-2 px-4 rounded-full text-sm font-semibold text-white bg-red hover:bg-red_hover`}
        >
          {label}
          {postfixIcon}
        </button>
      ) : null}
    </div>
  );
};

export default Button;
