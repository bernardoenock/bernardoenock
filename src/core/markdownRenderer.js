import { Renderer } from "./renderer.js";

export class MarkdownRenderer extends Renderer {
  constructor(targetId) {
    super();
    this.target = document.getElementById(targetId);
  }

  async render(page) {
    try {
      const response = await fetch(`assets/contents/${page}.md`);
      if (!response.ok) throw new Error(`Erro ao buscar: ${response.statusText}`);

      const markdown = await response.text();
      const htmlContent = marked.parse(markdown);
      this.target.innerHTML = htmlContent;
    } catch (err) {
      console.error(err);
      this.target.innerHTML = `<p>Erro ao carregar conteúdo.</p>`;
    }
  }
}
