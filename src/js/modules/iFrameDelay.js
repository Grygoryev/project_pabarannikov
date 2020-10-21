export const iFrameDelay = () => {
  window.onload = () => {
    const iframe = document.getElementById('promo-video')
    setTimeout(() => {
      iframe.src = 'https://www.youtube.com/embed/-tUS0BSeFzg'
    }, 5000)
  }
}