import { Component } from "../core/component.js";

export class NavBar extends Component {
  constructor(links) {
    const navItems = links.map(
      link =>
        new Component("li", {}, [
          new Component("a", { href: "#", "data-page": link.page }, [link.label])
        ])
    );

    const nav = new Component("nav", {}, [
      new Component("ul", {}, navItems)
    ]);

    super("header", {}, [nav]);
  }
}
