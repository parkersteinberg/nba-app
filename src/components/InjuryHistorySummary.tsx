import { Typography } from '@mui/material'

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

type InjuryHistorySummaryProps = {
  player: Player
  // also will need to add player injury history data here
}

const InjuryHistorySummary = ({ player }: InjuryHistorySummaryProps) => {
  return (
    <div>
      <div className="injury-history-title">
        <Typography gutterBottom variant="h4" component="div">
          {`Summary of Injury History`}
        </Typography>
      </div>
      <div className="injury-history-text">
        <Typography gutterBottom variant="body1" component="div">
          Since the <strong>{`SEASON_YEAR`} season</strong>,{' '}
          {`${player.first_name} ${player.last_name}`} has sustained a total of{' '}
          <strong>{`X`} injuries</strong>, has been injured for a total of{' '}
          <strong>{`Y`} days</strong>, and has missed{' '}
          <strong>{`Z`} games</strong>
        </Typography>
      </div>
    </div>
  )
}

export default InjuryHistorySummary
