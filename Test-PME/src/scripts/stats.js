export const pmeBaseStats = { costs: 0, revenue: 50, money: 100 };
export const traits = [
  { name: "Tête en l'air", effect: { stat: "power", value: -10 } },
  { name: "Travailleur", effect: { stat: "power", value: 10 } },
  { name: "Mélencolique", effect: { stat: "morale", value: -10 } },
  { name: "Enthousiaste", effect: { stat: "morale", value: 10 } },
];

export function randomTraits() {
  console.log(traits);

  const iteration = Math.floor(Math.random() * 2);
  console.log(iteration);
  const newTraits = [];

  for (let i = 0; i < iteration; i++) {
    newTraits.push(traits[Math.floor(Math.random() * traits.length)]);
  }
  console.log(newTraits);
  return newTraits;
}
