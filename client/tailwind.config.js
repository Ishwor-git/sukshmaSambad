/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customBlue: "#3490dc",
        customGreen: "#38c172",
        customRed: "#e3342f",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
