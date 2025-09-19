import { MarkdownRenderer } from "./core/markdownRenderer.js";
import { Router } from "./core/router.js";
import { HeaderTemplate } from "./templates/header.js";
import { MainTemplate } from "./templates/main.js";

const links = [
  { page: "home", label: "Home" },
  { page: "about", label: "Sobre" },
  { page: "contacts", label: "Contato" }
];

HeaderTemplate(links).renderInto(document.body);

MainTemplate("content").renderInto(document.body);

const renderer = new MarkdownRenderer("content");
const router = new Router(renderer);
router.init();
