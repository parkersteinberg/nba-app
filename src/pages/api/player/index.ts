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
  // based on the user's search, return the results
  res.status(200).json({ name: 'we got the juice' })
}
