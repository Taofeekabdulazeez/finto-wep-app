/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-tint": "#9fe870",
        "primary-shade": "#163300",
        "accent-color": "#FFC091",
        "primary-0": "#F5FDF1",
        "primary-25": "#ECFAE2",
        "primary-50": "#D9F6C6",
        "primary-100": "#C5F1A9",
        "primary-200": "#B2ED8D",
        "primary-300": "#9FE870",
      },
    },
  },
  plugins: [],
};
