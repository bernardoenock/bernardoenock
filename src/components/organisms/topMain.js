import { Component } from "../../core/component.js";

export class TopMain extends Component {
  constructor() {
    super("section", { attributes: { class: "top-main" } }, [
      // Background image
      new Component("div", { attributes: { class: "top-main__background" } }, [
        new Component("img", {
          attributes: {
            src: "./assets/imgs/background.jpg",
            alt: "Background",
            class: "top-main__background-image",
          },
        }),
      ]),

      // Profile wrapper
      new Component("div", { attributes: { class: "top-main__profile" } }, [
        // Profile image
        new Component("div", { attributes: { class: "top-main__avatar-wrapper" } }, [
          new Component("img", {
            attributes: {
              src: "./assets/imgs/me.jpeg",
              alt: "Bernardo Enock",
              class: "top-main__avatar",
            },
          }),
        ]),

        // Profile text info
        new Component("div", { attributes: { class: "top-main__info" } }, [
          new Component("h1", { attributes: { class: "top-main__name" } }, ["Bernardo Enock"]),
          new Component("p", { attributes: { class: ".top-main__position" } }, ["Desenvolvedor Full Stack"]),
          new Component("p", { attributes: { class: "top-main__headline" } }, [
            "Developer | RPA | Front | Back | TypeScript | PHP | Python | Java | C# | SQL",
          ]),
          new Component("p", { attributes: { class: "top-main__location" } }, [
            "Brasil",
          ]),
        ]),
      ]),
    ]);
  }
}
