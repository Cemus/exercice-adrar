export class Livre {
  /**
   *
   * @param {string} titre
   * @param {string} auteur
   */
  constructor(titre, auteur) {
    this.titre = titre;
    this.auteur = auteur;

    this.disponible = true;
  }
  emprunter() {
    try {
      if (this.disponible) {
        console.info("Livre emprunté avec succès");
        this.disponible = false;
      } else {
        throw new Error("Le livre est indisponible !");
      }
    } catch (error) {
      console.error(error);
    }
  }
  retourner() {
    console.info("Livre retourné avec succès");
    this.disponible = true;
  }
}

export class Bibliotheque {
  /**
   *
   * @param {string} nom
   */
  constructor(nom) {
    this.nom = nom;

    this.livres = [];
  }
  /**
   *
   * @param {Livre} livre
   */
  ajouterLivre(livre) {
    console.info("Livre ajouté avec succès");
    this.livres.push(livre);
  }
  /**
   *
   * @param {string} titre
   */
  emprunterLivre(titre) {
    const livre = this.livres.find((livre) => {
      return livre.titre === titre;
    });
    try {
      if (livre) {
        livre.emprunter();
      } else {
        throw new Error(
          "Aucun livre n'a été retrouvé : il n'a pas pu être emprunté"
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
  /**
   *
   * @param {string} titre
   */
  retournerLivre(titre) {
    const livre = this.livres.find((livre) => {
      return livre.titre === titre;
    });
    try {
      if (livre) {
        livre.retourner();
      } else {
        throw new Error("Nous n'avons jamais possédé ce livre !");
      }
    } catch (error) {
      console.error(error);
    }
  }
}
