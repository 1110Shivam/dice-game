/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.5s infinite",
        roll: "roll 0.6s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-10px)" },
          "40%, 80%": { transform: "translateX(10px)" },
        },
        roll: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-20px) rotate(90deg)" },
          "50%": { transform: "translateY(0) rotate(180deg)" },
          "75%": { transform: "translateY(-10px) rotate(270deg)" },
          "100%": { transform: "translateY(0) rotate(360deg)" },
        },
      },
       colors: {
      primary: "#1e293b",
    },
    },
  },
  plugins: [],
};
