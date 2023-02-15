import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import SearchParams from '../components/SearchParams'
import { Typography, Box, Tooltip, IconButton } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Injury Insights</title>
        <meta
          name="description"
          content="Injury Insights, basketball analytics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: change icon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/basketball_icon.svg" />
      </Head>
      <main className={styles.main} data-testid="home-main">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            mb: 10,
            maxWidth: '80%',
            // minWidth: '400px',
          }}
        >
          <Typography variant="h6" component="div">
            Evaluate <strong>durability</strong> and make{' '}
            <strong>data-driven decisions</strong> <br />
            based on player injury history.
          </Typography>
          <Typography variant="body1" component="div">
            <br /> Search for an NBA player to view their{' '}
            <strong>previous injuries</strong>, <strong>games missed</strong>,
            and
            <strong> Durability Score</strong>
            <Tooltip
              title="Durability Score is calculated based on a player's percentage of games played compared to their team's total games played"
              placement="top"
            >
              <IconButton sx={{ transform: 'scale(0.7)' }}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Typography>
        </Box>
        <SearchParams />
      </main>
    </div>
  )
}
