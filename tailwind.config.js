/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-background": "hsl(207, 26%, 17%)",
        "dark-text": "hsl(0, 0%, 100%)",
        "dark-element": "hsl(209, 23%, 22%)",

        "light-background": "hsl(0, 0%, 98%)",
        "light-text": "hsl(200, 15%, 8%)",
        "light-element": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
