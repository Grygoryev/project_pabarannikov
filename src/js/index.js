import { headerController } from "./modules/headerController";
import { courseSwitcher } from "./modules/courseSwitcher";
import { phoneRegionSwitcher } from "./modules/phoneRegionSwitcher";
import { proofDocsController } from "./modules/proofDocsController";
import { navController } from "./modules/navController";
import { programStageController } from "./modules/programStageController";
import { feedbackSwiper } from "./modules/swiper"
import { feedbackSwiper2 } from "./modules/swiper"
import { specialOfferController } from "./modules/specialOfferController"
import { iFrameDelay } from "./modules/iFrameDelay"
import { imageLoadDelay } from "./modules/imageLoadDelay";
import { scrollArrow } from "./modules/scrollArrow";
import { emailPopupController } from "./modules/emailPopupController";

function init() {
  imageLoadDelay();
  courseSwitcher();
  headerController();
  phoneRegionSwitcher();
  programStageController();
  navController();
  proofDocsController();
  iFrameDelay();
  specialOfferController();
  scrollArrow();
  emailPopupController();
}

init()