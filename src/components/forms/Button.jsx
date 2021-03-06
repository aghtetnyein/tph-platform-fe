import React from "react";

const Button = ({
  type,
  variant,
  label,
  backgroundColor,
  labelColor,
  handleClick,
  prefixIcon,
  postfixIcon,
  textColor,
}) => {
  return (
    <div>
      {variant === "primary" ? (
        <button
          type={type}
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-icon_bg hover:bg-tph_purple_hover focus:outline-none"
          style={{ background: backgroundColor, color: labelColor }}
        >
          {prefixIcon}
          {label}
          {postfixIcon}
        </button>
      ) : variant === "secondary" ? (
        <button
          type={type}
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center py-3 px-4 border border-gray-300 rounded-full text-sm font-semibold text-gray-500 bg-white hover:bg-gray-100"
        >
          {prefixIcon}
          {label}
          {postfixIcon}
        </button>
      ) : variant === "text" ? (
        <button
          type={type}
          onClick={handleClick}
          className={`w-full inline-flex items-center justify-center text-sm font-semibold ${textColor}`}
        >
          {prefixIcon}
          {label}
          {postfixIcon}
        </button>
      ) : variant === "alert" ? (
        <button
          type={type}
          onClick={handleClick}
          className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-full text-sm font-semibold text-white bg-red hover:bg-red_hover`}
        >
          {prefixIcon}
          {label}
          {postfixIcon}
        </button>
      ) : variant === "border" ? (
        <button
          type={type}
          onClick={handleClick}
          className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-full text-sm font-semibold text-tph_purple bg-transparent border border-gray-400 hover:bg-tph_purple hover:text-white`}
        >
          {prefixIcon}
          {label}
          {postfixIcon}
        </button>
      ) : null}
    </div>
  );
};

export default Button;
