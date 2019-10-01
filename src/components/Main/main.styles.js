import { StyleSheet } from 'aphrodite'
import theme, { hexToRgbA } from '@sbgcore/theme'

export default StyleSheet.create({
  Container: {

    position: 'relative',
    padding: `${theme.spacingValue}px ${theme.spacingValue * 0.75}px`,
    margin: 0,
    fontFamily: 'SkyFont',
    ':before': {
      content: '""',
      display: 'block',
      background: `linear-gradient(350deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 83%, rgba(255,255,255,0) 83%, rgba(255,255,255,0) 100%), radial-gradient(circle 100vw at 0% 30%, ${hexToRgbA(
        theme.colour.primaryDark,
        0.08
      )} 0%, ${hexToRgbA(theme.colour.primaryDark, 0.08)} 30%, ${hexToRgbA(
        theme.colour.primaryDark,
        0.02
      )} 70%, ${hexToRgbA(theme.colour.primaryDark, 0.2)} 85%, ${hexToRgbA(
        theme.colour.primaryDark,
        0.35
      )} 100%)`,
      backgroundSize: '100vw 100vh',
      backgroundRepeat: 'no-repeat',
      opacity: 0.3,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -1
    }
  },
  FormContainer: {
    position: 'relative',
    zIndex: 1
  }
})