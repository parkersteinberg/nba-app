import InjurySearchParams from '@/components/InjurySearchParams'
import PlayerCard from '@/components/PlayerCard'
import { Box, Typography } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
      // return data
      await setPlayer({ player, ...data })
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
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <Box sx={{ display: 'flex' }}>
            <ReplayIcon sx={{ mr: 1, mb: 2 }} />
            <Typography gutterBottom variant="h6">
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
  // console.log(context)

  return {
    props: {},
  }
}

export default PlayerHome
