import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination]);

export const feedbackSwiper = new Swiper('.swiper-feedbacks-container', {
  spaceBetween: 20,
  updateOnImagesReady: true,
  pagination: {
    el: '.swiper-feedback-pagination',
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-feedback-button-next',
    prevEl: '.swiper-feedback-button-prev',
  },
})

export const feedbackSwiper2 = new Swiper('.swiper-teachers-container', {
  spaceBetween: 20,
  pagination: {
    el: '.swiper-teachers-pagination',
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-teacher-button-next',
    prevEl: '.swiper-teacher-button-prev',
  },
})