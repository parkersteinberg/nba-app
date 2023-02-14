import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Footer = () => {
  return (
    <Box
      sx={{ display: 'flex', mb: 2, mx: 5, justifyContent: 'space-between' }}
    >
      <Typography variant="body2">
        Built by{` `}
        <Link
          href="https://github.com/parkersteinberg"
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: 'none', fontWeight: 600 }}
        >
          Parker Steinberg
        </Link>
      </Typography>
      <Typography variant="body2">
        <Link
          href="https://github.com/parkersteinberg/nba-app"
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: 'none', fontWeight: 600 }}
        >
          View project on GitHub
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
