import React, { useRef, useCallback, useEffect } from "react";
import { Markup } from "interweave"; //This will render string to html elements
// components
import ToolTip from "./ToolTip";
//Hook
import { useHintHook } from "../../Hooks/useHintHook";
// images
import DancePartyHint from "../../assets/images/DanceParty/dance-party-hint.png";
import DancePartyHintTitle from "../../assets/images/DanceParty/dance-party-hint-title.png";

const Hints = ({ showHints }) => {
  const eng = false;
  const currentActivity = 14 //for testing
  const {
    hintsData,
    nextBtnShow,
    setNextBtnShow,
    dataLength,
    visitedHint,
    hide,
    show,
    setHide,
    setShow,
    activityId,
    nextInt,
    setNextInt,
    prevInt,
    setprevInt,
    itemId,
    setItemId,
    renderCount} = useHintHook(currentActivity);


   const target = useRef(null);
   console.log("next" + nextInt.count + nextBtnShow)

  //hide when number hint is = to next
  const hideHint = useCallback((dataLength, nextInt) => {
    if (dataLength === nextInt.count || nextBtnShow) {
      setShow(false);
      setHide(true);
      console.log("Hint hide");
    }
  }, [nextBtnShow, setHide, setShow]);
  const hideBtn = () => {
    setShow(false);
    setNextBtnShow(true);
  };

  
  //for next and prev
  console.log("prev" + prevInt.count);
  console.log("dataLength" + dataLength);

  useEffect(() => {
    hideHint(dataLength, nextInt);
  }, [dataLength, nextInt, hideHint]);

  //next button handler func
  const next = () => {
    if (dataLength >= nextInt.count) {
      setNextInt((prev) => ({
        count: prev.count + 1,
      }));
      setprevInt((prev) => ({
        count: prev.count + 1,
      }));
      setItemId((prev) => ({
        count: prev.count + 1,
      }));

      setShow(true);
      setHide(false);
      setNextBtnShow(false);

      //checked the id of visited hint
      if (visitedHint.some((hint) => hint.id === itemId.count + 3)) {
        setNextBtnShow(true);
        console.log("itemId after next" + itemId.count);
      }
    } else {
      console.log("No More Hint");
    }
  };
  //prev button handler func
  const prev = () => {
    if (dataLength >= prevInt.count) {
      setNextInt((prev) => ({
        count: prev.count - 1,
      }));
      setprevInt((prev) => ({
        count: prev.count - 1,
      }));
      setItemId((prev) => ({
        count: prev.count - 1,
      }));
      setShow(true);
      setHide(false);
      if (visitedHint.some((hint) => hint.id === itemId.count + 1)) {
        setNextBtnShow(true);
        console.log("itemId after prev" + itemId.count);
      } else {
        setNextBtnShow(false);
      }
    } else {
      console.log("No More Prev Hint");
    }
  };

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
          {/*tooltip*/}
          {
            show && <ToolTip />
          }
          <img
            src={DancePartyHint}
            className="h-36"
            alt="dance-party-hint-img"
            onClick={hideBtn}
          />
          <p className="font-semibold text-sm">Hint 1</p>
        </div>
        <div className="col-span-9 w-full h-full flex flex-col items-center">
          <img src={DancePartyHintTitle} className="w-64 h-auto" alt="title" />
          <div className="bg-white w-full h-28 rounded-lg mt-3 px-3 py-2">
            {eng ? (
                  dataLength >= nextInt.count && (
                    <Markup content={hintsData.EN} />
                  )
                ) : (
                  <Markup content={hintsData.MM} />
                )}
          </div>
          <div className="flex">
            {prevInt.count > 0 && (
              <button onClick={prev}>
                Previous
              </button>
            )}
            <div className="mt-3 font-semibold text-sm">
              1/2
            </div>
            {nextBtnShow && dataLength > nextInt.count && (
              <button onClick={next}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hints;
