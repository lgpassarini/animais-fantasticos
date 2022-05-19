export default function initFetchBitcoin() {
  const btc = document.querySelector(".btc-preco");

  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      btc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    });
}
