import "./style.css";
import DOMPurify from "isomorphic-dompurify";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const editor = document.querySelector(".editor");
const textArea = document.querySelector(".text-container");

const storage = localStorage.getItem("text");
console.log(storage);
if (storage) {
  textArea.innerHTML = marked.parse(storage);
}

const storageText = localStorage.getItem("text");
if (storageText) {
  localStorage.setItem("text", storageText);
  editor.textContent = DOMPurify.sanitize(storageText);
  textArea.textContent = editor.value;
  checkInputs();
}

function checkInputs() {
  textArea.innerHTML = marked.parse(editor.value);
  localStorage.setItem("text", editor.value);
}

document.addEventListener("keyup", checkInputs);
