/* eslint-disable import/named */
import { Box, Typography, Tooltip, IconButton } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import InfoIcon from '@mui/icons-material/Info'
import { InjuryData } from '@/types/types'

// define column schema
const columns: GridColDef[] = [
  { field: 'injury', headerName: 'Injury', width: 200 },

  {
    field: 'team',
    headerName: 'Team',
    width: 100,
  },
  {
    field: 'games_missed',
    headerName: 'Games missed',
    description: 'Total games missed due to injury.',
    type: 'number',
    width: 130,
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
    field: 'date_placed',
    headerName: 'Date placed on IL',
    type: 'string',
    width: 150,
  },
  {
    field: 'date_activated',
    headerName: 'Date activated from IL',
    type: 'string',
    width: 170,
  },
]

type InjuryHistoryTableProps = {
  injuryData: InjuryData
}

const InjuryHistoryTable = ({ injuryData }: InjuryHistoryTableProps) => {
  const { data } = injuryData

  const gridRows = data.map((row, idx) => {
    // massage data to get clean version of date & injury reason
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
        <Box
          sx={{
            height: 500,
            minWidth: 800,
            my: 6,
          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            Injury History Breakdown
            <Tooltip
              title="Sort, filter, and customize columns in this table by clicking the menu icon at the header of any column"
              placement="top"
            >
              <IconButton sx={{ transform: 'scale(0.9)' }}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
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
