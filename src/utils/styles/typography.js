import Typography from "typography";

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Exo 2"],
  bodyFontFamily: ["Exo 2"],

  includeNormalize: false,
  googleFonts: [
    {
      name: "Exo 2",
      styles: ["400", "700", "900"]
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700", "700i"]
    }
  ]
});

export default typography;
