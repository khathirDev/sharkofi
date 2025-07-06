/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   darkMode: "class",
// };

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sui-blue": "#6FBDF0",
        "ocean-dark": "#0B1120",
        "neon-cyan": "#00F0FF",
        "blood-red": "#FF4D4D",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "sonar": "sonar 3s ease-out infinite",
        "bubble": "bubble 4s ease-in infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { "text-shadow": "0 0 5px #00F0FF" },
          "100%": { "text-shadow": "0 0 20px #00F0FF, 0 0 30px #0066FF" },
        },
        sonar: {
          "0%": { opacity: 0.8, transform: "scale(1)" },
          "100%": { opacity: 0, transform: "scale(3)" },
        },
        bubble: {
          "0%": { transform: "translateY(0) scale(1)", opacity: 1 },
          "100%": { transform: "translateY(-100vh) scale(0.3)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}