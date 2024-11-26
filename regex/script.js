const submitButton = document.getElementById("submit");
const mdp = document.getElementById("mdp");
const email = document.getElementById("email");
const dialog = document.querySelector("dialog");
const warningList = document.getElementById("warning");
const closeModalButton = document.getElementById("closeModal");

function checkMail(mail) {
  const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
  const testRegex = regex.test(mail);

  if (!testRegex) {
    const text = "L'adresse mail n'est point valide !";
    warningList.append(createElement(text));
  }

  return testRegex;
}

function test() {
  console.log("^^");
}

function createElement(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

function checkMdp(pass) {
  const charDecimal = /\d/;
  const charSpecial = /[$&@!]/;

  const decimalTest = charDecimal.test(pass);
  const specialTest = charSpecial.test(pass);
  const smallTest = pass.length > 8;
  const longTest = pass.length <= 255;

  if (!smallTest) {
    const text = "Le mot de passe est trop court !";
    warningList.append(createElement(text));
  }

  if (!longTest) {
    const text = "Le mot de passe est trop long !";
    warningList.append(createElement(text));
  }

  if (!decimalTest) {
    const text = "Le mot de passe doit contenir un chiffre !";
    warningList.append(createElement(text));
  }

  if (!specialTest) {
    const text = "Le mot de passe doit contenir un caractère spécial !";
    warningList.append(createElement(text));
  }

  return decimalTest && specialTest;
}

function resetWarning() {
  const warningListChildren = Array.from(warningList.childNodes);
  warningListChildren.forEach((child) => {
    warningList.removeChild(child);
  });
}

closeModalButton.addEventListener("click", () => {
  dialog.close();
});

submitButton.addEventListener("click", () => {
  resetWarning();

  const pass = mdp.value;
  const mail = email.value;

  const passVerified = checkMdp(pass);
  const mailVerified = checkMail(mail);

  !passVerified
    ? (mdp.style.borderColor = "red")
    : (mdp.style.borderColor = "green");

  !mailVerified
    ? (email.style.borderColor = "red")
    : (email.style.borderColor = "green");

  if (passVerified && mailVerified) {
    dialog.showModal();
  }
});
