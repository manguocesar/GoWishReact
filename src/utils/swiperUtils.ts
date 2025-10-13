/**
 * Swiper utility functions
 */

export const getSwiperNavigation = (prefix: string = '') => ({
  nextEl: `.${prefix}swiper-button-next`,
  prevEl: `.${prefix}swiper-button-prev`,
})
