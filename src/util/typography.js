import Typography from "typography";
import { FONTS } from "../style";

const typography = new Typography({
  baseFontSize: `${FONTS.size.base}px`,
  bodyFontFamily: FONTS.sansSerif,
  headerFontFamily: FONTS.sansSerif,
  headerWeight: 100,
  googleFonts: [
    {
      name: "Roboto",
      styles: ["100", "300", "400", "700"]
    },
    {
      name: "Noto Serif",
      styles: ["400", "700"]
    }
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    // we can override any styles globally here
  })
});

export default typography;
