/** @type {import('tailwindcss').Config} */
export const content = ["./src/*/.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#5f6FFF",
    },
    gridTemplateColumns: {
      auto: "repeat(auto-fill, minmax(200px, 1fr))",
    },
  },
};
export const plugins = [];

