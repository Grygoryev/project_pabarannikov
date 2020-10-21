export const programStageController = () => {
  const programStages = [...document.getElementsByClassName('program-stage')];

  programStages.forEach(stage => {

    stage.addEventListener('click', () => {
      programStages.forEach(function(stage) {
        stage.classList.remove('_opened')
      })
      stage.classList.toggle('_opened')
    })
  })
}