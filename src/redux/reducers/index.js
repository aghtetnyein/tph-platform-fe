import { combineReducers } from "redux";

import langReducer from "./lang.reducer";
import authReducer from "./auth.reducer";
import authBufferReducer from "./authBuffer.reducer";
import confirmModal from "./confirmModal.reducer";

const reducers = combineReducers({
  language: langReducer,
  auth: authReducer,
  data: authBufferReducer,
  confirmModal: confirmModal,
});

export default reducers;
