import { Component } from "../../../core/component.js";

export class NavMain extends Component {
  constructor(links) {
    const navItems = links.map(link =>
      new Component("li").appendChild(
        new Component("a", { attributes: { href: "#", "data-page": link.page } }, [link.label])
      )
    );

    const ul = new Component("ul").appendChildren(navItems);

    const nav = new Component("nav").appendChildren([ul]);

    super("section", { attributes: { class: "nav-main"}}, [
      nav
    ])
  }
}