import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-animacao.js';
import NavegacaoFotoTexto from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDown from './modules/dropdown-menu.js';
import Menumobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import initBitcoi from './modules/bitcoin.js';
import AccordionList from './modules/accordion.js';
import {SlideNav} from "./modules/slide.js";
//Scroll suave
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()




// accordion list

const accordionList = new AccordionList('.js-accordion .container');
accordionList.init();

// animacao imagem e texto
const tabNav = new NavegacaoFotoTexto('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

//popup Login
const modal = new Modal('[data-modal="abrir"]','.modal-container','[data-modal="fechar"]');
modal.init();

//Tooltip
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

//scroll animacao
const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init()

//DropDown Menu
const dropDown = new DropDown('[data-dropdown]')
dropDown.init()

const menuMobile = new Menumobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();
initBitcoi('https://blockchain.info/ticker','.btc-preco');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();

slide.addControl('.custom-controls');