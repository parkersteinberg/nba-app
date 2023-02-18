import { server } from '../config/index'

export type fetchDurabilityScoreArgs = {
  playerFirstName: string
  playerLastName: string
  playerId: number
}

// input: player
// output: score
export const fetchDurabilityScore = async (
  args: fetchDurabilityScoreArgs
): Promise<string> => {
  const { playerFirstName, playerLastName, playerId } = args

  // getting player's first season in league
  const resData = await fetch(
    `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}`
  )
  const { data } = await resData.json()
  const firstGameSeason = Number(data[1].game.season)

  // limiting scope of Durability score from 2012-2021 season (10 seasons)
  const startSeason = firstGameSeason < 2012 ? 2012 : firstGameSeason
  const endSeason = 2021

  // get total number of games missed due to injury
  const res = await fetch(
    `${server}/api/durability?player=${playerFirstName}+${playerLastName}`
  )
  const { games_missed } = await res.json()

  // calculate durability score
  const percentGamesMissed =
    (Number(games_missed) / ((endSeason - startSeason + 1) * 82)) * 100

  let durabilityScore = ''
  // assigning letter grade
  if (percentGamesMissed === 0) durabilityScore += 'N/A'
  else if (percentGamesMissed < 10) durabilityScore += 'A'
  else if (percentGamesMissed < 20) durabilityScore += 'B'
  else if (percentGamesMissed < 30) durabilityScore += 'C'
  else if (percentGamesMissed < 40) durabilityScore += 'D'
  else durabilityScore += 'F'

  // assigning + or - to letter grade
  if (percentGamesMissed % 10 > 0 && percentGamesMissed % 10 < 4)
    durabilityScore += '+'
  else if (percentGamesMissed % 10 > 6 && percentGamesMissed % 10 < 10)
    durabilityScore += '-'

  return new Promise((resolve) => {
    resolve(durabilityScore)
  })
}
