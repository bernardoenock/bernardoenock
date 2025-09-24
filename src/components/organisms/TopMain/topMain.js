import { Component } from "../../../core/component.js";
import { ProfileWrapper } from "../../molecules/ProfileWrapper/profileWrapper.js";
import { NavMain } from "../../molecules/NavMain/navMain.js";

export class TopMain extends Component {
  constructor() {

    const links = [
      { page: "home", label: "Home" },
      { page: "about", label: "Sobre" },
      { page: "contacts", label: "Contato" }
    ];

    super("section", { attributes: { class: "top-main" } }, [
      new ProfileWrapper(),
      new NavMain(links),
    ]);
  }
}
