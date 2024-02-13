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
      header: "#0285F4",
      bg: "#DEDFE4",
      orange: "#FF7F50",
      green: "#008000",
      blue: "#000A52",
      textColor: "#37003c",
      hoverAnswer: "#00bbff",
      headline: "#492000",
    },
    fontSize: {
      xs: ["20px", "1.2"],
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
        hero: 'url("./media/images/background/welcome-background.png")',
      },
    },
  },
  plugins: [],
};
