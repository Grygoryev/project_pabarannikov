export const phoneRegionSwitcher = () => {
  const switcher = document.getElementById('region-select'),
        options = [...document.getElementsByClassName('region-select__option')],
        currentFlag = document.querySelector('.region-select__current-country')
        // flagPic = document.getElementById('region-select__option')

  switcher.addEventListener('click', () => {
    switcher.classList.toggle('_opened')
  })

  console.log(options)

  options.forEach(option => {
    option.addEventListener('click', () => {
      currentFlag.innerHTML = `
        <svg> 
            <use href=${option.dataset.iconId}></use>
        </svg>
      `
      switcher.classList.toggle('_opened')
    })
  })
}