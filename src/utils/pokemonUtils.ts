import { Pokemon } from '@/types/pokemon'

/**
 * Gets Pokemon image URL from sprites
 * sprites are the small 2D images/artwork that represent Pokemon characters
 */
export function getPokemonImageUrl(pokemon: Pokemon): string | undefined {
  const sprites = pokemon.pokemonsprites?.[0]?.sprites
  if (!sprites) return undefined

  const data = typeof sprites === 'string' ? JSON.parse(sprites) : sprites
  return data?.other?.['official-artwork']?.front_default || data?.front_default
}

