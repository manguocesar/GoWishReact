import type { Meta, StoryObj } from '@storybook/react'
import { PokemonStats } from './index'

const meta: Meta<typeof PokemonStats> = {
  title: 'Molecules/PokemonStats',
  component: PokemonStats,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: { type: 'number' },
    },
    weight: {
      control: { type: 'number' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    height: 7,
    weight: 69,
    types: ['grass', 'poison'],
    abilities: ['overgrow', 'chlorophyll'],
  },
}

export const SingleType: Story = {
  args: {
    height: 6,
    weight: 85,
    types: ['fire'],
    abilities: ['blaze'],
  },
}

export const ManyAbilities: Story = {
  args: {
    height: 4,
    weight: 60,
    types: ['electric'],
    abilities: ['static', 'lightning-rod', 'surge-surfer'],
  },
}

export const NoTypes: Story = {
  args: {
    height: 3,
    weight: 40,
    types: [],
    abilities: ['limber', 'imposter'],
  },
}

export const NoAbilities: Story = {
  args: {
    height: 21,
    weight: 4600,
    types: ['normal'],
    abilities: [],
  },
}

export const Empty: Story = {
  args: {
    height: 0,
    weight: 0,
    types: [],
    abilities: [],
  },
}
