import fetchData from "./fetchData";

// DOM
const userElement = document.getElementsByTagName("user-box")[0];
const resetButton = document.getElementsByTagName("button")[0];

// Element
class UserBox extends HTMLElement {
  static get observedAttributes() {
    return ["name", "mail", "address", "image"];
  }

  constructor() {
    super();
    this.img = document.createElement("img");
    this.name = document.createElement("h3");
    this.address = document.createElement("p");
    this.mail = document.createElement("p");
    this.initialize();
  }
  initialize() {
    this.createNameElement();
    this.createMailElement();
    this.createAddressElement();
    this.createImgElement();
    this.elementAppend();
  }
  elementAppend() {
    this.append(this.img);
    this.append(this.name);
    this.append(this.address);
    this.append(this.mail);
  }
  createNameElement() {
    this.name.textContent = this.getAttribute("name");
  }
  createMailElement() {
    this.mail.textContent = this.getAttribute("mail");
  }
  createAddressElement() {
    this.address.textContent = this.getAttribute("address");
  }
  createImgElement() {
    this.img.src = this.getAttribute("image");
    this.img.alt = this.getAttribute("name");
  }

  attributeChangedCallback(currentValue) {
    if (currentValue === "name") {
      this.createNameElement();
    } else if (currentValue === "mail") {
      this.createMailElement();
    } else if (currentValue === "address") {
      this.createAddressElement();
    } else if (currentValue === "image") {
      this.createImgElement();
    }
  }
}

customElements.define("user-box", UserBox);

// Reset

async function reset() {
  const userData = await fetchData();
  const nameData = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
  const addressData = `Address : ${userData.location.street.number} - ${userData.location.street.name} (${userData.location.city}, ${userData.location.country}) `;

  userElement.setAttribute("name", nameData);

  userElement.setAttribute("address", addressData);
  userElement.setAttribute("mail", userData.email);
  userElement.setAttribute("image", userData.picture.large);
}

// Button
resetButton.addEventListener("click", () => {
  reset();
});

// Setup

reset();
