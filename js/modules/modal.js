export default function initModal() {
  const abrirModal = document.querySelector("[data-modal=abrir]");
  const containerModal = document.querySelector("[data-modal=container]");
  const fecharModal = document.querySelector("[data-modal=fechar]");

  function abrir(event) {
    event.preventDefault();
    containerModal.classList.add("ativo");
  }

  function fechar() {
    containerModal.classList.remove("ativo");
  }

  function fecharFora(event) {
    if (event.target === this) {
      fechar();
    }
  }

  if (abrirModal && containerModal && fecharModal) {
    abrirModal.addEventListener("click", abrir);
    fecharModal.addEventListener("click", fechar);
    containerModal.addEventListener("click", fecharFora);
  }
}
