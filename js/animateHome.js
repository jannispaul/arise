// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function animateHome() {
  console.log("animate");
  // console.log("animate", gsap);
  gsap.registerPlugin(ScrollTrigger);
  // Curtain animation
  gsap.from("[data-animate='curtain']", {
    // xPercent: -100,
    width: "0%",
    duration: "2",
    ease: "power4",
    scrollTrigger: {
      trigger: "[data-animate='curtain']",
      start: "top 80%",
      scrub: false,
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

  const headings = gsap.utils.toArray("[animate='text']");
  console.log(headings);
  headings.forEach((heading) => {
    // Split text into words
    let splitClient = new SplitType(heading, {
      types: "lines, words",
      tagName: "span",
    });
    console.log(heading, splitClient);
    // text reveal animations
    gsap.from(splitClient.words, {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.02,
      autoAlpha: 0, // Prevent flash of unstyled content
      scrollTrigger: {
        start: "top 70%",
        trigger: heading,
      },
    });
  });

  // Image reveal animations
  const images = gsap.utils.toArray('[animate="image"], [animate="mask"]');
  images.forEach((image) =>
    gsap.from(image, {
      //width: "0%",
      opacity: 0,
      clipPath: "inset(0 100% 0 0%)",
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        start: "top 70%",
        trigger: image,
        //scrub: true,
      },
    })
  );
}
