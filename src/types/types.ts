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

export type InjuryDataRow = {
  player: string
  team: string
  date_placed: string
  date_activated: string
  injury_reason: string
  games_missed: string
  injury_duration: string
}

export type InjuryData = {
  data: Array<InjuryDataRow>
}
