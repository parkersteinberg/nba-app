import InfoIcon from '@mui/icons-material/Info'
import {
  Card,
  CardMedia,
  Tooltip,
  IconButton,
  Typography,
  Box,
} from '@mui/material'
import { Player } from '@/types/types'
// import Image from 'next/image'

type PlayerCardProps = {
  player: Player
  nbaPlayerId: string
}

const PlayerCard = ({ player, nbaPlayerId }: PlayerCardProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {/* material ui */}
      <Card sx={{ boxShadow: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia sx={{ mx: 2, mt: 2 }}>
            {/* <Image
            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${nbaPlayerId}.png`}
            alt="player headshot"
            width={100}
            height={100}
          /> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${nbaPlayerId}.png`}
              alt="player headshot"
              style={{ borderRadius: '50%', transform: 'scale(0.8)' }}
            />
          </CardMedia>
        </Box>
        <Typography gutterBottom variant="h4" component="div" sx={{ mx: 3 }}>
          {`${player.first_name} ${player.last_name}`}
        </Typography>
        <div className="player-info">
          <Typography gutterBottom variant="h6" component="div" sx={{ ml: 3 }}>
            <strong>
              Durability Score
              <Tooltip
                title="Durability Score is calculated based on the percentage of games that this player has played compared to the total number of games that the player's team played in"
                placement="top"
              >
                <IconButton sx={{ transform: 'scale(0.9)' }}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
              {': '}
              {'A-'}
            </strong>
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            sx={{ ml: 3, mb: 2 }}
          >
            <ul>
              <li>
                <strong>Team:</strong> {player.team.full_name}
              </li>
              <li>
                <strong>Position:</strong>{' '}
                {player.position ? player.position : 'Not available'}
              </li>
              <li>
                <strong>Height:</strong>{' '}
                {player.height_feet
                  ? `${player.height_feet}'${player.height_inches}"`
                  : 'Not available'}
              </li>
              <li>
                <strong>Weight:</strong>{' '}
                {player.weight_pounds
                  ? `${player.weight_pounds} lbs`
                  : 'Not available'}
              </li>
            </ul>
          </Typography>
        </div>
      </Card>
    </Box>
  )
}

export default PlayerCard
