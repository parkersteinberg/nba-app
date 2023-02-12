import React, { useState } from 'react'
import SearchResult from './SearchResult'
import { TextField, Button } from '@mui/material'

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

const SearchParams = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasResults, setHasResults] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    console.log('searchInput is:', searchInput)
    const res = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${searchInput}&per_page=100`
    )
    console.log(`rest is ${res}`)
    const { data } = await res.json()
    console.log(data)

    setHasResults(true)
    setSearchResults(data)
    setIsLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <TextField
          id="filled-basic"
          label="Search For Player"
          variant="filled"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>

      <div>
        {isLoading && (
          <div>
            <p>Loading results...</p>
          </div>
        )}
      </div>

      {hasResults &&
        searchResults.map((player: Player) => {
          return <SearchResult key={player.id} player={player} />
        })}
    </div>
  )
}

export default SearchParams
