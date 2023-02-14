/* eslint-disable import/named */
import {
  InputLabel,
  MenuItem,
  // FormHelperText,
  FormControl,
  Select,
  Button,
  Typography,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import React, { useEffect, useState } from 'react'
import InjuryHistorySummary from './InjuryHistorySummary'
import InjuryHistoryTable from './InjuryHistoryTable'
import { Player } from '@/types/types'
import { fetchInjuryData } from '@/database/fetchInjuryData'
import { InjuryDataRow } from '@/types/types'

type InjuryData = {
  data: Array<InjuryDataRow>
}

type InjurySearchParamsProps = {
  player: Player
}

const InjurySearchParams = ({ player }: InjurySearchParamsProps) => {
  const [startSeason, setStartSeason] = useState('2012-2013')
  const [endSeason, setEndSeason] = useState('2021-2022')
  const [injurySummaryYear, setInjurySummaryYear] = useState('2012-2013')
  const [injuryData, setInjuryData] = useState<InjuryData | undefined>()

  // on page load, get this player's injury data
  const getInjuryData = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault()
    // set injurySummaryYear
    setInjurySummaryYear(startSeason)

    // fetch data
    const args = {
      playerFirstName: player.first_name,
      playerLastName: player.last_name,
      startSeason,
      endSeason,
    }
    // set state with return data
    const data: InjuryData | undefined = await fetchInjuryData(args)
    console.log('data in InjurySearchParams is: ', data)
    setInjuryData(data)
    // pass that return data down to History Summary/Table
  }

  useEffect(() => {
    getInjuryData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <Typography gutterBottom variant="h5" component="div">
        Set Date Range
      </Typography>
      <form onSubmit={getInjuryData}>
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

      {injuryData ? (
        <>
          <InjuryHistorySummary
            player={player}
            injuryData={injuryData}
            injurySummaryYear={injurySummaryYear}
          />
          <InjuryHistoryTable injuryData={injuryData} />
        </>
      ) : (
        'Injury History Loading...'
      )}
    </div>
  )
}

export default InjurySearchParams
