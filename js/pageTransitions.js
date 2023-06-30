import { gsap } from "gsap";

export function pageTransitions() {
  // On page load
  gsap.to(".transition", {
    yPercent: "-100",
    duration: 0.5,
    ease: "power4.in",
  });
  gsap.to(".transition", {
    yPercent: "100",
    duration: 0,
    delay: 0.5,
  });

  let link;

  // On click
  function clickHanlder(event) {
    // Check if link was clicked
    const linkElement = event.target.closest("a");
    // Check if click was on internal link
    if (
      linkElement &&
      linkElement.getAttribute("href").startsWith("/") &&
      linkElement.getAttribute("target") !== "_blank"
    ) {
      // Prevent default needs to be far up top, otherwise event will happen before rest is executed
      event.preventDefault();
      // Get href
      link = linkElement.getAttribute("href");

      // Check if link is internal, is not anchor, and doesnt open in new tab
      if (
        link.indexOf("#") === -1 &&
        linkElement.getAttribute("target") !== "_blank"
      ) {
        // Redirect after gsap animation
        let tl = gsap.timeline({
          onComplete: redirect,
        });

        // Animation
        tl.to(".transition", {
          yPercent: 0,
          duration: "0.5",
          ease: "power2.in",
        });
      }
    }
  }

  document.addEventListener("click", clickHanlder);

  function redirect() {
    window.location = link;
  }
}
