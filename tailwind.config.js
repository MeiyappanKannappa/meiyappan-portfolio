/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ss: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      screens: {
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
