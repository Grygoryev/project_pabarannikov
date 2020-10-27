export const programStageController = () => {
  const programStages = [...document.getElementsByClassName('program-stage')],
        header = document.getElementById('header')

  programStages.forEach(stage => {
      stage.addEventListener('click', () => {
        programStages.forEach(function(stage) {
          stage.classList.remove('_opened')
        })

      stage.classList.add('_opened')


      setTimeout(() => {
        window.scrollTo({
          top: stage.offsetTop - header.offsetHeight * 1.6,
          left: 0,
          behavior: "smooth"
        })
      }, 400)
    })
  })
}