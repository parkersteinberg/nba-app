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
      console.log('data is', data)
      // return data
      await setPlayer({ player, ...data })
      console.log('player is now', player)
      // get nba player id for headshot
    }
    fetchStaticPlayerData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (player) {
      // TODO: set id based on whether it exists
      const updatedId = nba.getPlayerID(
        `${player.first_name} ${player.last_name}`
      )?.PlayerID
      if (updatedId) {
        setNbaPlayerId(updatedId)
      }
    }
  }, [player])

  return (
    <div>
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
        <Box>
          <PlayerCard player={player} nbaPlayerId={nbaPlayerId} />
          <InjurySearchParams player={player} />
          <hr></hr>
        </Box>
      ) : null}
    </div>
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
