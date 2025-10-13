import { gql } from '@apollo/client'

export const GET_POKEMON = gql`
  query GetPokemon($limit: Int!) {
    pokemon(limit: $limit) {
      id
      name
      height
      weight
      pokemontypes {
        type {
          name
        }
      }
      pokemonabilities {
        ability {
          name
        }
      }
      pokemonsprites {
        sprites
      }
    }
  }
`
