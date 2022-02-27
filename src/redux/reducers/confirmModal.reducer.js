import { MODAL_CONFIRM_OPEN, MODAL_CONFIRM_CLOSE } from "../types";

const confirmModalReducer = (
  state = {
    open: false,
    title: "",
    onSubmitConfirmDialog: {},
    onCancelConfirmDialog: {},
  },
  { type, payloads }
) => {
  switch (type) {
    case MODAL_CONFIRM_OPEN:
      return {
        open: (state.open = true),
        title: (state.title = payloads.title),
        onSubmitConfirmDialog: (state.onSubmitConfirmDialog =
          payloads.onSubmitConfirmDialog),
      };
    case MODAL_CONFIRM_CLOSE:
      return {
        open: (state.open = false),
        title: (state.title = ""),
        onSubmitConfirmDialog: (state.onSubmitConfirmDialog = {}),
      };
    default:
      return state;
  }
};

export default confirmModalReducer;
