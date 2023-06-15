import { createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[50],
    },
    primary: {
      main: red[900],
    },
    secondary: {
      main: red[900],
    },
    error: {
      main: red.A400,
    },
  },
  components: {},
})
