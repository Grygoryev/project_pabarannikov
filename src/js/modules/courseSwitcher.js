export const courseSwitcher = () => {
  const switcher = document.getElementById('course-switcher'),
        benefitsList = document.getElementById('course-type__benefits');

  switcher.addEventListener('click', () => {

    if (switcher.classList.contains('_offline')) {

      switcher.classList.remove('_offline')
      benefitsList.classList.remove('_offline')

    } else {
      switcher.classList.add('_offline')
      benefitsList.classList.add('_offline')
    }
  })


}