import InjurySearchParams from '@/components/InjurySearchParams'
import PlayerCard from '@/components/PlayerCard'
import { Box, Typography } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay'
import Link from 'next/link'
// import { queryDatabase } from '@/database/index'
import { useRouter } from 'next/router'
// import { GetServerSidePropsContext } from 'next'
import { useEffect, useState } from 'react'
const nba = require('nba-api-client')
import { Player } from '@/types/types'

const PlayerHome = () => {
  // this is where we could put our useEffect (or create custom hook?) to fetch data
  // console.log('access props? ', props)

  const [player, setPlayer] = useState<Player | undefined>()
  const [nbaPlayerId, setNbaPlayerId] = useState('')

  // this has to be called 'id' bc that's what we named it in our routing/page setup
  const router = useRouter()
  const { id } = router.query
  // actually, would prob be better to pass it along in our routing?
  useEffect(() => {
    const fetchStaticPlayerData = async () => {
      const res = await fetch(`https://www.balldontlie.io/api/v1/players/${id}`)
      const data = await res.json()
      console.log('data is', data)
      // return data
      setPlayer({ player, ...data })
      // get nba player id for headshot
    }
    fetchStaticPlayerData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (player) {
      setNbaPlayerId(
        nba.getPlayerID(`${player.first_name} ${player.last_name}`).PlayerID
      )
    }
  }, [player])

  return (
    <div>
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <Typography gutterBottom variant="h6">
            <ReplayIcon sx={{ mx: 1 }} />
            Back to search
          </Typography>
        </Link>
      </Box>
      {player ? (
        <div>
          <PlayerCard player={player} nbaPlayerId={nbaPlayerId} />
          <br />
          <br />
          <InjurySearchParams player={player} />
          <hr></hr>
        </div>
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
