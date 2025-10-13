import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "../config";

export const client = new ApolloClient({
  uri: config.api.POKEAPI_GRAPHQL, // Use config for flexibility
  cache: new InMemoryCache({
    possibleTypes: {
      // Add possible types for pokeapi GraphQL schema for type safety and caching
      Pokemon: ["pokemon"],
      Type: ["type"],
      Ability: ["ability"],
      Sprite: ["sprites"]
    },
  }),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first',
    },
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first',
    },
  },
});
