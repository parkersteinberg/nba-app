/* eslint-disable import/named */
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { InjuryData } from '@/types/types'

// colunm schema:
// injury, team, date placed on IL, date removed from IL,
// days injured, games missed
const columns: GridColDef[] = [
  { field: 'injury', headerName: 'Injury', width: 200 },
  {
    field: 'team',
    headerName: 'Team',
    width: 100,
  },
  {
    field: 'date_placed',
    headerName: 'Date placed on IL',
    type: 'string', // maybe make this type date??
    width: 150,
  },
  {
    field: 'date_activated',
    headerName: 'Date activated from IL',
    type: 'string', // maybe make this type date??
    width: 170,
  },
  {
    field: 'days_missed',
    headerName: 'Days injured',
    description:
      'Total number of days missed (during the season) due to injury.',
    type: 'number',
    width: 130,
  },
  {
    field: 'games_missed',
    headerName: 'Games missed',
    description: 'Total games missed due to injury.',
    type: 'number',
    width: 130,
  },
]

type InjuryHistoryTableProps = {
  // also will need to add player injury history data here
  injuryData: InjuryData
}

const InjuryHistoryTable = ({ injuryData }: InjuryHistoryTableProps) => {
  const { data } = injuryData

  const gridRows = data.map((row, idx) => {
    // massage data a bit or date, injury reason
    const cleanDatePlaced = new Date(row.date_placed).toISOString().slice(0, 10)
    const cleanDateActivated = new Date(row.date_activated)
      .toISOString()
      .slice(0, 10)

    const cleanInjuryReason = row.injury_reason.replace(
      ' placed on IL with ',
      ''
    )

    return {
      id: idx,
      injury: cleanInjuryReason,
      team: row.team,
      date_placed: cleanDatePlaced,
      date_activated: cleanDateActivated,
      days_missed: Number(row.injury_duration),
      games_missed: Number(row.games_missed),
    }
  })

  return (
    <div>
      {gridRows ? (
        <Box sx={{ height: 400, width: '100%', my: 6 }}>
          <Typography gutterBottom variant="h4" component="div">
            Injury History Breakdown
          </Typography>
          <DataGrid
            rows={gridRows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      ) : null}
    </div>
  )
}

export default InjuryHistoryTable
