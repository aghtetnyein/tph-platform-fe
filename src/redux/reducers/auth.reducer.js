import Cookies from "js-cookie";
import { AUTH_SUCCESS, AUTH_FAIL, AUTH_VALIDATE_SUCCESS } from "../types";

const authReducer = (
  state = { checked: false, token: Cookies.get("_ut") || "" },
  { type, payloads }
) => {
  switch (type) {
    case AUTH_SUCCESS:
      Cookies.set("_ut", payloads.token, {expires: 1});
      return {
        checked: (state.checked = true),
        token: (state.token = payloads.token),
      };
    case AUTH_VALIDATE_SUCCESS:
      return {
        checked: (state.checked = true),
        token: (state.token = payloads.token),
      };
    case AUTH_FAIL:
      Cookies.remove("_ut");
      return {
        checked: (state.checked = true),
        token: (state.token = ""),
      };
    default:
      return state;
  }
};

export default authReducer;
