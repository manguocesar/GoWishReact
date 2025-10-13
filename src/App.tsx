import { PokemonList } from './pages'
import { ErrorBoundary } from './components/ErrorBoundary'

export const App = () => (
  <ErrorBoundary>
    <PokemonList />
  </ErrorBoundary>
)
