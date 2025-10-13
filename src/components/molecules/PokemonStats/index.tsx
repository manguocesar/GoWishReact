import React from 'react'
import { Badge } from '@/components/atoms'

export interface PokemonStatsProps {
  height: number
  weight: number
  types: string[]
  abilities: string[]
}

const PokemonStats: React.FC<PokemonStatsProps> = ({
  height,
  weight,
  types,
  abilities,
}) => {
  return (
    <div className="space-y-3">
      <p className="text-gray-600 text-center">
        <span className="font-semibold">Height:</span> {(Number(height) / 10).toFixed(1)} m
      </p>
      <p className="text-gray-600 text-center">
        <span className="font-semibold">Weight:</span> {(Number(weight) / 10).toFixed(1)} kg
      </p>
      
      {/* Types */}
      {types.length > 0 && (
          <div className="flex justify-center items-center gap-1 flex-wrap">
            <span className="font-semibold text-gray-600">Types:</span>
              {types.map((type) => (
                  <Badge key={type} variant="type">
                    {type}
                  </Badge>
              ))}
        </div>
      )}
      
      {/* Abilities */}
      {abilities.length > 0 && (
            <div className="flex items-center gap-1 flex-wrap justify-center mt-2">
            <span className="font-semibold text-gray-600">Abilities:</span>
              {abilities.map((ability) => (
                  <Badge key={ability} variant="ability">
                    {ability}
                  </Badge>
              ))}
          </div>
      )}
    </div>
  )
}

export { PokemonStats }
