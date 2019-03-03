import Typography from "typography"

const typography = new Typography({
  title: "David Elster",
  baseFontSize: "20px",
  baseLineHeight: 1.6,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['900'],
    },
    {
      name: 'Poppins',
      styles: ['400', '600'],
    },
  ],
  headerFontFamily: ['Merriweather'],
  headerWeight: 900,
  bodyFontFamily: ['Poppins'],
  bodyGray: 14,
  bodyWeight: 400,
  boldWeight: 600,
  includeNormalize: false
})

export default typography