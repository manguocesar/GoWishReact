import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './index'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A simple badge component for displaying Pokemon types and abilities with consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Badge content',
    },
    variant: {
      control: { type: 'select' },
      options: ['type', 'ability'],
      description: 'Badge variant style',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Type: Story = {
  args: {
    children: 'fire',
    variant: 'type',
  },
}

export const Ability: Story = {
  args: {
    children: 'blaze',
    variant: 'ability',
  },
}
