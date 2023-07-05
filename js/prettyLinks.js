//@ts-check
export function prettyLinks() {
  const links = document.querySelectorAll("[data-element='link']");

  links.forEach((link) => (link.innerHTML = removeHttp(link.innerHTML)));

  function removeHttp(url) {
    return url.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, "");
  }
}
