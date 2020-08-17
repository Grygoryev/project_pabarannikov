// import Swiper from '../libs/swiper.min.js';
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

export const feedbackSwiper = new Swiper('.swiper-feedbacks-container', {
  spaceBetween: 20,
  updateOnImagesReady: true,
  pagination: {
    el: '.swiper-feedback-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

export const feedbackSwiper2 = new Swiper('.swiper-teachers-container', {
  spaceBetween: 20,
  pagination: {
  el: '.swiper-teachers-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})