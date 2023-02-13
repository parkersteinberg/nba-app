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
  const { player } = req.query
  console.log(player)

  // calculate date to query db

  const queryString = `
  SELECT * FROM injury_logs 
  WHERE player = '${player}'
  limit 5
  `
  // TODO: redo with async await syntax
  try {
    const result = await queryDatabase(queryString, [])
    res.status(200).json({ data: result.rows })
  } catch {
    console.log('error found!')
  }

  // queryDatabase(queryString, [])
  //   .then((result) => {
  //     // console.log(result)
  //     res.status(200).json({ data: result.rows })
  //   })
  //   .catch((err) => {
  //     console.log('error found!', err)
  //   })
}
