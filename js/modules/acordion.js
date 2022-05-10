export default function initAccordion() {
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
