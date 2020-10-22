export const bannerController = () => {
    let banner = document.getElementById('banner'),
        bannerContainer = document.getElementById('banner-container'),
        bannerConfirmBtn = document.getElementById('banner-confirm-btn'),
        closeBannerBtn = document.getElementById('banner-close-btn'),
        isDesktop = window.innerWidth >= 1280,
        isBannerVisible = banner.classList.contains('_visible')

    if (!isDesktop && isBannerVisible) {
        document.querySelector('html').style.overflowY = 'hidden'

        document.addEventListener('click', (e) => {
            let isBannerContainer = e.target == bannerContainer || bannerContainer.contains(e.target),
                isConfirmButton = e.target == bannerConfirmBtn || bannerConfirmBtn.contains(e.target)
            
            if (!isBannerContainer || isConfirmButton) {
                banner.classList.remove('_visible')
                document.querySelector('html').style.overflowY = ''
            }
        })
    } else {
        document.body.style.paddingTop = banner.offsetHeight + 'px'

        closeBannerBtn.addEventListener('click', () => {
            banner.classList.remove('_visible')
            document.body.style.paddingTop = ''
        })
    }
}