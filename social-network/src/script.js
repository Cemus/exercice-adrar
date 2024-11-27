import App from "./classes/App";
import createElement from "./DOM/createElement";

const app = new App();
app.setup();

const publicationsElement = document.getElementById("publications");

function createPublications() {
  const users = app.getAllUsers();
  console.log(users);
  users.forEach((user) => {
    user.publications.forEach((publication) => {
      const titleElement = createElement(
        "h4",
        "Publication de ",
        publicationsElement
      );
      console.log(publication);

      createElement("span", publication.author.name, titleElement);
      createElement("p", publication.content, publicationsElement);
      createElement("h3", "Commentaires", publicationsElement);

      publication.comments.forEach((comment) => {
        console.log(comment);
        createElement("h4", comment.author.name, publicationsElement);
        createElement("p", comment.content, publicationsElement);
      });
      const textAreaElement = createElement(
        "textarea",
        "",
        publicationsElement
      );

      const addCommentButton = createElement(
        "button",
        "Ajouter un commentaire",
        publicationsElement
      );
      console.log(app.getMe());
      addCommentButton.addEventListener("click", () => {
        publication.addComment(app.getMe(), textAreaElement.value);
        publicationsElement.innerHTML = ``;
        createPublications();
      });
    });
  });
}

createPublications();
