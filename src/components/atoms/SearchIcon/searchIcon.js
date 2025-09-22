import { Component } from "../../../core/component.js";

export class SearchIcon extends Component {
  constructor() {
    super("div", { attributes: { class: "search-icon" } }, [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" width="20" height="20">
        <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
        <line x1="17" y1="17" x2="22" y2="22" stroke="currentColor" stroke-width="2"/>
      </svg>`
    ]);
  }

  render() {
    const element = super.render();
    element.innerHTML = this.children.join("");
    return element;
  }
}
