import {
  InputLabel,
  MenuItem,
  // FormHelperText,
  FormControl,
  SelectChangeEvent,
  Select,
  Button,
} from '@mui/material'
import React, { useState } from 'react'

const InjurySearchParams = () => {
  const [startSeason, setStartSeason] = useState('')
  const [endSeason, setEndSeason] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // This is going to sumbit our form and hit
    // the API that queries our Sql db and sets
    // injury history table
    e.preventDefault()
    console.log(
      `start date is ${startSeason.slice(0, 4)}, end date is ${endSeason.slice(
        0,
        4
      )}`
    )
    console.log('submitted!')
  }

  const handleChange = (e: SelectChangeEvent) => {
    console.log('e.target is', e.target)
    if (e.target.name === 'start-season') {
      setStartSeason(e.target.value)
    } else {
      setEndSeason(e.target.value)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="start-season-label">Start Season</InputLabel>
          <Select
            labelId="start-season-label"
            value={startSeason}
            label="Start Season"
            onChange={handleChange}
            name="start-season"
          >
            <MenuItem value="">Choose Season</MenuItem>
            <MenuItem value="2012-2013">2012-2013</MenuItem>
            <MenuItem value="2013-2014">2013-2014</MenuItem>
            <MenuItem value="2014-2015">2014-2015</MenuItem>
            <MenuItem value="2015-2016">2015-2016</MenuItem>
            <MenuItem value="2016-2017">2016-2017</MenuItem>
            <MenuItem value="2017-2018">2017-2018</MenuItem>
            <MenuItem value="2018-2019">2018-2019</MenuItem>
            <MenuItem value="2019-2020">2019-2020</MenuItem>
            <MenuItem value="2020-2021">2020-2021</MenuItem>
            <MenuItem value="2021-2022">2021-2022</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="end-season-label">End Season</InputLabel>
          <Select
            labelId="end-season-label"
            value={endSeason}
            label="End Season"
            onChange={handleChange}
            name="end-season"
          >
            <MenuItem value="">Choose Season</MenuItem>
            <MenuItem value="2012-2013">2012-2013</MenuItem>
            <MenuItem value="2013-2014">2013-2014</MenuItem>
            <MenuItem value="2014-2015">2014-2015</MenuItem>
            <MenuItem value="2015-2016">2015-2016</MenuItem>
            <MenuItem value="2016-2017">2016-2017</MenuItem>
            <MenuItem value="2017-2018">2017-2018</MenuItem>
            <MenuItem value="2018-2019">2018-2019</MenuItem>
            <MenuItem value="2019-2020">2019-2020</MenuItem>
            <MenuItem value="2020-2021">2020-2021</MenuItem>
            <MenuItem value="2021-2022">2021-2022</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit">Update Results</Button>
      </form>
    </div>
  )
}

export default InjurySearchParams
