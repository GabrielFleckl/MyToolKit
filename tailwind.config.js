/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["forest", "light", "dark", "cyberpunk", "aqua", "dracula"],
    darkTheme: "cyberpunk",
  },
};
