import DOMPurify from "isomorphic-dompurify";

const editor = document.querySelector("editor")[0];
const textArea = document.querySelector("text-container");
console.log(textArea);

const storageText = localStorage.getItem("text");
if (storageText) {
  localStorage.setItem("text", storageText);
  editor.value = DOMPurify.sanitize(storageText);
  textArea.value = editor.value;
  checkInputs();
}

function checkInputs() {
  textArea.value = marked.parse(editor.value);
}

document.addEventListener("keyup", checkInputs);
