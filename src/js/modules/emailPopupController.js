export const emailPopupController = () => {
  let actionForm = document.getElementById('action-form'),
      emailForm = document.getElementById('email-form'),
      emailPopupContainer = document.getElementById('email-popup-container'),
      closeBtn = document.getElementById('email-popup-close-btn')

  setTimeout(() => emailForm.style.display = 'flex', 1500)

  actionForm.onsubmit = (e) => {
    e.preventDefault();
    emailForm.classList.add('_visible')
    frozeScrollY()
  }

  emailForm.onsubmit = (e) => {
    e.preventDefault()
    emailForm.classList.remove('_visible')
    unFrozeScrollY()
  }

  document.addEventListener('click', (e) => {
    let isPopup = e.target == emailPopupContainer || emailPopupContainer.contains(e.target),
        isCloseBtn = e.target == closeBtn || closeBtn.contains(e.target)

    if (!isPopup && !isCloseBtn) {
      emailForm.classList.remove('_visible');
      unFrozeScrollY()
    }

    if (isCloseBtn) {
      emailForm.classList.remove('_visible')
      unFrozeScrollY()
    }

  })

  function frozeScrollY() {
    return document.querySelector('html').style.overflowY = 'hidden'
  }

  function unFrozeScrollY() {
    return document.querySelector('html').style.overflowY = ''
  }
}