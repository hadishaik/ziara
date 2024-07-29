import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      card: "5px 5px 4px rgba(0, 0, 0, 0.25)",
      subnav: "5px 5px 10px rgba(0, 0, 0, 0.25)",
      menuitems: "0px 7px 25px rgba(0, 0, 0, 0.0563538)",
      custom: "5px 0px 10px #171717",
      searchResultList: "0px 5px 4px rgba(0, 0, 0, 0.25)",
      cardImage: "0px 4px 4px 0px #00000040",
      cardTemp: " 5px 5px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    dropShadow: {
      cart: "5px 5px 4px rgba(0, 0, 0, 0.25)",
    },
    container: {
      center: true,
      padding: "15px",
    },
    colors: {
      accent: "#7860F1",
      topHeadingPrimary: "#010F1c",
      topHeadingSecondary: "#021d35",
      pink: "#c14f57",
      lightPink: "#F5D7D9",
      gray: "#F1EBEB",
      white: "#fff",
      darkGray: "#4F4D4D",
      grayText: "#9A9698",
      black: "#000000",
      blue: {
        600: "#0989ff",
      },
      errText: "#A90917",
    },
  },
  plugins: [],
});
