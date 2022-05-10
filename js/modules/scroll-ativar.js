export default function initScrollAtivar() {
  const section = document.querySelectorAll(".js-scroll");

  if (section.length) {
    const windowMetade = window.innerHeight * 0.5;
    window.addEventListener("scroll", () => {
      section.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          item.classList.add("ativo");
        } else {
          item.classList.remove("ativo");
        }
      });
    });
  }
}
