/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "translate-init": "translate-init 1s ease-in-out forwards",
      },
      keyframes: {
        "translate-init": {
          "0%": {
            transform: "translateY(-120%)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
