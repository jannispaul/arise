// @ts-check
import { createClock } from "./createClock";
import { animateHome } from "./animateHome";
import { pageTransitions } from "./pageTransitions";

function init() {
  createClock();
  animateHome();
  pageTransitions();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
