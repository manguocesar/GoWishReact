import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'type' | 'ability'
}

// could use generics
const Badge = ({ children, variant = 'type'}: BadgeProps) => {
  const baseClasses = 'px-2 py-1 text-xs capitalize border rounded-full font-medium'
  
  const variantClasses = {
    type: 'bg-blue-100 text-blue-800 border-blue-300',
    ability: 'bg-green-100 text-green-800 border-green-300',
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]}`
  
  return (
    <span className={classes}>
      {children}
    </span>
  )
}

export { Badge }
