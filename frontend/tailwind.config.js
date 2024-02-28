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
          "primary": "#0086ff",
          "secondary": "#737c00",
          "accent": "#ab0000",
          "neutral": "#372a27",
          "base-100": "#e7fff1",
          "info": "#00b9ff",
          "success": "#00ea5b",
          "warning": "#ba5600",
          "error": "#ff8894"
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

