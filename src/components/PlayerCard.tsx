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
      <div className="player-name">
        <div className="player-info-container">
          <div className="player-img">
            <img
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${nbaPlayerId}.png`}
              alt="player headshot"
            />
          </div>
          <div className="player-info">
            <h2>{`${player.first_name} ${player.last_name}`}</h2>
            <ul>
              <li>Team: {player.team.full_name}</li>
              <li>Position: {player.position}</li>
              <li>
                Height: {`${player.height_feet}'${player.height_inches}"`}
              </li>
              <li>Weight: {player.weight_pounds} lbs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
