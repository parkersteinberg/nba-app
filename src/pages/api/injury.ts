// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { queryDatabase } from '@/database'

type Data = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { player } = req.query
  console.log(player)

  const queryString = `
  SELECT * FROM injury_logs 
  WHERE player = '${player}'
  limit 5
  `
  queryDatabase(queryString, [])
    .then((result) => {
      // console.log(result)
      res.status(200).json({ data: result.rows[0] })
    })
    .catch((err) => {
      console.log('error found!', err)
    })
}
