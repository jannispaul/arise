// @ts-check
export function projectHover() {
  // Create the "View case study" text element
  const caseStudyText = document.createElement("div");
  caseStudyText.textContent = "View case study";
  caseStudyText.style.position = "fixed";
  caseStudyText.style.zIndex = "3";
  caseStudyText.style.display = "none";
  caseStudyText.style.pointerEvents = "none";
  caseStudyText.classList.add("project_hover_label");
  document.body.appendChild(caseStudyText);

  // Add event listeners to all elements with data-element="project-img"
  const projectImgs = document.querySelectorAll('[data-element="project-img"]');
  projectImgs.forEach((projectImg) => {
    projectImg.addEventListener("mouseover", () => {
      // Show the "View case study" text
      caseStudyText.style.display = "block";
    });

    /**
     *  event {MouseEvent}
     */
    projectImg.addEventListener("mousemove", (event) => {
      // Position the "View case study" text to follow the cursor
      // @ts-ignore
      caseStudyText.style.left = event.clientX + 40 + "px";
      // @ts-ignore
      caseStudyText.style.top = event.clientY + "px";
    });

    projectImg.addEventListener("mouseout", () => {
      // Hide the "View case study" text
      caseStudyText.style.display = "none";
    });
  });
}
