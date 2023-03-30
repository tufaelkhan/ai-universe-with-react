/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#EF9995",
        
"secondary": "#A4CBB4",
        
"accent": "#EBDC99",
        
neutral: "#7D7259",
        
"base-100": "#E4D8B4",
        
"info": "#2563EB",
        
"success": "#16A34A",
        
"warning": "#D97706",
        
"error": "#DC2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

