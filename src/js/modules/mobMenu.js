export const mobMenu = () => {
  const menuBtn = document.getElementById('mobile-menu-btn'),
        header = document.getElementById('header');

  menuBtn.addEventListener('click', () => header.classList.toggle('_opened'));
}