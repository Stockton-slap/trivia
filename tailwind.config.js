/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1440px",
    },
    colors: {
      white: "#fff",
      black: "#000",
      bg: "#DEDFE4",
      orange: "#FF7F50",
      green: "#008000",
      red: "B90E0A",
      blue: "#000A52",
      textColor: "#37003c",
      hoverAnswer: "#00bbff",
      grey: "#676767",
    },
    fontSize: {
      xs: ["16px", "1.2"],
      sm: ["24px", "1.2"],
      base: ["32px", "1.2"],
      lg: ["40px", "1.2"],
      xl: ["48px", "1.2"],
    },
    fontWeight: {
      semibold: "500",
      bold: "700",
    },
    boxShadow: {
      none: "0 0 #0000",
      mainShadow: "0px 6px 20px 0px rgba(92, 121, 123, 0.15)",
      cardsShadow: "0px 6px 13px 0px rgba(92, 121, 123, 0.20)",
      btnShadow: "0px 4px 4px 0px rgba(168, 168, 168, 0.25)",
    },
    extend: {
      backgroundImage: {
        "gradient-btn":
          "linear-gradient(138deg, #ff2882 22.4%,    #963cff 69.51%)",
        "gradient-btn-hover":
          "linear-gradient(138deg, #05f0ff 22.4%,    #7367ff 69.51%)",
        "gradient-header":
          "linear-gradient(138deg, #C33764 22.4%,    #1D2671 69.51%)",
        "gradient-question":
          "linear-gradient(138deg, #764BA2 22.4%,    #667EEA 69.51%)",
        "gradient-bg":
          "linear-gradient(138deg, #4E65FF 22.4%,    #92EFFD 69.51%)",
      },
    },
  },
  plugins: [],
};
