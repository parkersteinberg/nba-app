import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#C0D6E4',
    },
    secondary: {
      main: '#6C7B8B',
    },
    error: {
      main: red.A400,
    },
  },
})
export default theme
