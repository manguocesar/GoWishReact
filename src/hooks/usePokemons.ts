import { useQuery } from '@apollo/client/react'
import { GET_POKEMON } from '@/graphql/queries'
import { config } from '@/config'
import type { PokemonData, PokemonQueryVariables } from '@/types/pokemon'

export function usePokemons(limit: number = config.app.DEFAULT_POKEMON_LIMIT) {
  return useQuery<PokemonData, PokemonQueryVariables>(GET_POKEMON, {
    variables: { limit },
  })
}
