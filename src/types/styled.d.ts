import 'styled-components'
import { RebootTheme } from 'styled-reboot'
import {
  ThemeBreakpoints,
  ThemeFontSizes,
  ThemeColors,
  ThemeFooter,
  ThemeHeader,
  ThemeRadii,
  ThemeFonts,
} from '../styles/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends RebootTheme {
    header: ThemeHeader
    footer: ThemeFooter
    breakpoints: ThemeBreakpoints
    fonts: ThemeFonts
    fontSizes: ThemeFontSizes
    colors: ThemeColors
    radii: ThemeRadii
  }
}
