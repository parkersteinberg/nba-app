import { Typography, Box, Card } from '@mui/material'
import { Player } from '@/types/types'
import { InjuryData } from '@/types/types'

type InjuryHistorySummaryProps = {
  player: Player
  // also will need to add player injury history data here
  injuryData: InjuryData
  injurySummaryStartYear: string
  injurySummaryEndYear: string
}

const InjuryHistorySummary = ({
  player,
  injuryData,
  injurySummaryStartYear,
  injurySummaryEndYear,
}: InjuryHistorySummaryProps) => {
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
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <Box sx={{ mt: 2, px: 3 }}>
        <Typography gutterBottom variant="h4" component="div">
          {`Summary of Injury History`}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: '80%', mb: 2 }}>
        {numInjuries ? (
          <Typography gutterBottom variant="body1" component="div">
            Between the{' '}
            <strong>
              {`${injurySummaryStartYear}`} and{' '}
              {`${injurySummaryEndYear} seasons`}
            </strong>
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
      </Box>
    </Card>
  )
}

export default InjuryHistorySummary
