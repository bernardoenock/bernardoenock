import { Component } from "../../../core/component.js";

export class AvatarWrapper extends Component{
  constructor() {
    super ("div", { attributes: { class: "top-main__avatar-wrapper" } }, 
      [
        new Component("img", {
          attributes: {
            src: "./assets/imgs/me.jpeg",
            alt: "Bernardo Enock",
            class: "top-main__avatar",
          },
        }),
      ])
  }
}