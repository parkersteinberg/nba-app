import { describe, expect, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import SearchResult from '../src/components/SearchResult'
import { Player, Team } from '../src/types/types'

describe('SearchResults tests', () => {
  // initialize data to be used for tests
  const exampleTeam: Team = {
    abbreviation: 'BOS',
    city: 'Boston',
    conference: 'East',
    division: 'Atlantic',
    full_name: 'Boston Celticsstring',
    id: 2,
    name: 'Celtics',
  }
  const examplePlayer: Player = {
    first_name: 'Larry',
    height_feet: 6,
    height_inches: 9,
    id: 1000,
    last_name: 'Bird',
    position: 'F',
    team: exampleTeam,
    weight_pounds: 240,
  }

  it('To render player full name in result', () => {
    render(<SearchResult player={examplePlayer} />)
    const resultItem = screen.getByTestId('list-item')

    expect(resultItem.innerHTML).toEqual(expect.stringContaining('Larry Bird'))
  })

  it('To render team in result', () => {
    render(<SearchResult player={examplePlayer} />)
    const resultItem = screen.getByTestId('list-item')

    expect(resultItem.innerHTML).toEqual(
      expect.stringContaining('Boston Celtics')
    )
  })
})
