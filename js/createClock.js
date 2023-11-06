//@ts-check
export function createClock() {
  const timeElement = document.querySelector("[data-element='time']");
  /**
   * @type HTMLElement | null
   */
  const clockElement = document.querySelector("[data-element='clock']");

  function updateTimeAndClock() {
    if (!timeElement || !clockElement) return;

    /**
     * Date formatter options
     * @type Intl.DateTimeFormatOptions
     */
    let options = {
        timeZone: "Europe/Berlin",
        hour: "numeric",
        minute: "numeric",
      },
      formatter = new Intl.DateTimeFormat("de-DE", options);

    // Create date
    let now = formatter.format(new Date());
    // Calculate rotation
    let rotation = (360 / (12 * 60)) * (parseInt(now.split(":")[0]) * 60 + parseInt(now.split(":")[1])) - 45; // icon starts at 45 deg

    // Set time
    timeElement.innerHTML = now;
    // Set rotation
    clockElement.style.transform = `rotate(${rotation}deg)`;

    // call this function again in 1000ms
    setTimeout(updateTimeAndClock, 1000);
  }
  updateTimeAndClock();
}
