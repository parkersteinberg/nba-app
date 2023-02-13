import InjuryHistorySummary from '@/components/InjuryHistorySummary'
import InjuryHistoryTable from '@/components/InjuryHistoryTable'
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

export type Team = {
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  id: number
  name: string
}

export type Player = {
  first_name: string
  height_feet: number | null
  height_inches: number | null
  id: number
  last_name: string
  position: string
  team: Team
  weight_pounds: number
}

const PlayerHome = () => {
  // this is where we could put our useEffect (or create custom hook?) to fetch data
  // console.log('access props? ', props)

  const [player, setPlayer] = useState<Player | undefined>()
  const [nbaPlayerId, setNbaPlayerId] = useState('')

  // this has to be called 'id' bc that's what we named it in our routing/page setup
  const router = useRouter()
  const { id } = router.query
  // on page load, get this player's data
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
          <InjurySearchParams />
          <hr></hr>

          <InjuryHistorySummary player={player} />
        </div>
      ) : null}

      <button
        onClick={async () => {
          console.log('clicked')
          const res = await fetch(
            `/api/injury?player=${player?.first_name}+${player?.last_name}`
          )
          const data = await res.json()
          console.log('data is', data)
        }}
      >
        CLICK MEEEEE
      </button>
      <hr></hr>

      <br />
      <br />

      <InjuryHistoryTable />
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
