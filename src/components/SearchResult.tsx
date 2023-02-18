import Link from 'next/link'
import {
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import { Player } from '@/types/types'
import { Box } from '@mui/system'

type SearchResultsProps = {
  player: Player
}

const SearchResult = ({ player }: SearchResultsProps) => {
  return (
    <div>
      <List>
        <Link href="/player/[id]" as={`/player/${player.id}`}>
          <ListItem disablePadding>
            <ListItemText
              primary={`${player.first_name} ${player.last_name}`}
              secondary={`${player.team.full_name}`}
              data-testid="list-item"
            ></ListItemText>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                mx: 1,
              }}
            >
              <ListItemText
                primary={'View player profile'}
                sx={{
                  mx: 1,
                }}
              ></ListItemText>
              <ListItemIcon>
                <SportsBasketballIcon></SportsBasketballIcon>
              </ListItemIcon>
            </Box>
          </ListItem>
          <Divider />
        </Link>
      </List>
    </div>
  )
}

export default SearchResult
