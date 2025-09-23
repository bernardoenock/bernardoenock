import { Component } from "../../../core/component.js";

export class BackgroundImage extends Component {
  constructor() {
    super("div", { attributes: { class: "top-main__background" } }, [
      new Component("img", {
          attributes: {
            src: "./assets/imgs/background.jpg",
            alt: "Background",
            class: "top-main__background-image",
          },
        }),
      ])
  };
};