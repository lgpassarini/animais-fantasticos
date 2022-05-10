export default function initScrollSuave() {
  const linkInterno = document.querySelectorAll('.menu a[href^="#"]');
  if (linkInterno.length) {
    linkInterno.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }
}
