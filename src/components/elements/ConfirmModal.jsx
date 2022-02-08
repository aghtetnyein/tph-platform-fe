import React from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import { Button } from "../forms";

const ConfirmModal = () => {
  // instances
  const dispatch = useDispatch();
  const confirmModal = useSelector((state) => state.confirmModal);

  return (
    <div className={`${confirmModal.open ? "block" : "hidden"}`}>
      {/* Delete Product Modal */}
      <div className="fixed w-screen h-screen bg-gray-900/[0.3] flex items-center justify-center z-50 justify-center items-center inset-0 h-modal">
        <div className="relative px-4 w-full max-w-md h-full h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow">
            {/* Modal header */}
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => {
                  dispatch({
                    type: "MODAL_CONFIRM_CLOSE",
                  });
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 pt-0 text-center">
              <svg
                className="mx-auto mb-4 w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-md font-normal text-gray-500 dark:text-gray-400">
                {confirmModal.title}
              </h3>
              <div className="mt-6 md:flex md:space-x-2 text-center justify-center items-center">
                <div>
                  <Button
                    variant={"alert"}
                    type={"button"}
                    label={"Yes, I'm sure"}
                    handleClick={confirmModal.onSubmitConfirmDialog.onSubmit}
                  />
                </div>

                <div className="mt-2 md:mt-0">
                  <Button
                    variant={"secondary"}
                    type={"button"}
                    label={"No, cancel"}
                    handleClick={() => {
                      dispatch({
                        type: "MODAL_CONFIRM_CLOSE",
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
