import { SNACKBAR_OPEN, SNACKBAR_CLOSE } from "../types";

const snackBarReducer = (
  state = { open: false, status: "", title: "", message: "" },
  { type, payloads }
) => {
  switch (type) {
    case SNACKBAR_OPEN:
      return {
        open: (state.open = true),
        status: (state.status = payloads.status),
        title: (state.title = payloads.title),
        message: (state.message = payloads.message),
      };
    case SNACKBAR_CLOSE:
      return {
        open: (state.open = false),
        status: (state.status = ""),
        title: (state.title = ""),
        message: (state.message = ""),
      };
    default:
      return state;
  }
};

export default snackBarReducer;
