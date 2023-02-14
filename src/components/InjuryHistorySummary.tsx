import { Typography } from '@mui/material'
import { Player } from '@/types/types'
import { InjuryData } from '@/types/types'

type InjuryHistorySummaryProps = {
  player: Player
  // also will need to add player injury history data here
  injuryData: InjuryData
  injurySummaryYear: string
}

const InjuryHistorySummary = ({
  player,
  injuryData,
  injurySummaryYear,
}: InjuryHistorySummaryProps) => {
  console.log('injury data in summary is: ', injuryData)
  // do some calculations upon render for summary stats
  const { data } = injuryData
  let totalDaysMissed: number | null = null
  let totalGamesMissed: number | null = null
  const numInjuries = data.length
  if (numInjuries) {
    const daysMissedArr = data.map((injury) => Number(injury.injury_duration))
    const gamesMissedArr = data.map((injury) => Number(injury.games_missed))
    totalDaysMissed = daysMissedArr.reduce((acc, curr): number => {
      return acc + curr
    })
    totalGamesMissed = gamesMissedArr.reduce((acc, curr): number => {
      return acc + curr
    })
  }

  return (
    <div>
      <div className="injury-history-title">
        <Typography gutterBottom variant="h4" component="div">
          {`Summary of Injury History`}
        </Typography>
      </div>
      <div className="injury-history-text">
        {numInjuries ? (
          <Typography gutterBottom variant="body1" component="div">
            Since the <strong>{`${injurySummaryYear} season`}</strong>
            {`, `}
            <strong>{`${player.first_name} ${player.last_name}`}</strong> has
            sustained a total of <strong>{`${numInjuries} injuries`}</strong>,
            has been injured for a total of{' '}
            <strong>{`${totalDaysMissed}`} days</strong>, and has missed{' '}
            <strong>{`${totalGamesMissed}`} games</strong>
          </Typography>
        ) : (
          'No injuries found'
        )}
      </div>
    </div>
  )
}

export default InjuryHistorySummary
