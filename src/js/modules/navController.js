export const navController = () => {
  const links = [...document.getElementsByClassName('nav-link')],
    header = document.getElementById('header'),
    logo = document.getElementById('logo')

  logo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    if (window.innerWidth < 1280 && header.classList.contains('_opened')) {
      header.classList.remove('_opened')
    }
  });

  links.forEach(l => {
    l.addEventListener('click', e => {
      e.preventDefault();

      if (window.innerWidth < 1280 && header.classList.contains('_opened')) {
        header.classList.remove('_opened')
      }

      window.scrollTo({
        top: document.getElementById(l.dataset.linkTo).offsetTop - header.offsetHeight,
        left: 0,
        behavior: 'smooth'
      })
    })
  })
}