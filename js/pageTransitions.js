import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export function pageTransitions() {
  gsap.registerPlugin(ScrollToPlugin);
  let link;

  function eventHanlder(event) {
    if (event.target.closest("[data-element='project-link']")) {
      // Stop event
      event.preventDefault();

      const anchor = event.target.closest("a");
      link = anchor.getAttribute("href");

      let html = document.querySelector("html");
      html.style.overflow = "hidden";

      // Get link and imagewrapper
      let projectLink = event.target.closest("[data-element='project-link']");
      let imageWrapper = projectLink.querySelector(".projects_img_wrap");
      let container = document.querySelector(".container");
      let x =
        container.getBoundingClientRect().x +
        parseFloat(getComputedStyle(container).paddingLeft);
      console.log(getComputedStyle(container));
      let imageRect = imageWrapper.getBoundingClientRect();
      console.log(imageRect);
      let imageClone = imageWrapper.cloneNode(true);
      imageClone.style.position = "fixed";
      imageClone.style.width = imageRect.width;
      imageClone.style.top = imageRect.y + "px";
      imageClone.style.left = imageRect.x + "px";
      imageClone.style.height = imageRect.height + "px";
      imageClone.style.width = imageRect.width + "px";
      imageClone.style.paddingTop = 0;

      imageClone.style.zIndex = "10";

      html.appendChild(imageClone);

      const innerDimensions = (node) => {
        var computedStyle = getComputedStyle(node);

        let width = node.clientWidth; // width with padding
        width -=
          parseFloat(computedStyle.paddingLeft) +
          parseFloat(computedStyle.paddingRight);
        return width;
      };
      let containerWidth = innerDimensions(container);

      let tl = gsap.timeline({
        onComplete: redirect,
      });
      tl.to(imageClone, {
        width: containerWidth,
        left: x,
        duration: 0.5,
        top: "200px",
      });
      tl.to(
        ".container",
        {
          opacity: 0.1,
          duration: 0.5,
        },
        0
      );
      //   console.log(el);
    }
  }
  document.addEventListener("click", eventHanlder);

  function redirect() {
    window.location = link;
  }
}
