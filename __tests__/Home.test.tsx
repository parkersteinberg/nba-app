/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home component tests', () => {
  it('To render main tag', () => {
    render(<Home />)
    const main = screen.getByTestId('home-main')

    expect(main.nodeName).toBe('MAIN')
  })
})
