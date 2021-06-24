const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.njk"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
