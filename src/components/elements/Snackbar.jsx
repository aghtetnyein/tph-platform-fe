import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../redux";
import { bindActionCreators } from "redux";

const Snackbar = () => {
  // instances
  const dispatch = useDispatch();
  const status = useSelector((state) => state.snackBarReducer.status);
  const open = useSelector((state) => state.snackBarReducer.open);
  const title = useSelector((state) => state.snackBarReducer.title);
  const message = useSelector((state) => state.snackBarReducer.message);

  // binding action creator
  const { snackBarCloser } = bindActionCreators(actionCreators, dispatch);

  // functions
  const handleClose = () => {
    snackBarCloser(); // dispatch
  };

  setTimeout(snackBarCloser, 5000);

  return (
    <div className={`${open ? "fixed" : "hidden"} bottom-4 left-4 w-72`}>
      <div
        className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-lg border"
        role="alert"
      >
        {status === "success" && (
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-green rounded-lg">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        )}
        {status === "error" && (
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-red rounded-lg">
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
          </div>
        )}
        <div className="ml-3">
          <p className="text-md font-semibold">{title}</p>
          <p className="text-sm font-normal">{message}</p>
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
          data-collapse-toggle="toast-default"
          aria-label="Close"
          onClick={handleClose}
        >
          <span className="sr-only">Close</span>
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
    </div>
  );
};

export default Snackbar;
