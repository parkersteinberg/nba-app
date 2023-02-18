import InjurySearchParams from '@/components/InjurySearchParams'
import PlayerCard from '@/components/PlayerCard'
import { Box, Typography } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
const nba = require('nba-api-client')
import { Player } from '@/types/types'

const PlayerHome = () => {
  const [player, setPlayer] = useState<Player | undefined>()
  const [nbaPlayerId, setNbaPlayerId] = useState('')

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const fetchStaticPlayerData = async () => {
      const res = await fetch(`https://www.balldontlie.io/api/v1/players/${id}`)
      const data = await res.json()
      setPlayer({ player, ...data })
    }
    fetchStaticPlayerData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (player) {
      const updatedId = nba.getPlayerID(
        `${player.first_name} ${player.last_name}`
      )?.PlayerID
      if (updatedId) {
        setNbaPlayerId(updatedId)
      }
    }
  }, [player])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Head>
        <title>Injury Insights</title>
        <meta
          name="description"
          content="Injury Insights, basketball analytics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/basketball_icon.svg" />
      </Head>
      <Box sx={{ mb: 2 }}>
        <Link href="/">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ReplayIcon sx={{ mr: 1 }} />
            <Typography gutterBottom variant="h6" sx={{ mt: 1 }}>
              Start a new search
            </Typography>
          </Box>
        </Link>
      </Box>
      {player ? (
        <Box sx={{ minWidth: '80%', mb: 6 }}>
          <PlayerCard player={player} nbaPlayerId={nbaPlayerId} />
          <InjurySearchParams player={player} />
        </Box>
      ) : null}
    </Box>
  )
}

// assist with retrieving url params upon page refresh
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default PlayerHome
