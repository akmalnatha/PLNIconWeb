/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        yellow: {
          primary: "#F8DB25",
          hover: "#FFEA6A",
          click: "#E7B400",
          graph: "#FFA41B",
        },
        blue: {
          primary: "#09AEEF",
          hover: "#59C6F1",
          click: "#0B7AA6",
          graph: "#015CBA",
        },
        red: {
          primary: "#BD1B1B",
          hover: "#E64444",
          click: "#AA0808",
          graph: "#BD1B1B",
        },
        green: {
          primary: "#1D7331",
          hover: "#3CCE5D",
          click: "#004F12",
          graph: "#1D7331",
        },
        purple: {
          graph: "#9384D1",
        },
        pink: {
          graph: "#F266AB",
        },
        neutral: {
          500: "#fafaff",
          100: "#eef0f2",
          300: "#ecebe4",
          500: "#daddd8",
          700: "#1c1c1c",
        },
        text: {
          light: "#F8F8F8",
          dark: "#031B34",
        },
      },
    },  
  },
  plugins: [],
};
