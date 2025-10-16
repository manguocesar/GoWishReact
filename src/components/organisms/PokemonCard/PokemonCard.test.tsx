import { render, screen } from '@testing-library/react'
import { PokemonCard } from './index'

const mockPokemon = {
  id: 1,
  name: 'bulbasaur',
  height: 7,
  weight: 69,
  pokemontypes: [
    { type: { name: 'grass' } },
    { type: { name: 'poison' } }
  ],
  pokemonabilities: [
    { ability: { name: 'overgrow' } },
    { ability: { name: 'chlorophyll' } }
  ],
  pokemonsprites: [
    {
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'https://example.com/bulbasaur.png'
          }
        }
      }
    }
  ]
}

describe('PokemonCard', () => {
  it('renders pokemon name', () => {
    render(<PokemonCard pokemon={mockPokemon} />)
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
  })

  it('renders pokemon height and weight', () => {
    render(<PokemonCard pokemon={mockPokemon} />)
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Height: 0.7 m'
    })).toBeInTheDocument()
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Weight: 6.9 kg'
    })).toBeInTheDocument()
  })

  it('renders pokemon types', () => {
    render(<PokemonCard pokemon={mockPokemon} />)
    expect(screen.getByText('Types:')).toBeInTheDocument()
    expect(screen.getByText('grass')).toBeInTheDocument()
    expect(screen.getByText('poison')).toBeInTheDocument()
  })

  it('renders pokemon abilities', () => {
    render(<PokemonCard pokemon={mockPokemon} />)
    expect(screen.getByText('Abilities:')).toBeInTheDocument()
    expect(screen.getByText('overgrow')).toBeInTheDocument()
    expect(screen.getByText('chlorophyll')).toBeInTheDocument()
  })

  it('renders pokemon image when available', () => {
    render(<PokemonCard pokemon={mockPokemon} />)
    const image = screen.getByAltText('bulbasaur')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://example.com/bulbasaur.png')
  })

  it('renders fallback when no image available', () => {
    const pokemonWithoutImage = {
      ...mockPokemon,
      pokemonsprites: []
    }
    render(<PokemonCard pokemon={pokemonWithoutImage} />)
    expect(screen.getByText('Image Incorrect')).toBeInTheDocument()
  })

  it('handles pokemon with no types', () => {
    const pokemonWithoutTypes = {
      ...mockPokemon,
      pokemontypes: []
    }
    render(<PokemonCard pokemon={pokemonWithoutTypes} />)
    expect(screen.queryByText('Types:')).not.toBeInTheDocument()
  })

  it('handles pokemon with no abilities', () => {
    const pokemonWithoutAbilities = {
      ...mockPokemon,
      pokemonabilities: []
    }
    render(<PokemonCard pokemon={pokemonWithoutAbilities} />)
    expect(screen.queryByText('Abilities:')).not.toBeInTheDocument()
  })

  it('limits abilities to first 2', () => {
    const pokemonWithManyAbilities = {
      ...mockPokemon,
      pokemonabilities: [
        { ability: { name: 'ability1' } },
        { ability: { name: 'ability2' } },
        { ability: { name: 'ability3' } },
        { ability: { name: 'ability4' } }
      ]
    }
    render(<PokemonCard pokemon={pokemonWithManyAbilities} />)
    expect(screen.getByText('ability1')).toBeInTheDocument()
    expect(screen.getByText('ability2')).toBeInTheDocument()
    expect(screen.queryByText('ability3')).not.toBeInTheDocument()
    expect(screen.queryByText('ability4')).not.toBeInTheDocument()
  })

})
