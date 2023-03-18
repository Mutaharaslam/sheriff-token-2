/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/src/assets/imgs/bg-small-min.jpg')",
        homeChart: "url('/src/assets/imgs/bg-min.jpg')",
        star: "url('/src/assets/imgs/a-min.png')",
        arrowBtnBg: "url('/src/assets/imgs/arrow-btn.png')",
        starFilled: "url('/src/assets/imgs/a-filled.png')",
      },
      boxShadow: {
        custom: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      backgroundSize: {
        '50': '50%',
        '100': '100%'
      }
    },
    fontFamily: {
      sans: ['WideSaloon'],
      serif: ['Duality'],
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px"
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      primary: "#42210B",
      secondary: "#E7E7E7",
      tertiary: "#181818",
      yellow: "#FD9012",
      blue: "#4246B4",
      green: "#55B865",
      black: "#000"
    },
  },
  plugins: [],
};
