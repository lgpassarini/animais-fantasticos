export default function iniTabNav() {
  const img = document.querySelectorAll(".animais-lista img");
  const descricao = document.querySelectorAll(".animais-descricao section");

  if (img.length && descricao.length) {
    function classe(event) {
      const imgClasse = event.currentTarget.classList;
      descricao.forEach((item) => {
        const direcao = item.dataset.anime;
        item.classList.remove("ativo", direcao);
        if (item.classList.contains(imgClasse)) {
          item.classList.add("ativo", direcao);
        }
      });
    }

    function handleClick(item) {
      item.addEventListener("click", classe);
    }

    img.forEach(handleClick);
  }
}
