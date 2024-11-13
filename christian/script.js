const message = document.getElementsByTagName("h3")[0];
const input = document.getElementsByTagName("input")[0];
const textArea = document.getElementsByTagName("textarea")[0];
const button = document.getElementsByTagName("button")[0];
const maxInput = 5;

const storageText = localStorage.getItem("text");
if (storageText) {
  localStorage.setItem("text", storageText);
  input.value = storageText;
  textArea.value = input.value;
  checkInputs();
}

function checkInputs() {
  if (textArea.value.length > maxInput) {
    message.classList.remove("hidden");
    button.classList.remove("hidden");
    input.disabled = true;
  } else {
    message.classList.add("hidden");
    button.classList.add("hidden");
    message.disabled = false;
    input.disabled = false;
    textArea.value = input.value;
    localStorage.setItem("text", textArea.value);
  }
}

button.addEventListener("click", () => {
  input.value = "";
  textArea.value = "";
  message.disabled = false;
  input.disabled = false;
  message.classList.add("hidden");
  button.classList.add("hidden");
});

document.addEventListener("keyup", checkInputs);
