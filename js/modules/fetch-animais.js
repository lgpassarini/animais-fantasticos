import initNumeros from "./numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const response = await fetch(url);
    const animaisJson = await response.json();
    const numeros = document.querySelector(".numeros-grid");
    animaisJson.forEach((animais) => {
      const divAnimal = createAnimal(animais);
      numeros.appendChild(divAnimal);
    });
    initNumeros();
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais("./animaisapi.json");
}
