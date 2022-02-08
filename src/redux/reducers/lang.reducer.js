import { SET_LANGUAGE } from "../types";

const langReducer = (
  state = {
    id: 2,
    name: "English",
    value: "en",
    image: "https://img.icons8.com/color/48/000000/usa.png",
  },
  { type, payloads }
) => {
  switch (type) {
    case SET_LANGUAGE:
      return (state = payloads.language);
    default:
      return state;
  }
};

export default langReducer;
