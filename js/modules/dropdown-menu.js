import initOutSideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  dropDownMenus.forEach((item) => {
    item.addEventListener("touchstart", handleClick);
    item.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    initOutSideClick(this, () => {
      this.classList.remove("active");
    });
  }
}
