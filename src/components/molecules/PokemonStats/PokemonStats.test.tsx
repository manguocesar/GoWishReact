import { render, screen } from '@testing-library/react'
import { PokemonStats } from './index'

describe('PokemonStats', () => {
  it('renders height and weight correctly', () => {
    render(
      <PokemonStats
        height={70}
        weight={65}
        types={['fire']}
        abilities={['blaze']}
      />
    )
    
    expect(screen.getByText((_, element) => {
      return element?.textContent === 'Height: 7.0 m'
    })).toBeInTheDocument()
    expect(screen.getByText((_, element) => {
      return element?.textContent === 'Weight: 6.5 kg'
    })).toBeInTheDocument()
  })

  it('renders types correctly', () => {
    render(
      <PokemonStats
        height={70}
        weight={65}
        types={['fire', 'flying']}
        abilities={['blaze']}
      />
    )
    
    expect(screen.getByText('Types:')).toBeInTheDocument()
    expect(screen.getByText('fire')).toBeInTheDocument()
    expect(screen.getByText('flying')).toBeInTheDocument()
  })

  it('renders abilities correctly', () => {
    render(
      <PokemonStats
        height={70}
        weight={65}
        types={['fire']}
        abilities={['blaze', 'solar-power']}
      />
    )
    
    expect(screen.getByText('Abilities:')).toBeInTheDocument()
    expect(screen.getByText('blaze')).toBeInTheDocument()
    expect(screen.getByText('solar-power')).toBeInTheDocument()
  })

  it('handles empty types and abilities', () => {
    render(
      <PokemonStats
        height={70}
        weight={65}
        types={[]}
        abilities={[]}
      />
    )
    
    expect(screen.getByText((_, element) => {
      return element?.textContent === 'Height: 7.0 m'
    })).toBeInTheDocument()
    expect(screen.getByText((_, element) => {
      return element?.textContent === 'Weight: 6.5 kg'
    })).toBeInTheDocument()
    expect(screen.queryByText('Types:')).not.toBeInTheDocument()
    expect(screen.queryByText('Abilities:')).not.toBeInTheDocument()
  })
})
