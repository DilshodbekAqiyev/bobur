/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1200px",
        },
      },
      colors: {
        green: {
          DEFAULT: "#46A358",
        },
        black: {
          DEFAULT: "#3D3D3D",
        },
        grey: {
          DEFAULT: "#FBFBFB",
          1: "#727272",
          2: "#A5A5A5",
          3: "#CBCBCB",
          4: "#E5E5E5",
          5: "#ACACAC",
        },
      },
      fontFamily: {
        "cera-pro": "Cera Pro",
      },
      fontSize: {
        DEFAULT:'16px',
        1:'13px',
        2:'14px',
        3:'15px',
        4:'17px',
        5:'18px',
        6:'20px',
        7:'23px',
        8:'28px',
        9:'30px',
        10:'65px',
        11:'70px',
        12: '10px'
      },
      lineHeight: {
        DEFAULT: '16px',
        1:'15px',
        2: '22px',
        3: '24px',
        4: '26px',
        5: '30px',
        6: '40px',
        7: '45px',
        8: '65px',
        9: '70px',
      }
    },
  },
  plugins: [],
};
