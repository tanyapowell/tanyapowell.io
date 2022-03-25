import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    black: "#000",
    white: "#fff",
    yellow: "#F8AF23",
    darkTurqoise: "#005D69",
    lightTurqoise: "#26A1B1",
    pink: "#FF00C7",
  },
  fonts: {
    family: {
      body: "Quattrocento Sans",
    },
    weight: { regular: 400, semiBold: 600, bold: 700, extraBold: 800 },
    sizes: {
      heading: "40px",
      subheading: "35px",
      largeBody: "24px",
      body: "18px",
    },
  },
  gap: "8px",
};

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${theme.fonts.family.body};
  }
`;
