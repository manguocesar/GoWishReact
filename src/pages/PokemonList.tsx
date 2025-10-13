import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ErrorCard } from './ErrorCard'
import { PokemonCard } from '@/components/organisms/PokemonCard'
import { PokemonCardSkeleton } from '@/components/molecules'
import { usePokemons } from '@/hooks'
import { getSwiperNavigation } from '@/utils'
import { config } from '@/config'


// Swiper button overrides - co-located with component
const SWIPER_BUTTON_STYLES = `
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 18px !important;
    font-weight: bold;
  }
`

const PokemonList = () => {
  const { loading: loadingPokemon, error, data, refetch } = usePokemons(config.app.DEFAULT_POKEMON_LIMIT)
  
  const handleRetry = () => {
    refetch()
  }
  
  const pokemonData = data?.pokemon || []
  const navigationPrefix = loadingPokemon ? 'skeleton-' : ''
  const slides = loadingPokemon 
    ? Array.from({ length: config.swiper.SKELETON_CARDS_COUNT }, (_, index) => (
        <SwiperSlide key={index}>
          <PokemonCardSkeleton />
        </SwiperSlide>
      ))
    : pokemonData.map((pokemon) => (
        <SwiperSlide key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </SwiperSlide>
      ))

  if (error) {
    return <ErrorCard onRetry={handleRetry} />
  }

  return (
    <>
      <style>{SWIPER_BUTTON_STYLES}</style>
      
      <div className="p-4 md:p-6">
        <h1 className="font-extrabold text-5xl my-5 text-gray-900 text-center">
          Pokemon Carousel
        </h1>
        
        <div className="relative max-w-7xl mx-auto px-2 md:px-0">
          <Swiper
            modules={[Navigation]}
            centeredSlides={false}
            navigation={getSwiperNavigation(navigationPrefix)}
            breakpoints={config.swiper.DEFAULT_BREAKPOINTS}
          >
            {slides}
          </Swiper>
          
          {/* Navigation Buttons */}
          <div className={`${navigationPrefix}swiper-button-prev absolute top-1/2 -left-20 -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center text-gray-600 bg-white/90 rounded-full w-12 h-12 shadow-lg transition-all duration-300 ease-in-out border border-gray-300 hover:bg-white hover:scale-110 after:content-['‹'] after:text-2xl after:font-bold`} />
          <div className={`${navigationPrefix}swiper-button-next absolute top-1/2 -right-20 -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center text-gray-600 bg-white/90 rounded-full w-12 h-12 shadow-lg transition-all duration-300 ease-in-out border border-gray-300 hover:bg-white hover:scale-110 after:content-['›'] after:text-2xl after:font-bold`} />
        </div>
      </div>
    </>
  )
}

export { PokemonList }
