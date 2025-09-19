export class Router {
  constructor(renderer, defaultPage = "home") {
    this.renderer = renderer;
    this.defaultPage = defaultPage;
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.renderer.render(this.defaultPage);

      document.body.addEventListener("click", (event) => {
        if (event.target.matches("a[data-page]")) {
          event.preventDefault();
          const page = event.target.dataset.page;
          this.renderer.render(page);
        }
      });
    });
  }
}
