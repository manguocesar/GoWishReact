import { Card } from '@/components/molecules/Card'
import { PokemonImage } from '@/components/molecules/PokemonImage'
import { PokemonStats } from '@/components/molecules/PokemonStats'
import type { Pokemon } from '@/types/pokemon'
import { getPokemonImageUrl } from '@/utils'

const MAX_ABILITIES_DISPLAYED = 2

export interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const imageUrl = getPokemonImageUrl(pokemon)
  const types = pokemon.pokemontypes?.map((t) => t.type.name) || []
  const abilities = pokemon.pokemonabilities?.map((a) => a.ability.name).slice(0, MAX_ABILITIES_DISPLAYED) || []
  
  return (
    <Card 
      className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden"
      padding="none"
    >
      <PokemonImage
        src={imageUrl}
        alt={pokemon.name}
      />
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-center text-xl text-gray-900 mb-3 capitalize">
          {pokemon.name}
        </h3>
        
        <PokemonStats
          height={pokemon.height}
          weight={pokemon.weight}
          types={types}
          abilities={abilities}
        />
      </div>
    </Card>
  )
}

export { PokemonCard }
