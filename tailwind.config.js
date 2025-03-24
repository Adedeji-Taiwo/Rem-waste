/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#22c55e",
      },
      boxShadow: {
        sideButton: "0px 12.34px 37.01px rgba(136, 51, 255, 0.1)",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, 0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.9s ease-out forwards",
      },
    },
  },
  plugins: [],
};
