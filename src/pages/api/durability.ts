// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { queryDatabase } from '@/database'

type GamesMissed = {
  games_missed: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GamesMissed>
) {
  const { player } = req.query
  console.log('IN duability.ts endpoint..........')

  console.log(player)

  const queryString = `
  SELECT SUM(games_missed)
  FROM injury_logs 
  WHERE player = '${player}'
  `

  try {
    const result = await queryDatabase(queryString, [])
    res.status(200).json({ games_missed: result.rows[0].sum })
  } catch {
    console.log('error found in durability.ts endpoint!')
  }
}
