/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#d8b4fe',
          secondary: '#6ee7b7',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
  extend: { },
},
plugins: [require("daisyui")],
}
