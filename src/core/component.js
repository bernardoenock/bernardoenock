/**
 * @typedef {Object} Props
 * @property {Object} [attributes] - Atributos HTML do elemento
 * @property {Object} [events] - Eventos do elemento (ex: onclick, oninput)
 */

export class Component {
  /**
   * @param {string} tag - Tag HTML do componente
   * @param {Props} [props={}] - Propriedades do elemento
   * @param {(Component|string)[]} [children=[]] - Children do componente
   */
  constructor(tag, props = {}, children = []) {
    this.tag = tag;
    this.props = props;
    this.children = children;
  }

  /**
   * Renderiza o componente e retorna o elemento DOM
   * @returns {HTMLElement}
   */
  render() {
    const element = document.createElement(this.tag);

    // Atributos HTML
    if (this.props.attributes) {
      Object.entries(this.props.attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }

    // Eventos
    if (this.props.events) {
      Object.entries(this.props.events).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
      });
    }

    // Renderiza filhos
    this.children.forEach(child => {
      if (child instanceof Component) {
        element.appendChild(child.render());
      } else {
        element.appendChild(document.createTextNode(child));
      }
    });

    return element;
  }

  /**
   * Renderiza o componente direto em um container
   * @param {HTMLElement} container
   */
  renderInto(container) {
    container.appendChild(this.render());
  }

  appendChild(child) {
    this.children.push(child);
    return this;
  }

  appendChildren(children) {
    this.children.push(...children);
    return this;
  }
}
