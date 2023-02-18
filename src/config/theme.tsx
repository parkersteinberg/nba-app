import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
// Create theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#3C3938',
    },
    secondary: {
      main: '#6C9CAF',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#fafafa',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
    ].join(','),
  },
})
export default theme
