export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver() {
    const tooltipbox = criarToolTip(this);

    this.addEventListener("mousemove", onMouseMove);
    function onMouseMove(event) {
      tooltipbox.style.top = event.pageY + 20 + "px";
      tooltipbox.style.left = event.pageX + 20 + "px";
    }

    this.addEventListener("mouseleave", onMouseLeave);
    function onMouseLeave() {
      tooltipbox.remove();
      this.removeEventListener("mouseleave", onMouseLeave);
      this.removeEventListener("mousemove", onMouseMove);
    }
  }

  function criarToolTip(element) {
    const tooltipbox = document.createElement("div");
    tooltipbox.classList.add("tooltip");
    tooltipbox.innerText = element.getAttribute("aria-label");
    document.body.appendChild(tooltipbox);
    return tooltipbox;
  }
}
