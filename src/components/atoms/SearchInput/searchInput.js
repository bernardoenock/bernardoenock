import { Component } from "../../../core/component.js";
import { GlobalState } from "../../../core/stateManager.js";

export class SearchInput extends Component {
  constructor(placeholder = "Buscar...") {
    super("input", {
      attributes: {
        type: "text",
        placeholder,
        id: "search-input"
      },
      events: {
        input: (event) => {
          GlobalState.setState("searchQuery", event.target.value);
        }
      }
    });
  }
}
