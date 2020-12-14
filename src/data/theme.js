let spacer = 8;
export const theme = {
  colors: {
    primary: "#33A0FF",
    secondary: "#33A0FF40",
    light: "#FFFFFF",
    dark: "#000000",
    dark2: "#0000004D",
    grey: "#F0F0F0",
    red: "#FF0000",
  },
  fonts: {
    url: "https://fonts.googleapis.com/css2?family=Inder&display=swap",
    name: "Inder",
    fallback: "sans-serif",
    sizes: { S: "18px", M: "24px", L: "30px", XL: "48px" },
  },
  spacer: "8px",
  sizes: {
    navbar: 6 * spacer,
    buttons: {
      S: `${3 * spacer}px`,
      M: `${6 * spacer}px`,
      L: `${9 * spacer}px`,
      XL: `${12 * spacer}px`,
    },
    modals: {
      mobile: { height: "100vh", width: "100vw" },
      login: { height: "700px", width: "800px" },
      cart: { height: "500px", width: "350px" },
      navbar: { height: "300px", width: "75vw" },
    },
  },
  viewport: { mobile: "450px", tablet: "768px" },
};
