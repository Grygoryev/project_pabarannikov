export const iFrameDelay = () => {
  const iframe = document.getElementById('promo-video')
  setTimeout(() => {
    iframe.src = 'https://www.youtube.com/embed/-tUS0BSeFzg'
  }, 2000)
}