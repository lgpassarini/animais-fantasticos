export default function initNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNumeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incr = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incr;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
