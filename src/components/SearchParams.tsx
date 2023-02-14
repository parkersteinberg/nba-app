import React, { useState } from 'react'
import SearchResult from './SearchResult'
import { TextField, Button, Box, LinearProgress } from '@mui/material'
import { Player } from '@/types/types'

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
      <form onSubmit={handleSearchSubmit} data-testid="search-params-form">
        <Box
          sx={{
            minWidth: '500px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <TextField
            id="filled-basic"
            label="Search For Player"
            variant="filled"
            onChange={handleChange}
            sx={{
              minWidth: '80%',
              mr: 1,
            }}
          />
          <Button type="submit" variant="outlined" sx={{ px: 5 }}>
            Search
          </Button>
        </Box>
      </form>

      <div>
        {isLoading ? (
          <Box sx={{ my: 4, width: '100%' }}>
            <LinearProgress />
          </Box>
        ) : (
          <Box sx={{ my: 4, width: '100%' }}></Box>
        )}
      </div>

      <div>
        {hasResults &&
          searchResults.map((player: Player) => {
            return <SearchResult key={player.id} player={player} />
          })}
      </div>
    </div>
  )
}

export default SearchParams
