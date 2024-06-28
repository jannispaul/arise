// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function animateElements() {
  gsap.registerPlugin(ScrollTrigger);
  let firstLoad = sessionStorage.getItem("firstLoad");
  let delay = 0.25;

  if (firstLoad && JSON.parse(firstLoad) && window.location.pathname == "/") {
    delay = 1.25;
    // Nav fade in on initial home page load
    gsap.from("[data-element='nav']", {
      y: "-100%",
      opacity: 0,
      duration: "2",
      ease: "power4",
      delay: delay,
      autoAlpha: 0, // Prevent flash of unstyled content
    });
  }

  // Show nav
  gsap.from("[data-element='nav']", {
    autoAlpha: 0, // Prevent flash of unstyled content
  });

  // Curtain animation
  gsap.from("[data-animate='curtain-inner']", {
    width: "0%",
    duration: "2",
    ease: "power4",
    scrollTrigger: {
      trigger: "[data-animate='curtain-inner']",
      start: "top 80%",
      scrub: false,
    },
  });
  gsap.from("[data-animate='curtain-outer']", {
    width: "80%",
    scrollTrigger: {
      trigger: "[data-animate='curtain-outer']",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  // Image slider
  // gsap.to("[data-animate='img-slider']", {
  //   xPercent: -50,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: "[data-animate='img-slider']",
  //     start: "top bottom",
  //     end: "bottom top",
  //     scrub: 1,
  //   },
  // });
  gsap.from("[data-animate='name-badge']", {
    yPercent: 200,
    ease: "power4",
    scrollTrigger: {
      trigger: "[data-animate='name-badge']",
      start: "top 95%",
      scrub: 0,
    },
  });

  const headings = gsap.utils.toArray("[animate='text']");
  headings.forEach((heading, index) => {
    // Split text into words
    let splitClient = new SplitType(heading, {
      types: "lines, words",
      tagName: "span",
    });
    gsap.from(heading, {
      autoAlpha: 0,
    });

    let headingDelay = delay;
    index > 0 && (headingDelay = 0);
    // text reveal animations
    gsap.from(splitClient.words, {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.02,
      autoAlpha: 0, // Prevent flash of unstyled content
      delay: headingDelay,
      scrollTrigger: {
        start: "top 70%",
        trigger: heading,
      },
    });
  });

  // Image reveal animations
  const images = gsap.utils.toArray('[animate="image"], [animate="mask"]');
  images.forEach((image, index) => {
    let imageDelay = delay + 0.5;
    index > 0 && (imageDelay = 0);

    gsap.from(image, {
      //width: "0%",
      opacity: 0,
      clipPath: "inset(0 0% 100% 0%)",
      duration: 1,
      ease: "power3.inOut",
      delay: imageDelay,
      autoAlpha: 0, // Prevent flash of unstyled content
      scrollTrigger: {
        start: "top 70%",
        trigger: image,
        //scrub: true,
      },
    });
  });
}
