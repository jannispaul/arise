export function magneticHover() {
  // ====== DEFAULT DECLARE ====== //
  const buttons = document.querySelectorAll("[data-element='process-item']");
  // ======BUTTON EVENT====== //
  buttons.forEach((buttonBox) => {
    buttonBox.addEventListener("mousemove", (e) => {
      const position = buttonBox.getBoundingClientRect();
      //Get the correct position of cursor when hover to the button
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;
      console.log(e.pageY, position.top, y, buttonBox);

      //Set the button position
      buttonBox.style.transition = "transform 100ms ease";
      buttonBox.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`;
    });

    //It change postion but not go back to the original positon, so what we should do
    buttonBox.addEventListener("mouseout", () => {
      buttonBox.style.transform = `translate(0px, 0px)`;
    });
  });
}
