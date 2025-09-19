export class Component {
  constructor(tag, props = {}, children = []) {
    this.tag = tag;
    this.props = props;
    this.children = children;
  }

  render() {
    const element = document.createElement(this.tag);

    Object.entries(this.props).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });

    this.children.forEach(child => {
      if (child instanceof Component) {
        element.appendChild(child.render());
      } else {
        element.appendChild(document.createTextNode(child));
      }
    });

    return element;
  }
}
