import { Typography } from '@mui/material'
import { Player } from '@/types/types'
import { InjuryData } from '@/types/types'

type InjuryHistorySummaryProps = {
  player: Player
  // also will need to add player injury history data here
  injuryData: InjuryData
}

const InjuryHistorySummary = ({
  player,
  injuryData,
}: InjuryHistorySummaryProps) => {
  console.log('injury data in summary is: ', injuryData)
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
