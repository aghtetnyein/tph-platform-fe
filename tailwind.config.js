module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",

        primary_white: "#fff" /* for background_color and text_color */,
        secondary_white: "#f1f1f1" /* for background_color */,
        tertiary_white: "#e4e4e4" /* for input_field border color */,
        primary_black: "#000" /* for text_color */,
        primary_grey: "#999" /* for background_color */,
        tertiary_grey: "#ddd" /* for division line */,
        secondary_grey: "#7a7a7a" /* for text_color */,

        tph_purple: "#57475B",
        tph_purple_hover: "#4D4052",
        tph_light_purple: "#dcbad8",
        tph_gold: "#fbb615",
        tph_gold_hover: "#F9B006",
        tph_light_gold: "#f8d592",
        tph_cyan: "#7ecdc7",
        tph_light_cyan: "#b1dfdc",
        tph_orange: "#e68868",
        tph_orange_hover: "#F8774B",
        tph_light_orange: "#edc6bc",

        red: "#EE5C5C",
        red_hover: "#F04747",
        green: "#65CA69",

        icon_bg: "#38293b",
      },
    },
  },
  plugins: [],
};
