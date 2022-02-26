import React from "react";

const TextField = ({
  required,
  type,
  name,
  label,
  placeholder,
  autoComplete,
  value,
  register,
  errors,
  disabled,
}) => {
  return (
    <div className="w-full">
      <div className="flex">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        {required && (
          <label className="block ml-1 text-sm font-medium text-red">*</label>
        )}
      </div>

      <div className="mt-2">
        <input
          {...register}
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          // required={required}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className="appearance-none block w-full p-4 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-tph_gold focus:border-tph_gold sm:text-sm"
        />
      </div>
      <p className="block text-sm font-medium text-red mt-2">{errors}</p>
    </div>
  );
};

export default TextField;
