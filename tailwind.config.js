

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dominant: "#000000e9",
        Secondary: " #ffffffed",
        Highliter:"#D7FF35",
        Buttoncolor:"#313030ac"
      },
      fontFamily: {
        Primary: ["Josefin Sans"],
        Secondary: ["Montserrat"],
        Decorative: ["League Spartan"],
        First: ["Merriweather Sans"],
        Heading:["Bebas Neue"]
      },
      fontSize: {},
      backgroundImage:{
        Glitch:["url(https://assets-global.website-files.com/651d15fb8f27f4a03c14ae88/651d15fb8f27f4a03c14afa4_5d8424ac4ffed73f4d72846e_5c06f51d6e75c933fe05c728_giphy.gif)"]
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.9, -0.6, 0.32, 1.6)',
      },
      transitionDuration: {
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
};
