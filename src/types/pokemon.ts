export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  pokemontypes?: Array<{ type: { name: string } }>
  pokemonabilities?: Array<{ ability: { name: string } }>
  pokemonsprites?: Array<{
    sprites: string | {
      front_default?: string
      other?: {
        'official-artwork'?: {
          front_default?: string
        }
        home?: {
          front_default?: string
        }
      }
    }
  }>
}

export interface PokemonData {
  pokemon: Pokemon[]
}

export interface PokemonQueryVariables {
  limit: number
}
