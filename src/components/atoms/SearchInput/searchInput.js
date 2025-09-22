import { Component } from "../../../core/component.js";
import { GlobalState } from "../../../core/stateManager.js";
import { SearchIcon } from "../SearchIcon/searchIcon.js";

export class SearchInput extends Component {
  constructor(placeholder = "Pesquisar") {
    const icon = new SearchIcon();

    const input = new Component("input", {
      attributes: {
        type: "text",
        placeholder,
        id: "search-input",
        class: "search-input-field",
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-label": placeholder,
      },
      events: {
        input: (event) => {
          GlobalState.setState("searchQuery", event.target.value);
        },
      },
    });

    const wrapper = new Component("div", {
      attributes: { class: "search-input-wrapper" },
    }, [icon, input]);

    super("div", { attributes: { class: "search-container" } }, [wrapper]);
  }
}
