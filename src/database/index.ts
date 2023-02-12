import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export const queryDatabase = (text: string, params: string[]) => {
  return pool.query(text, params)
}
