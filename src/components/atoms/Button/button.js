import { Component } from "../../../core/component.js";


export class Button extends Component {
  constructor(
    label, 
    onClick, 
    attributes = { 
        class: "default-button", 
        id: "default-button", 
        type: "button" 
    }) {

    super("button", {
      attributes: attributes,
      events: { click: onClick },
    }, [label]);
  }

  render() {
    const element = super.render();
    element.innerHTML = this.children.join("");
    return element;
  }
}