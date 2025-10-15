import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "../config";

export const client = new ApolloClient({
  uri: config.api.POKEAPI_GRAPHQL, // Use config for flexibility
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first', // Data rarely changes
    },
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first',
    },
  },
});
