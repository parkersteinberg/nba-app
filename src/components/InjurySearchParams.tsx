/* eslint-disable import/named */
import InfoIcon from '@mui/icons-material/Info'
import {
  InputLabel,
  MenuItem,
  IconButton,
  Tooltip,
  Typography,
  FormControl,
  Select,
  Button,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import React, { useEffect, useState } from 'react'
import InjuryHistorySummary from './InjuryHistorySummary'
import InjuryHistoryTable from './InjuryHistoryTable'
import { Player } from '@/types/types'
import { fetchInjuryData } from '@/database/fetchInjuryData'
import { InjuryDataRow } from '@/types/types'
import { Box } from '@mui/system'

type InjuryData = {
  data: Array<InjuryDataRow>
}

type InjurySearchParamsProps = {
  player: Player
}

const InjurySearchParams = ({ player }: InjurySearchParamsProps) => {
  const [startSeason, setStartSeason] = useState('2012-2013')
  const [endSeason, setEndSeason] = useState('2021-2022')
  const [injurySummaryStartYear, setinjurySummaryStartYear] =
    useState('2012-2013')
  const [injurySummaryEndYear, setinjurySummaryEndYear] = useState('2021-2022')
  const [injuryData, setInjuryData] = useState<InjuryData | undefined>()

  // on page load, get this player's injury data
  const getInjuryData = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault()
    // set injury seasons
    setinjurySummaryStartYear(startSeason)
    setinjurySummaryEndYear(endSeason)

    // fetch data and set state
    const args = {
      playerFirstName: player.first_name,
      playerLastName: player.last_name,
      startSeason,
      endSeason,
    }
    const data: InjuryData | undefined = await fetchInjuryData(args)
    setInjuryData(data)
  }

  useEffect(() => {
    getInjuryData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e: SelectChangeEvent) => {
    if (e.target.name === 'start-season') {
      setStartSeason(e.target.value)
    } else {
      setEndSeason(e.target.value)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography gutterBottom variant="h5" component="div" sx={{ mt: 3 }}>
        Set Date Range
        <Tooltip
          title="Injury data available from the 2012-2013 season through the 2021-2022 season. Use the drop-down menu to filter this player's injury history"
          placement="top"
        >
          <IconButton sx={{ transform: 'scale(0.9)' }}>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Typography>
      <form onSubmit={getInjuryData}>
        <Box sx={{ display: 'flex' }}>
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
          <Button type="submit" variant="outlined">
            Update Results
          </Button>
        </Box>
      </form>

      {injuryData ? (
        <>
          <InjuryHistorySummary
            player={player}
            injuryData={injuryData}
            injurySummaryStartYear={injurySummaryStartYear}
            injurySummaryEndYear={injurySummaryEndYear}
          />
          <InjuryHistoryTable injuryData={injuryData} />
        </>
      ) : (
        'Injury History Loading...'
      )}
    </Box>
  )
}

export default InjurySearchParams
