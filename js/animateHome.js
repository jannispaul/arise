// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateHome() {
  console.log("animate");
  console.log("animate", gsap);
  gsap.registerPlugin(ScrollTrigger);
  // Curtain animation
  gsap.from("[data-animate='curtain']", {
    // xPercent: -100,
    width: "80%",
    ease: "none",
    scrollTrigger: {
      trigger: "[data-animate='curtain']",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("[data-animate='img-slider']", {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: "[data-animate='img-slider']",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
}
