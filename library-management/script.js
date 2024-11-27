import { Livre, Bibliotheque } from "./classes";

const maBibliotheque = new Bibliotheque("Ma Bibliothèque");
const livre1 = new Livre("1984", "George Orwell");
const livre2 = new Livre("Le Gros Petit Prince", "Steven Seagal");

maBibliotheque.ajouterLivre(livre1);
maBibliotheque.ajouterLivre(livre2);

maBibliotheque.emprunterLivre("1984"); // Livre emprunté avec succès.
maBibliotheque.emprunterLivre("1984"); // Déclenche exception livre n'est plus disponible.
maBibliotheque.retournerLivre("1984"); // Livre retourné avec succès.
maBibliotheque.emprunterLivre("198999"); // Déclenche exception livre n'existe pas.
