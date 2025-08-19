/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./index.js",
    "./src/**/*.{js,jsx}"
    ],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: []
}
