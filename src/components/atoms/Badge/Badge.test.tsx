import { render, screen } from '@testing-library/react'
import { Badge } from './index'

describe('Badge', () => {

  it('applies base classes to all variants', () => {
    const { rerender } = render(<Badge variant="type">Type</Badge>)
    expect(screen.getByText('Type')).toHaveClass('px-2', 'py-1', 'text-xs', 'capitalize', 'border', 'rounded-full', 'font-medium')

    rerender(<Badge variant="ability">Ability</Badge>)
    expect(screen.getByText('Ability')).toHaveClass('px-2', 'py-1', 'text-xs', 'capitalize', 'border', 'rounded-full', 'font-medium')
  })
})
