import { Typography, Box } from '@mui/material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import Link from 'next/link'
// can import a nav stylesheet here

const Nav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        m: 2,
        flexDirection: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Link href="/">
        <Typography variant="h3" sx={{ m: 2 }}>
          Injury Insights
        </Typography>
      </Link>
      <Link href="/">
        <SportsBasketballIcon sx={{ transform: 'scale(2)' }} />
      </Link>
    </Box>
  )
}

export default Nav
