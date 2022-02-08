import { AUTH_BUFFER, AUTH_BUFFER_FAIL } from "../types";

const authBufferReducer = (state = {
    user: {},
    role: "",
    authStatus: false
}, { type, payloads }) => {
  switch (type) {
    case AUTH_BUFFER:
      return {
        authStatus: (state.authStatus = true),
        user: (state.user = payloads.user),
        role: (state.role = payloads.role),
      }
      case AUTH_BUFFER_FAIL:
        return {
          authStatus: (state.authStatus = false),
          user: (state.user = {}),
          role: (state.role = ""),
        }
    default:
      return state;
  }
};

export default authBufferReducer;
