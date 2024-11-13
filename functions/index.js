const arrayGrades = [
  9, 9, 9, 9, 78, 8, 4, 7, 5485, 48, 48, 8, 87, 8, 8, 7, 8, 41, 14,
];

function sum(grades) {
  let sum = 0;
  for (let index = 0; index < grades.length; index++) {
    const element = grades[index];
    sum += element;
  }
  return sum;
}

function averageRatings(grades) {
  const average = sum(grades) / grades.length;
  console.log("Moyenne :", average);
  if (average >= 15) {
    console.log("Très bien");
  } else if (average >= 10) {
    console.log("Assez bien");
  } else {
    console.log("REFUS");
  }
}

averageRatings(arrayGrades);
