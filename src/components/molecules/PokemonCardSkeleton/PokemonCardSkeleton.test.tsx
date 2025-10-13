import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { PokemonCardSkeleton } from './index'

describe('PokemonCardSkeleton', () => {
  it('renders shimmer animation styles', () => {
    render(<PokemonCardSkeleton />)
    
    // Check if the style tag with shimmer animation is present
    const styleElement = document.querySelector('style')
    expect(styleElement).toBeInTheDocument()
    expect(styleElement?.textContent).toContain('@keyframes shimmer')
  })
})
