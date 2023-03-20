/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    "extend": {
      "container": {
        center: true
      },
      "colors": {
        "dark": '#333',
        "light": '#e3e3e3'
      }
    }
  },
  plugins: [],
}
