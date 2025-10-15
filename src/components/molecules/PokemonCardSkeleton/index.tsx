import React from 'react'
import { Card } from '@/components/molecules/Card'

const SHIMMER_STYLES = `
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: calc(200px + 100%) 0; }
  }
  .shimmer {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200px 100%;
    animation: shimmer 1.5s infinite;
  }
`

const ShimmerElement = () => <div className='h-4 w-full bg-gradient-to-r from-gray-200 to-gray-300 shimmer rounded-full' />

const PokemonCardSkeleton = () => {
  return (
    <>
      <style>{SHIMMER_STYLES}</style>
      
      <Card 
        className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden"
        padding="none"
      >
        {/* Image skeleton */}
        <div className="h-48 w-48 bg-gradient-to-br from-gray-200 to-gray-300 shimmer border-2 border-gray-400" />
        
        {/* Content skeleton */}
        <div className="p-4 flex-1 space-y-1 flex flex-col">
          {Array.from({ length: 4 }).map((_, index) => (
            <ShimmerElement key={index} />
          ))}
        </div>
      </Card>
    </>
  )
}

export { PokemonCardSkeleton }
