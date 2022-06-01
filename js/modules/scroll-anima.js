export default class ScrollAnima {
  constructor(section) {
    this.section = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.5;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.section.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) {
        item.classList.add("ativo");
      } else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
  }
}
