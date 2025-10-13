
export const config = {
  api: {
    POKEAPI_GRAPHQL: 'https://graphql.pokeapi.co/v1beta2',
  },
  app: {
    DEFAULT_POKEMON_LIMIT: 50,
  },
  swiper: {
    DEFAULT_BREAKPOINTS: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    SKELETON_CARDS_COUNT: 6, // Based on max slidesPerView
  },
} as const

export type Config = typeof config
