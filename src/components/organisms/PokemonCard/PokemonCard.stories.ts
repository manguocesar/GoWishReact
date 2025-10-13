import type { Meta, StoryObj } from '@storybook/react'
import { PokemonCard } from './index'

const meta: Meta<typeof PokemonCard> = {
  title: 'Organisms/PokemonCard',
  component: PokemonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

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
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          }
        }
      }
    }
  ]
}

const mockPokemonNoImage = {
  id: 2,
  name: 'ivysaur',
  height: 10,
  weight: 130,
  pokemontypes: [
    { type: { name: 'grass' } },
    { type: { name: 'poison' } }
  ],
  pokemonabilities: [
    { ability: { name: 'overgrow' } },
    { ability: { name: 'chlorophyll' } }
  ],
  pokemonsprites: []
}

export const Default: Story = {
  args: {
    pokemon: mockPokemon,
  },
}

export const NoImage: Story = {
  args: {
    pokemon: mockPokemonNoImage,
  },
}

export const SingleType: Story = {
  args: {
    pokemon: {
      ...mockPokemon,
      pokemontypes: [{ type: { name: 'fire' } }],
      pokemonabilities: [{ ability: { name: 'blaze' } }]
    },
  },
}

export const ManyAbilities: Story = {
  args: {
    pokemon: {
      ...mockPokemon,
      pokemonabilities: [
        { ability: { name: 'overgrow' } },
        { ability: { name: 'chlorophyll' } },
        { ability: { name: 'thick-fat' } },
        { ability: { name: 'solar-power' } }
      ]
    },
  },
}

