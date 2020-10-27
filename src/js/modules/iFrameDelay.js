export const iFrameDelay = () => {
  const iframe = document.getElementById('promo-video'),
        link = iframe.dataset.src
  setTimeout(() => {
    iframe.src = link
  }, 2000)
}