import { Typography, Box } from '@mui/material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import Link from 'next/link'

const Nav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        mt: 3,
        mx: 5,
        flexDirection: 'flex-start',
        justifyContent: 'center',
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
