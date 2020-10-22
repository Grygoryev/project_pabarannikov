export const navController = () => {
  const links = [...document.getElementsByClassName('nav-link')],
    header = document.getElementById('header'),
    logo = document.getElementById('logo'),
    faculties = document.getElementById('faculties'),
    facultiesLink = document.getElementById('faculties-link'),
    facultiesCloseBtn = document.getElementById('faculties-close-btn'),
    cities = document.getElementById('cities'),
    citiesLink = document.getElementById('cities-link'),
    citiesCloseBtn = document.getElementById('cities-close-btn'), 
    isDesktop = window.innerWidth >= 1280

  document.addEventListener('click', (e) => {
    let isFaculties = e.target == facultiesLink || faculties.contains(e.target)
    let isFacultiesLink = e.target == facultiesLink || facultiesLink.contains(e.target)
    let isFacultiesOpened = faculties.classList.contains('_opened')
    let isCloseFacultiesButton = e.target == facultiesCloseBtn || facultiesCloseBtn.contains(e.target)
    let facultiesDeltaLeft = facultiesLink.getBoundingClientRect().left - faculties.offsetWidth / 5

    let isCities = e.target == citiesLink || cities.contains(e.target)
    let isCitiesLink = e.target == citiesLink || citiesLink.contains(e.target)
    let isCitiesOpened = cities.classList.contains('_opened')
    let isCloseCitiesButton = e.target == citiesCloseBtn || citiesCloseBtn.contains(e.target)
    let citiesDeltaLeft = citiesLink.getBoundingClientRect().left - cities.offsetWidth / 5

    if (isDesktop) {
      faculties.style.cssText = `left: ${facultiesDeltaLeft}px; top: 100%;`
      cities.style.cssText = `left: ${citiesDeltaLeft}px; top: 100%`
    }

    if (isCitiesLink && !isCitiesOpened) {
      cities.classList.add('_opened')
      citiesLink.classList.add('_active')
      isDesktop ? '' : document.querySelector('html').style.overflowY = 'hidden'
    }

    if (!isCities && isCitiesOpened || isCloseCitiesButton) {
      cities.classList.remove('_opened')
      citiesLink.classList.remove('_active')
      isDesktop ?  '' : document.querySelector('html').style.overflowY = ''
    }

    if (isFacultiesLink && !isFacultiesOpened) {
      faculties.classList.add('_opened')
      facultiesLink.classList.add('_active')
      isDesktop ? '' : document.querySelector('html').style.overflowY = 'hidden'
    }

    if (!isFaculties && isFacultiesOpened || isCloseFacultiesButton) {
      faculties.classList.remove('_opened')
      facultiesLink.classList.remove('_active')
      isDesktop ?  '' : document.querySelector('html').style.overflowY = ''
    }
  })

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