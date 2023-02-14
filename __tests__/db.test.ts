/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from '@jest/globals'
import { fetchInjuryData } from '../src/database/fetchInjuryData'
import { fetchInjuryDataArgs } from '../src/database/fetchInjuryData'
import fetch from 'jest-fetch-mock'

describe('fetchInjuryData tests', () => {
  // let global: { fetch: {} }
  const exampleArgs: fetchInjuryDataArgs = {
    playerFirstName: 'LeBron',
    playerLastName: 'James',
    startSeason: '2012-2013',
    endSeason: '2013-2014',
  }

  it('Returns data with expected properties', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: 'this is the data',
      })
    )
    const results = await fetchInjuryData(exampleArgs)
    // console.log(results)
    // check properties on results
    expect(results).toHaveProperty('data')
    expect(results.data[0]).toHaveProperty('player')
    expect(results.data[0]).toHaveProperty('team')
    expect(results.data[0]).toHaveProperty('injury_reason')
    expect(results.data[0]).toHaveProperty('date_placed')
    expect(results.data[0]).toHaveProperty('date_activated')
    expect(results.data[0]).toHaveProperty('injury_duration')
    expect(results.data[0]).toHaveProperty('games_missed')
  })
})
