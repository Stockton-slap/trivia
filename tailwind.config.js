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
      header: "#234",
      bg: "grey",
      btn: "orange",
      // purple: "purple",
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
      regular: "400",
    },
    fontFamily: {},
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
