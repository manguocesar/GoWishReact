import { render, screen, fireEvent } from '@testing-library/react'
import { PokemonImage } from './index'

describe('PokemonImage', () => {
  it('renders image when src is provided', () => {
    render(<PokemonImage src="https://example.com/pokemon.png" alt="Test Pokemon" />)
    
    const image = screen.getByAltText('Test Pokemon')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://example.com/pokemon.png')
  })

  it('renders fallback icon when no src is provided', () => {
    render(<PokemonImage alt="Test Pokemon" />)
    
    expect(screen.getByText('Image Incorrect')).toBeInTheDocument()
    expect(screen.queryByAltText('Test Pokemon')).not.toBeInTheDocument()
  })

  it('handles image error by showing fallback', () => {
    render(<PokemonImage src="invalid-url.png" alt="Test Pokemon" />)
    
    const image = screen.getByAltText('Test Pokemon')
    expect(image).toBeInTheDocument()
    
    // Simulate image error
    fireEvent.error(image)
    expect(screen.getByText('Image Incorrect')).toBeInTheDocument()
  })

})
