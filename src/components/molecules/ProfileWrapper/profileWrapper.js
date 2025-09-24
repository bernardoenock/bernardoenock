import { Component } from "../../../core/component.js";
import { AvatarWrapper } from "../../atoms/AvatarWrapper/avatarWrapper.js";
import { MainInfo } from "../../atoms/MainInfo/mainInfo.js";
import { CardBtnsMain } from "../CardBtnsMain/cardBtnsMain.js";

export class ProfileWrapper extends Component{
  constructor() {
    super("div", { attributes: { class: "top-main__profile" } }, [
      new AvatarWrapper(),
      new CardBtnsMain(),
      new MainInfo(),
    ]);
  }
}