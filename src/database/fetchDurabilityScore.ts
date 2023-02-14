import { server } from '../config/index'

export type fetchDurabilityScoreArgs = {
  playerFirstName: string
  playerLastName: string
}

// input: player
// output: score
export const fetchDurabilityScore = async (
  args: fetchDurabilityScoreArgs
): Promise<string> => {
  console.log('fetchDurabilityScore running')

  // TODO: get first year player entered league
  // multiply years from then to 2021 season (or if they were drafted before 2012, use 2012)
  // if they were drafted after 2012, use that year
  // all players should be viewed up until 2021
  // hit balldontlie api for this to get their drafted year / first season in the leageu

  // get total number of games missed due to injury
  // TODO: check that this data returned is correct
  const res = await fetch(
    `${server}/api/durability?player=${args.playerFirstName}+${args.playerLastName}`
  )
  const data = await res.json()

  // TODO: calculate durability score
  // divide data (total games missed) by potential games player
  // based on this percentage, assign durability score and return

  return new Promise((resolve) => {
    resolve(data)
  })
}
