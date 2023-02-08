import Link from 'next/link'

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

type SearchResultsProps = {
  player: Player
}

const SearchResult = ({ player }: SearchResultsProps) => {
  return (
    <div>
      <p>
        {player.first_name} {player.last_name}
      </p>
      <Link href="/player/[id]" as={`/player/${player.id}`}>
        <button>Go to player profile</button>
      </Link>
    </div>
  )
}

export default SearchResult
