export {}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// we can use this file for the player search
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // fetch all of the data from the API and return it here
  console.log(`current playerId is ${req.query.id}`)
  res.status(200).json({ name: 'specific player' })
}
