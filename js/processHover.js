// @ts-check
import { gsap } from "gsap";

export function processHover() {
  //   console.log("hover");
  const allProcessSteps = gsap.utils.toArray("[data-element='process-item']");
  const imageWrap = document.querySelector(".process_image_wrap");
  const image = document.querySelector(".process_image");
  const processGrid = document.querySelector(".process_grid");

  function initProcessSteps() {
    allProcessSteps.forEach((item) => {
      item.addEventListener("mouseenter", processItemHover);
      item.addEventListener("mouseleave", processItemHover);
      item.addEventListener("mousemove", moveProcessImage);
    });
  }

  function moveProcessImage(e) {
    let x = e.clientX;
    let y = e.clientY;
    let xOffset = processGrid?.getBoundingClientRect().left;
    let yOffset = processGrid?.getBoundingClientRect().top;
    // console.log(ypos);
    if (!imageWrap || !xOffset || !yOffset) return;
    const tl = gsap.timeline();
    tl.to(imageWrap, {
      x: x - xOffset, //- imageWrap?.getBoundingClientRect().width * 0.5,
      y: y - yOffset - imageWrap?.getBoundingClientRect().height * 0.5,
    });
  }

  function processItemHover(e) {
    if (e.type === "mouseenter") {
      const targetImage = e.target.dataset.image;

      const t1 = gsap.timeline();
      t1.set(image, {
        backgroundImage: `url(${targetImage})`,
      }).to(imageWrap, {
        duration: 0.5,
        autoAlpha: 1,
      });
    } else if (e.type === "mouseleave") {
      const tl = gsap.timeline();
      tl.to(imageWrap, {
        duration: 0.5,
        autoAlpha: 0,
      });
    }
  }
  initProcessSteps();
}
