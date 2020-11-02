export const scrollArrow = () => {
  let arrow = document.getElementById('scroll-arrow'),
      programSection = document.getElementById('program'),
      actionSection = document.getElementById('action')


  window.onscroll = () => {
    if (pageYOffset > programSection.offsetTop && pageYOffset < actionSection.offsetTop - 100) {
      arrow.classList.add('_visible')
    } else {
      arrow.classList.remove('_visible')
    }
  }
}