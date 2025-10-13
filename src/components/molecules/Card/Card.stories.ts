import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './index'

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    shadow: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    border: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Card content',
    padding: 'md',
    shadow: 'md',
    border: true,
    rounded: 'xl',
  },
}

export const NoBorder: Story = {
  args: {
    children: 'Card with no border',
    border: false,
  },
}

export const NoShadow: Story = {
  args: {
    children: 'Card with no shadow',
    shadow: 'none',
  },
}
