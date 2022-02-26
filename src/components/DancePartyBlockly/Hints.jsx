import React from "react";

//Components
import { Button } from "../../components/forms";

// images
import DancePartyHint from "../../assets/images/DanceParty/dance-party-hint.png";
import DancePartyHintTitle from "../../assets/images/DanceParty/dance-party-hint-title.png";

const Hints = ({ showHints }) => {
  return (
    <div
      className={`absolute mt-1 right-12 bg-gray-200 shadow-lg rounded-lg z-10 ${
        showHints ? "block" : "hidden"
      }`}
      style={{ width: "28rem" }}
    >
      <div className="relative">
        <div
          className="bg-gray-200"
          style={{
            height: "16px",
            width: "16px",
            position: "absolute",
            left: "10rem",
            top: 0,
            transform: "translate(50%, -50%) rotate(45deg)",
          }}
        ></div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-2 p-4 pt-1">
        <div className="col-span-3 w-full h-full flex flex-col items-center justify-center">
          <img
            src={DancePartyHint}
            className="h-36"
            alt="dance-party-hint-img"
          />
          <p className="font-semibold text-sm">Hint 1</p>
        </div>
        <div className="col-span-9 w-full h-full flex flex-col items-center">
          <img src={DancePartyHintTitle} className="w-64 h-auto" alt="title" />
          <div className="bg-white w-full h-28 rounded-lg mt-3 px-3 py-2">
            hola
          </div>
          <div className="mt-3 font-semibold text-sm">1/2</div>
        </div>
      </div>
    </div>
  );
};

export default Hints;
