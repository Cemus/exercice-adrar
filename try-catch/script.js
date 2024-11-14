console.log("" == 0);
function division(x, y) {
  if (isNaN(x) || isNaN(y) || x === "" || y === "") {
    throw new Error("Merci de rentrer deux nombres");
  } else if (y == 0) {
    // throw new Error('Division par 0 impossible')
    throw console.warn("Division par 0 impossible");
  } else {
    return x / y;
    console.log(x / y);
  }
}
try {
  division(1000, 1000);
} catch (err) {
  console.error(err.message);
} finally {
  console.log(`Ce message s'affichera quoiqu'il arrive`);
}
