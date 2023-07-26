// @ts-check
export function smartVideo() {
  // Get all videos
  let allVideos = Array.from(document.querySelectorAll("video"));

  // Set screen size
  let screenSize = "mobile";
  if (window.matchMedia("(max-width: 767px)").matches) {
    screenSize = "mobile";
  } else if (window.matchMedia("(max-width: 991px)").matches) {
    screenSize = "tablet";
  } else {
    screenSize = "desktop";
  }

  /**
   * Function to set video source based on screenSize
   * @param {HTMLVideoElement} video
   */
  function setVideoSource(video) {
    for (let source in video.children) {
      /**
       * @type {HTMLSourceElement} videoSource
       */
      // @ts-ignore
      let videoSource = video.children[source];
      // Make sure videosource is source
      if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
        // If no size is set, just set the dataset src
        if (!videoSource.dataset?.size && videoSource.dataset.src) {
          videoSource.src = videoSource.dataset.src;
          // Otherwise only set the source for videoSource with active screenSize
        } else if (videoSource.dataset.size == screenSize && videoSource.dataset.src) {
          videoSource.src = videoSource.dataset.src;
        }
      }
    }
    // Load video
    video.load();

    // If video cant play
    // Safari battery save mode
    // Then hide controls
    video.play().catch((error) => {
      if (error.name === "NotAllowedError") {
        // console.log("battery save mode");
        video.removeAttribute("autoplay");
        video.controls = true;
        video.controls = false;
      }
    });
  }

  // Intersection observer for lazy loading
  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          // @ts-ignore
          // Set the video source
          setVideoSource(video.target);
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });
  }

  // Loop through all videos
  allVideos.forEach((video) => {
    // Set video source on all non lazy videos
    if (video.getAttribute("loading") !== "lazy") {
      setVideoSource(video);
      // And start observing all lazy video
    } else if (video.getAttribute("loading") === "lazy") {
      lazyVideoObserver.observe(video);
    }
  });
}
