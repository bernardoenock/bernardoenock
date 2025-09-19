import { MarkdownRenderer } from "./core/markdownRenderer.js";
import { Router } from "./core/router.js";
import { NavBar } from "./components/navbar.js";

const navBar = new NavBar([
  { page: "home", label: "Home" },
  { page: "about", label: "Sobre" },
  { page: "contacts", label: "Contato" }
]);

document.getElementById("header").appendChild(navBar.render());

const renderer = new MarkdownRenderer("content");
const router = new Router(renderer);

router.init();
