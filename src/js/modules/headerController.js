export const headerController = () => {
  const menuBtn = document.getElementById('mobile-menu-btn'),
        header = document.getElementById('header'),
        nav = document.getElementById('nav'),
        stickyBtn = document.getElementById('header-sticky-btn'),
        programSection = document.getElementById('program'),
        actionSection = document.getElementById('action'),
        isDesktop = window.innerWidth >= 1280


  if (isDesktop) {
    return 
  } else {

    setTimeout(() => {
      // это трюк для улучшения показателя Largest Contentfull Pain в google page speeds
      // в стилях стоит display: none, чтобы в самом начале меню не прорисовывалось
      // но переключение видимости меню через display: none/block убирает возможность плавной анимации
      // поэтому спустя 1,5 секунды после начала загрузки страницы я даю меню свойство display: block
      // и далее переключение видимости происходит засчёт opacity: 0/1
      nav.style.display = 'block'
    }, 1500)

    window.onscroll = () => {
      if (pageYOffset > programSection.offsetTop && pageYOffset < actionSection.offsetTop - 100) {
        stickyBtn.classList.add('_visible')
      } else {
        stickyBtn.classList.remove('_visible')
      }
    }
    
    menuBtn.addEventListener('click', () => header.classList.toggle('_opened'));

    document.addEventListener('click', function(e) {
        const isMenu = e.target == header || header.contains(e.target);
        const isMenuOpened = header.classList.contains('_opened');
        
        if (!isMenu && isMenuOpened) {
            header.classList.remove('_opened')
        }
    });
  }
}