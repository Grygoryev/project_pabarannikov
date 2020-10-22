import { headerController } from "./modules/headerController";
import { courseSwitcher } from "./modules/courseSwitcher";
import { phoneRegionSwitcher } from "./modules/phoneRegionSwitcher";
import { proofDocs } from "./modules/proofDocs";
import { navController } from "./modules/navController";
import { programStageController } from "./modules/programStageController";
import { feedbackSwiper } from "./modules/swiper"
import { feedbackSwiper2 } from "./modules/swiper"
import { bannerController } from "./modules/bannerController"
import { iFrameDelay } from "./modules/iFrameDelay"

function init() {
  courseSwitcher();
  headerController();
  phoneRegionSwitcher();
  programStageController();
  navController();
  proofDocs();
  iFrameDelay();
  bannerController();
}

init()