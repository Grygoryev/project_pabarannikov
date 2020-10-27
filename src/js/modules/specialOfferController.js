export const specialOfferController = () => {
    let banner = document.getElementById('special-offer'),
        bannerContainer = document.getElementById('special-offer-container'),
        bannerConfirmBtn = document.getElementById('special-offer-confirm-btn'),
        closeBannerBtn = document.getElementById('special-offer-close-btn'),
        isDesktop = window.innerWidth >= 1280

    if (!banner) {
        return
    } else {
        let isBannerVisible = banner.classList.contains('_visible')

        mainLogic()
    }

    function mainLogic() {
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
}