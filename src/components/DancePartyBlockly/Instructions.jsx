import React from "react";

// images
import InstructionIcon from "../../assets/images/DanceParty/dance-party-instructions.png";

const Instructions = () => {
  return (
    <div className="p-2 w-full h-full bg-gray-100 rounded-lg grid grid-cols-12 gap-3">
      <div className="w-full h-full rounded-lg col-span-3 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <img
            src={InstructionIcon}
            className="w-40 h-auto"
            alt="instruction-img"
          />
        </div>
      </div>
      <div
        className="w-full max-h-32 rounded-lg bg-gray-300 col-span-9 px-4 py-2"
        style={{ overflow: "scroll" }}
      >
        <ul>
          {[...Array(10).keys()].map((i, index) => (
            <li key={index}>
              <p className="text-sm font-semibold">{index + 1}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
