import Typography from "typography"

const typography = new Typography({
  title: "David Elster",
  baseFontSize: "18px",
  baseLineHeight: 1.7,
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Poppins",
      styles: ["400", "600", "700"],
    },
  ],
  headerFontFamily: ["Poppins"],
  headerWeight: 700,
  bodyFontFamily: ["Poppins"],
  bodyGray: 22,
  bodyWeight: 400,
  boldWeight: 600,
  includeNormalize: false,
})

export default typography
