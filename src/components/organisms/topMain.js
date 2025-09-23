import { Component } from "../../core/component.js";
import { BackgroundImage } from "../atoms/BackgroundImage/backgroundImage.js";
import { ProfileWrapper } from "../molecules/ProfileWrapper/profileWrapper.js";

export class TopMain extends Component {
  constructor() {
    super("section", { attributes: { class: "top-main" } }, [
      new BackgroundImage(),
      new ProfileWrapper(),
    ]);
  }
}
