import { Component } from "../../../core/component.js";

export class Modal extends Component {
  constructor(id, title, content) {
    super("div", {
      attributes: { class: "modal hidden", id }
    }, [
      new Component("div", { attributes: { class: "modal-content" } }, [
        new Component("span", {
          attributes: { class: "close-button" },
          events: {
            click: () => {
              document.getElementById(id).classList.add("hidden");
            }
          }
        }, ["×"]),
        new Component("h2", {}, [title]),
        new Component("div", { attributes: { class: "teste" } }, [content])
      ])
    ]);
  }
}
