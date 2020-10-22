export const headerController = () => {
  const menuBtn = document.getElementById('mobile-menu-btn'),
        header = document.getElementById('header'),
        stickyBtn = document.getElementById('header-sticky-btn'),
        programSection = document.getElementById('program'),
        actionSection = document.getElementById('action'),
        isDesktop = window.innerWidth >= 1280

  
  if (isDesktop) {
    return 
  } else {
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