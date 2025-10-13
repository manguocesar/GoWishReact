import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Card } from './index'

describe('Card', () => {
  it('renders card with children', () => {
    render(<Card>Test Card</Card>)
    expect(screen.getByText('Test Card')).toBeInTheDocument()
  })

  it('applies correct padding classes', () => {
    const { rerender } = render(<Card padding="none">No padding</Card>)
    expect(screen.getByText('No padding')).not.toHaveClass('p-2', 'p-4', 'p-6')

    rerender(<Card padding="sm">Small padding</Card>)
    expect(screen.getByText('Small padding')).toHaveClass('p-2')

    rerender(<Card padding="md">Medium padding</Card>)
    expect(screen.getByText('Medium padding')).toHaveClass('p-4')

    rerender(<Card padding="lg">Large padding</Card>)
    expect(screen.getByText('Large padding')).toHaveClass('p-6')
  })

  it('applies correct shadow classes', () => {
    const { rerender } = render(<Card shadow="none">No shadow</Card>)
    expect(screen.getByText('No shadow')).not.toHaveClass('shadow-sm', 'shadow-lg', 'shadow-xl', 'shadow-2xl')

    rerender(<Card shadow="md">Medium shadow</Card>)
    expect(screen.getByText('Medium shadow')).toHaveClass('shadow-lg')
  })

  it('applies border correctly', () => {
    const { rerender } = render(<Card border={false}>No border</Card>)
    expect(screen.getByText('No border')).not.toHaveClass('border', 'border-gray-200')

    rerender(<Card border={true}>With border</Card>)
    expect(screen.getByText('With border')).toHaveClass('border', 'border-gray-200')
  })

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom</Card>)
    expect(screen.getByText('Custom')).toHaveClass('custom-class')
  })
})
