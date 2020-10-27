export const imageLoadDelay = () => {
  const introContainer = document.getElementById('intro-container'),
        introBGMob = introContainer.dataset.backgroundMob,
        introBGDesktop = introContainer.dataset.backgroundDesktop,

        benefits = document.getElementById('course-type__benefits'),
        benefitsOnline = document.getElementById('course-benefits-online'),
        benefitsOnlineBGMob = benefitsOnline.dataset.backgroundMob,
        benefitsOnlineBGDesktop = benefitsOnline.dataset.backgroundDesktop,
        benefitsOffline = document.getElementById('course-benefits-offline'),
        benefitsOfflineBGMob = benefitsOffline.dataset.backgroundMob,
        benefitsOfflineBGDesktop = benefitsOffline.dataset.backgroundDesktop

  const isDesktop = window.innerWidth >= 1280

  if (isDesktop) {
    introContainer.style.backgroundImage = `url('${introBGDesktop}')`
  }

  document.addEventListener('scroll', lazyLoadBenefits)

  function lazyLoadBenefits() {
    let scrollPointToLoad = pageYOffset + window.innerHeight - 100

    if (scrollPointToLoad >= benefits.offsetTop && !isDesktop) {
      benefitsOnline.style.backgroundImage = `url('${benefitsOnlineBGMob}')`
      benefitsOffline.style.backgroundImage = `url('${benefitsOfflineBGMob}')`
      document.removeEventListener('scroll', lazyLoadBenefits)
    }

    if (scrollPointToLoad >= benefits.offsetTop && isDesktop) {
      benefitsOnline.style.backgroundImage = `url('${benefitsOnlineBGDesktop}')`
      benefitsOffline.style.backgroundImage = `url('${benefitsOfflineBGDesktop}')`
      document.removeEventListener('scroll', lazyLoadBenefits)
    }
  }
}