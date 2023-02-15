// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { queryDatabase } from '@/database'
import { InjuryDataRow } from '@/types/types'

type InjuryData = {
  data: Array<InjuryDataRow>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<InjuryData>
) {
  const { player, startYear, endYear } = req.query
  console.log('IN injury.ts endpoint..........')

  console.log(player, startYear, endYear)

  // calculate date to query db (input = season but we need different dates for querying the db)
  // later (when more time): add "season" field to db
  // start year --> july of that year
  // end year --> end of june of the following year
  // ALTERNATIVELY HERE: if no years sent, just use 2012 and 2021 seasons
  let queryStartYear
  let queryEndYear
  if (startYear && endYear) {
    queryStartYear = `${Number(startYear)}-07-01`
    queryEndYear = `${Number(endYear) + 1}-07-01`
  }

  // if year isn't given, don't include date_placed filters in SQL query
  const dateFilter =
    startYear && endYear
      ? `
      AND date_placed >= '${queryStartYear}'
      AND date_placed < '${queryEndYear}'
      `
      : ''

  const queryString = `
  SELECT * FROM injury_logs 
  WHERE player = '${player}'
  ${dateFilter}
  `
  // TODO: redo with async await syntax
  try {
    const result = await queryDatabase(queryString, [])
    res.status(200).json({ data: result.rows })
  } catch {
    console.log('error found in injury.ts endpoint!')
    res.status(404).json({ data: [] })
  }
}
