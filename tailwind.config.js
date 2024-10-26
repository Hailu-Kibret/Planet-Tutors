/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if you have different file types
  ],
  theme: {
    extend: {
      colors: {
        tealCustom: "#5ab3d8", // You can name it whatever you like
      },
    },
  },
  plugins: [],
};
