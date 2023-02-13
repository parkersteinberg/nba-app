import { Typography } from '@mui/material'
import { Player } from '@/types/types'
import { InjuryData } from '@/types/types'

type InjuryHistorySummaryProps = {
  player: Player
  // also will need to add player injury history data here
  injuryData: InjuryData
  startSeason: string
}

const InjuryHistorySummary = ({
  player,
  injuryData,
  startSeason,
}: InjuryHistorySummaryProps) => {
  console.log('injury data in summary is: ', injuryData)
  // do some calculations upon render for summary stats
  const { data } = injuryData
  const numInjuries = data.length
  const daysMissedArr = data.map((injury) => Number(injury.injury_duration))
  const gamesMissedArr = data.map((injury) => Number(injury.games_missed))
  const totalDaysMissed: number = daysMissedArr.reduce((acc, curr): number => {
    return acc + curr
  })
  const totalGamesMissed: number = gamesMissedArr.reduce(
    (acc, curr): number => {
      return acc + curr
    }
  )

  return (
    <div>
      <div className="injury-history-title">
        <Typography gutterBottom variant="h4" component="div">
          {`Summary of Injury History`}
        </Typography>
      </div>
      <div className="injury-history-text">
        <Typography gutterBottom variant="body1" component="div">
          {/* MAYBE COME BACK AND MAKE DATES DYNAMIC */}
          Since the <strong>{`${startSeason} season`}</strong>
          {`, `}
          <strong>{`${player.first_name} ${player.last_name}`}</strong> has
          sustained a total of <strong>{`${numInjuries} injuries`}</strong>, has
          been injured for a total of{' '}
          <strong>{`${totalDaysMissed}`} days</strong>, and has missed{' '}
          <strong>{`${totalGamesMissed}`} games</strong>
        </Typography>
      </div>
    </div>
  )
}

export default InjuryHistorySummary
