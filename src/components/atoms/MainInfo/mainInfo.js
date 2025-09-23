import { Component } from "../../../core/component.js";

export class MainInfo extends Component {
  constructor() {
    super("div", { attributes: { class: "top-main__info" } }, [
        new Component("h1", { attributes: { class: "top-main__name" } }, ["Bernardo Enock"]),
        new Component("p", { attributes: { class: "top-main__position" } }, ["Desenvolvedor Full Stack"]),
        new Component("p", { attributes: { class: "top-main__headline" } }, [
          "Developer | RPA | Front | Back | TypeScript | PHP | Python | Java | C# | SQL",
        ]),
        new Component("p", { attributes: { class: "top-main__location" } }, [
          "Brasil",
        ]),
      ])
  }
}