import { defaultRebootTheme } from 'styled-reboot'
import { DefaultTheme } from 'styled-components'
import * as CSS from 'csstype'

export type ThemeRadii = {
  base: CSS.Property.BorderRadius
  circle: CSS.Property.BorderRadius
}

export const radii: ThemeRadii = {
  base: '4px',
  circle: '50%',
}

export type ThemeColors = {
  text: CSS.Property.Color
  background: CSS.Property.Color
  primary: CSS.Property.Color
  secondary: CSS.Property.Color
  highlightBackground: CSS.Property.Color
  highlightColor: CSS.Property.Color
}

export const colors: ThemeColors = {
  text: '#000',
  background: '#fff',
  primary: '#fff',
  secondary: '#fff',
  highlightBackground: '#222',
  highlightColor: '#222',
}

export const buttons = {
  primary: {
    color: 'white',
    backgroundColor: colors.primary,
  },
}

export type ThemeBreakpoints = string[]

export const breakpoints: ThemeBreakpoints = [`480px`, `576px`, `768px`, `992px`, `1200px`, `1441px`, `1600px`]

export const space = [0, 4, 8, 16, 32, 64, 128, 256]

export type ThemeFonts = {
  [key: string]: string
}

export const fonts: ThemeFonts = {
  sans: 'Open Sans, sans-serif',
  serif: 'Open Sans, sans-serif',
  body: 'Open Sans, sans-serif',
}

export type ThemeFontSizes = number[]
export const fontSizes: ThemeFontSizes = [12, 16, 18, 20, 20, 24, 28, 32]

export type ThemeHeader = {
  height: number
  backgroundColor: CSS.Property.Color
}

export const header: ThemeHeader = {
  height: 70,
  backgroundColor: '#606c38',
}

export type ThemeFooter = {
  backgroundColor: CSS.Property.Color
}

export const footer: ThemeFooter = {
  backgroundColor: '#222222',
}

export const rebootCSS = {
  ...defaultRebootTheme,
  fontFamilyBase: fonts.sans,
  fontFamilyMonospace: fonts.monospace,
  fontFamilySerif: fonts.serif,
  fontWeightBase: 400,
  headingsMarginBottom: `1.5rem`,
}

const Theme: DefaultTheme = {
  // Reboot
  ...rebootCSS,

  // Theme props
  breakpoints,
  colors,
  fonts,
  fontSizes,
  radii,

  // Extended props
  header,
  footer,
}

export default Theme
