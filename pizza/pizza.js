const entreprise = '"La Pizzeria Raffinata"';
const nomPizza = '"Reina Mia Burrata Di Italino Buchetta"';
const timeStamp = "12/11/2024";
const heureLivraison = "20h";
const adresse = "10 rue chapeau pointu";
const prixPizza = 12.5;
const genre = "M";
const nomClient = "Dupont";
const prenomClient = "Jean";
const pointsFidelite = 50;

const sumUpOrderPhrase = `Merci ${genre === "M" ? "M." : "Mme."} ${nomClient} 
d'avoir commandé votre ${nomPizza} chez ${entreprise} !\nLa livraison est prévue pour ${heureLivraison} le ${timeStamp} au ${adresse}.\nLe montant de ${prixPizza}€ est ajouté à votre compte de fidélité au nom de ${prenomClient} ${nomClient} vous faisant au total ${
  (pointsFidelite + prixPizza) / 10
}€ de réduction sur votre prochaine commande !\nGRAZIE MILE !\nPS : Quelle est la danse préférée des pizzas ? LA PIZZACARENA !\n${entreprise} 🍕`;

console.log(sumUpOrderPhrase);
