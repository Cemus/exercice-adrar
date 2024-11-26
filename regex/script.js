const submitButton = document.getElementById("submit");
const mdp = document.getElementById("mdp");
const email = document.getElementById("email");
const dialog = document.querySelector("dialog");
console.log(dialog);

function checkMail(mail) {
  console.log(mail);
  const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
  return regex.test(mail);
}

function checkMdp(pass) {
  console.log(pass);
  const charDecimal = /\d/;
  const charSpecial = /[$&@!]/;
  return charDecimal.test(pass) && charSpecial.test(pass);
}

submitButton.addEventListener("click", () => {
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

  if (checkMail(mail))
    if (checkMail(mail) && checkMdp(pass)) {
      dialog.showModal();
    }
});
