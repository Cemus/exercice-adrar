export default function createElement(type, textContent, parent) {
  const element = document.createElement(type);
  element.textContent = textContent;
  parent.append(element);
  return element;
}
