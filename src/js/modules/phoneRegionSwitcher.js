export const phoneRegionSwitcher = () => {
  const switcher = document.getElementById('region-select'),
        options = [...document.getElementsByClassName('region-select__option')],
        currentFlag = document.querySelector('.region-select__current-country'),
        currentCode = document.getElementById('region-select-code')

  switcher.addEventListener('click', () => {
    switcher.classList.toggle('_opened')
  })

  options.forEach(option => {
    option.addEventListener('click', () => {
      currentFlag.innerHTML = `
        <svg> 
            <use href=${option.dataset.iconId}></use>
        </svg>
      `
      currentCode.innerHtml = option.dataset.code
      switcher.classList.toggle('_opened')
    })
  })
}