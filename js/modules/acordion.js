export default class Accordion {
  constructor(listaDT, classe) {
    this.accordionList = document.querySelectorAll(listaDT);
    if (this.classe === undefined) {
      this.classe = "ativo";
    } else {
      this.classe = classe;
    }
  }

  adicionarEvento() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", (event) => {
        const clicado = event.currentTarget;
        clicado.classList.toggle(this.classe);
        clicado.nextElementSibling.classList.toggle(this.classe);
      });
    });
  }

  init() {
    if (this.accordionList.length) {
      this.adicionarEvento();
    }
    return this;
  }
}
