import { InjuryData } from '@/types/types'

type fetchInjuryDataArgs = {
  playerFirstName: string
  playerLastName: string
  startSeason: string
  endSeason: string
}

export const fetchInjuryData = async (
  args: fetchInjuryDataArgs
): Promise<InjuryData> => {
  console.log('fetchInjuryData running')
  console.log(args.startSeason, args.endSeason)
  const startYear = args.startSeason.slice(0, 4)
  const endYear = args.endSeason.slice(0, 4)
  const res = await fetch(
    `/api/injury?player=${args.playerFirstName}+${args.playerLastName}&startYear=${startYear}&endYear=${endYear}`
  )
  const data = await res.json()
  console.log('data is', data)
  return new Promise((resolve) => {
    resolve(data)
  })
}
