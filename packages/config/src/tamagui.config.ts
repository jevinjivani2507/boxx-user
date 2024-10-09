import { createTamagui, createFont } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'
import { tokens, themes } from '@tamagui/config/v3'
import { config as fontConfig } from '@tamagui/config/v2'
import { createMedia } from '@tamagui/react-native-media-driver'

import { animations } from '@my/ui/src/animations'

const gilroyFace = {
  normal: { normal: 'Gilroy-Regular' },
  bold: { normal: 'Gilroy-Bold' },
  300: { normal: 'Gilroy-Light' },
  500: { normal: 'Gilroy-Regular' },
  600: { normal: 'Gilroy-SemiBold' },
  700: { normal: 'Gilroy-Bold' },
  800: { normal: 'Gilroy-Bold' },
  900: { normal: 'Gilroy-Bold' },
}

const headingFont = createFont({
  size: fontConfig.fonts.heading.size,
  lineHeight: fontConfig.fonts.heading.lineHeight,
  weight: fontConfig.fonts.heading.weight,
  letterSpacing: fontConfig.fonts.heading.letterSpacing,
  face: gilroyFace,
})

const bodyFont = createFont({
  size: fontConfig.fonts.body.size,
  lineHeight: fontConfig.fonts.body.lineHeight,
  weight: fontConfig.fonts.body.weight,
  letterSpacing: fontConfig.fonts.body.letterSpacing,
  face: gilroyFace,
})

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,

  // highly recommended to turn this on if you are using shorthands
  // to avoid having multiple valid style keys that do the same thing
  // we leave it off by default because it can be confusing as you onboard.
  onlyAllowShorthands: false,
  shorthands,

  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})

// for the compiler to find it
export default config
