/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        talk4devs: {
          "primary": "#a600ff",
          "secondary": "#00b6ff",
          "accent": "#ceb200",
          "neutral": "#2a282d",
          "base-100": "#faffff",
          "info": "#006ac9",
          "success": "#00c449",
          "warning": "#9f6e00",
          "error": "#ff7e8a",
        }
      }
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}

