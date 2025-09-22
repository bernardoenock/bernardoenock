import { Component } from "../../../core/component.js";

export class HomeIcon extends Component {
  constructor() {
    super("a", {
      attributes: { href: "#", "data-page": "home", class: "icon-button" }
    }, [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" width="24" height="24">
        <path d="M12 3l9.5 9.5-1.5 1.5L12 6 4 14l-1.5-1.5z"/>
        <path d="M5 13v8h5v-6h4v6h5v-8l-7-7z"/>
      </svg>`
    ]);
  }

  render() {
    const element = super.render();
    element.innerHTML = this.children.join("");
    return element;
  }
}
