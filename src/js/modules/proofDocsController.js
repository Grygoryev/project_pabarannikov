export const proofDocsController = () => {
  const docs = document.getElementById('proof-docs'),
    openBtn = document.getElementById('skillproof-show-docs-btn'),
    closeBtn = document.getElementById('skillproof-hide-docs-btn'),
    docsContainer = document.querySelector('.proof-docs__container')

  document.addEventListener('click', (e) => {

    let target = e.target

    if (docs.classList.contains('_open') && target !== docsContainer && !docsContainer.contains(target)) {
      docs.classList.remove('_open')
    }

    if (target === openBtn) {
      docs.classList.add('_open')
    }

    if (target === closeBtn) {
      docs.classList.remove('_open')
    }
  })
}