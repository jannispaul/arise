// @ts-check
import { createClock } from "./createClock";
import { animateHome } from "./animateHome";
import { pageTransitions } from "./pageTransitions";
import { prettyLinks } from "./prettyLinks";
import { processHover } from "./processHover";
import { projectHover } from "./projectHover";

function init() {
  createClock();
  animateHome();
  pageTransitions();
  prettyLinks();
  processHover();
  projectHover();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
