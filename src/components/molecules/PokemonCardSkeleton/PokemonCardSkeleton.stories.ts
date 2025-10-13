import type { Meta, StoryObj } from '@storybook/react'
import { PokemonCardSkeleton } from './index'

const meta: Meta<typeof PokemonCardSkeleton> = {
  title: 'Molecules/PokemonCardSkeleton',
  component: PokemonCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
