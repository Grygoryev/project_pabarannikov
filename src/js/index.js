import { courseSwitcher } from "./modules/courseSwitcher.js";
import { feedbackSwiper } from "./modules/swiper.js"
import { feedbackSwiper2 } from "./modules/swiper.js"
import { mobMenu } from "./modules/mobMenu.js"
import { phoneRegionSwitcher } from "./modules/phoneRegionSwitcher.js";

function init() {
  courseSwitcher();
  mobMenu();
  phoneRegionSwitcher()
}

init()