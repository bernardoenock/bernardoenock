import { MarkdownRenderer } from "./core/markdownRenderer.js";
import { Router } from "./core/router.js";
import { GlobalState } from "./core/stateManager.js";
import { HeaderTemplate } from "./components/templates/Header/header.js";
import { MainTemplate } from "./components/templates/Main/main.js";

const links = [
  { page: "home", label: "Home" },
  { page: "about", label: "Sobre" },
  { page: "contacts", label: "Contato" }
];

HeaderTemplate(links).renderInto(document.body);

const main = MainTemplate("content");
main.renderInto(document.body);

const renderer = new MarkdownRenderer("content");
const router = new Router(renderer);
router.init();

GlobalState.subscribe("searchQuery", (query) => {
  console.log("🔍 Busca:", query);
});
