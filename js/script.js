import initTabNav from "./modules/tab-nav.js";
import Accordion from "./modules/acordion.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initScrollAtivar from "./modules/scroll-ativar.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltipbox.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"]');
scrollSuave.init();

const accordionList = new Accordion(".faq dl dt");
accordionList.init();

initTabNav();
initScrollAtivar();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
