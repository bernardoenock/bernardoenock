import { Component } from "../core/component.js";

export class NavBar extends Component {
  constructor(links) {
    const navItems = links.map(link =>
      new Component("li").appendChild(
        new Component("a", { attributes: { href: "#", "data-page": link.page } }, [link.label])
      )
    );

    const ul = new Component("ul").appendChildren(navItems);

    super("nav", {}, [ul]);
  }
}
