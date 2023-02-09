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
        <h2>Injury History Summary</h2>
      </div>
      <div className="injury-history-text">
        <p>
          {`${player.first_name} ${player.last_name}`} has been injured for a
          total of XYZ days{' '}
        </p>
      </div>
    </div>
  )
}

export default InjuryHistorySummary
