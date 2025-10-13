import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  border?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const Card = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  border = true,
  rounded = 'xl',
}: CardProps) => {
  const baseClasses = 'bg-white overflow-hidden'
  
  const paddingClasses = {
    none: '',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
  }
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-lg',
    lg: 'shadow-xl',
    xl: 'shadow-2xl',
  }
  
  const borderClasses = border ? 'border border-gray-200' : ''
  
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  }
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${borderClasses} ${roundedClasses[rounded]} ${className}`.trim()
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export { Card }
