/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        '1/5':'1fr 4fr'
      }
    },
  },
  plugins: [],
};
