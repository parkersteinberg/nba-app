import InjurySearchParams from '@/components/InjurySearchParams'
import PlayerCard from '@/components/PlayerCard'
import { useRouter } from 'next/router'
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
      {player ? (
        <div>
          <PlayerCard player={player} nbaPlayerId={nbaPlayerId} />
        </div>
      ) : null}
      <InjurySearchParams />
    </div>
  )
}

// or we could use getServerSideProps here too, if appropriate (not sure if it is)

export default PlayerHome
