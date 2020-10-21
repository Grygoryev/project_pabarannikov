import { headerController } from "./modules/headerController";
import { courseSwitcher } from "./modules/courseSwitcher";
import { phoneRegionSwitcher } from "./modules/phoneRegionSwitcher";
import { proofDocs } from "./modules/proofDocs";
import { navController } from "./modules/navController";
import { programStageController } from "./modules/programStageController";
import { feedbackSwiper } from "./modules/swiper"
import { feedbackSwiper2 } from "./modules/swiper"

const iFrameDelay = () => {
  const iframe = document.getElementById('promo-video')
  setTimeout(() => {
    iframe.src = 'https://www.youtube.com/embed/-tUS0BSeFzg'
  }, 5000)
}

function init() {
  courseSwitcher();
  headerController();
  phoneRegionSwitcher();
  programStageController();
  navController();
  proofDocs();
  iFrameDelay();
}

init()