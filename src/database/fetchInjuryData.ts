import { InjuryData } from '@/types/types'
import { server } from '../config/index'

export type fetchInjuryDataArgs = {
  playerFirstName: string
  playerLastName: string
  startSeason: string
  endSeason: string
}

export const fetchInjuryData = async (
  args: fetchInjuryDataArgs
): Promise<InjuryData> => {
  console.log('fetchInjuryData running')
  const startYear = args.startSeason.slice(0, 4)
  const endYear = args.endSeason.slice(0, 4)
  const res = await fetch(
    `${server}/api/injury?player=${args.playerFirstName}+${args.playerLastName}&startYear=${startYear}&endYear=${endYear}`
  )
  const data = await res.json()
  return new Promise((resolve) => {
    resolve(data)
  })
}
