export const headerController = () => {
  const menuBtn = document.getElementById('mobile-menu-btn'),
        header = document.getElementById('header'),
        stickyBtn = document.getElementById('header-sticky-btn'),
        programSection = document.getElementById('program'),
        actionSection = document.getElementById('action');

  menuBtn.addEventListener('click', () => header.classList.toggle('_opened'));

  window.onscroll = () => {
    if (pageYOffset > programSection.offsetTop && pageYOffset < actionSection.offsetTop) {
      stickyBtn.classList.add('_visible')
    } else {
      stickyBtn.classList.remove('_visible')
    }
  }
}