function iniTabNav() {
  const img = document.querySelectorAll(".animais-lista img");
  const descricao = document.querySelectorAll(".animais-descricao section");

  if (img.length && descricao.length) {
    function classe(event) {
      const imgClasse = event.currentTarget.classList;
      descricao.forEach((item) => {
        item.classList.remove("ativo");
        if (item.classList.contains(imgClasse)) {
          item.classList.add("ativo");
        }
      });
    }

    function handleClick(item) {
      item.addEventListener("click", classe);
    }

    img.forEach(handleClick);
  }
}
iniTabNav();

function initAccordion() {
  const faqDT = document.querySelectorAll(".faq dl dt");
  if (faqDT.length) {
    faqDT.forEach((item) => {
      item.addEventListener("click", (event) => {
        const clicado = event.currentTarget;
        clicado.classList.toggle("ativo");
        clicado.nextElementSibling.classList.toggle("ativo");
      });
    });
  }
}
initAccordion();
