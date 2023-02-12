import Link from 'next/link'
import {
  List,
  ListItem,
  // ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'

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
      {/* <p>
        {player.first_name} {player.last_name} - {player.team.abbreviation}
      </p>
      <Link href="/player/[id]" as={`/player/${player.id}`}>
        <button>Go to player profile</button>
      </Link> */}

      <List>
        <Link href="/player/[id]" as={`/player/${player.id}`}>
          <ListItem disablePadding>
            <ListItemText
              primary={`${player.first_name} ${player.last_name}`}
              secondary={`${player.team.full_name}`}
            >
              <button>Go to player profile</button>
            </ListItemText>
            <ListItemIcon>
              <SportsBasketballIcon></SportsBasketballIcon>
            </ListItemIcon>
          </ListItem>
        </Link>
      </List>
    </div>
  )
}

export default SearchResult
