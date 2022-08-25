/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
	],
  theme: {
		colors:{
			"green-light": "#00DF5E",
			"white": "#F9F9F9",
			"paragrafo" : "#828282",
			"gray-200": "#333333",
			"gray-400": "#212121",
			"dark": "#171717"
		},
		fontFamily:{
			'-font-default': ['IBM Plex Sans', "sans-serif"]
		},
    extend: {},
  },
  plugins: [],
}
