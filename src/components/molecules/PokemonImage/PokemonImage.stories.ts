import type { Meta, StoryObj } from '@storybook/react'
import { PokemonImage } from './index'

const meta: Meta<typeof PokemonImage> = {
  title: 'Molecules/PokemonImage',
  component: PokemonImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  args: {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    alt: 'Bulbasaur',
  },
}

export const WithoutImage: Story = {
  args: {
    alt: 'Unknown Pokemon',
  },
}
