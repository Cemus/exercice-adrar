const message = document.getElementsByTagName("h3")[0];
const input = document.getElementsByTagName("input")[0];
const textArea = document.getElementsByTagName("textarea")[0];
const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  input.value = "";
  textArea.value = "";
  message.disabled = false;
  input.disabled = false;
  message.classList.add("hidden");
  button.classList.add("hidden");
});

document.addEventListener("keyup", () => {
  if (textArea.value.length > 5) {
    message.classList.remove("hidden");
    button.classList.remove("hidden");
    input.disabled = true;
  } else {
    message.classList.add("hidden");
    button.classList.add("hidden");
    message.disabled = false;
    input.disabled = false;
    textArea.value = input.value;
  }
});
