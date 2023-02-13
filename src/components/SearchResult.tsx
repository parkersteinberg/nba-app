import Link from 'next/link'
import {
  List,
  ListItem,
  // ListItemButton,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import { Player } from '@/types/types'

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
          <Divider />
        </Link>
      </List>
    </div>
  )
}

export default SearchResult
