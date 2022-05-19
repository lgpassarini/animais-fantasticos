export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horaSemana = funcionamento.dataset.horario.split(",").map(Number);

  const agora = new Date();
  const agoraDia = agora.getDay();
  const agoraHora = agora.getHours();

  const diaAberto = diaSemana.indexOf(agoraDia) !== -1;
  const horaAberto = agoraHora >= horaSemana[0] && agoraHora < horaSemana[1];

  if (diaAberto && horaAberto) {
    funcionamento.classList.add("aberto");
  }
}
