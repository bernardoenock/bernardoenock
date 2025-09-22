import { Component } from "../../../core/component.js";

export class ToggleButton extends Component {
  constructor(onClick) {
    super("button", {
      attributes: { class: "theme-toggle-button" },
      events: { click: onClick }
    }, [
      "Alternar Tema"
    ]);
  }
}