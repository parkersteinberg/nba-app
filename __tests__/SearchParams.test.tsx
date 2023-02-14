/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import SearchParams from '../src/components/SearchParams'

describe('SearchParams tests', () => {
  it('To render form element', () => {
    render(<SearchParams />)
    const form = screen.getByTestId('search-params-form')

    expect(form.nodeName).toBe('FORM')
  })
})
