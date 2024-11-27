class Truc extends HTMLElement {
  constructor() {
    super();

    const mot = this.getAttribute("mot");
    this.textContent = `Bonjour ${mot}`;
  }
}

customElements.define("le-truc", Truc);
