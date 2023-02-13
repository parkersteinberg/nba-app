import InfoIcon from '@mui/icons-material/Info'
import { Card, CardMedia, Tooltip, IconButton, Typography } from '@mui/material'
// import Image from 'next/image'

// need to pass down player object
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

type PlayerCardProps = {
  player: Player
  nbaPlayerId: string
}

const PlayerCard = ({ player, nbaPlayerId }: PlayerCardProps) => {
  return (
    <div>
      {/* material ui */}
      <Card>
        <CardMedia>
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
          />
        </CardMedia>
        <Typography gutterBottom variant="h4" component="div">
          {`${player.first_name} ${player.last_name}`}
        </Typography>
        <div className="player-info">
          <Typography gutterBottom variant="h6" component="div">
            <strong>
              Durability Score
              <Tooltip
                title="Durability Score is calculated based on the percentage of games that this player has played compared to the total number of games that the player's team played in"
                placement="top"
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
              {': '}
            </strong>
            {/* TODO: replace with durability score */}
            {'A-'}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
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
    </div>
  )
}

export default PlayerCard
