// @ts-check
import { animateElements } from "./animateElements";
import { pageTransitions } from "./pageTransitions";
import { prettyLinks } from "./prettyLinks";
import { processHover } from "./processHover";
import { magneticHover } from "./magneticHover";
import { smartVideo } from "./smartVideo";

function init() {
  smartVideo();
  animateElements();
  pageTransitions();
  prettyLinks();
  processHover();
  magneticHover();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
