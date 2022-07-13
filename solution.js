//Print Exponential Values

function exponential(x, y) {
  if (x === x * 1 && y === y * 1) {
    let result = 0;
    for (let i = 1; i <= y; i++) {
      result = x ** i;
      console.log(result);
    }
  } else {
    console.log("not a number");
  }
}
exponential(NaN, 5);
exponential(4, 5);
exponential("a", 16);

// fruits

let fruit = "mango";
function printFavouriteFruit() {
  let fruit = "watermelon";
  console.log(`my favourite fruit is `, fruit);
}
//console.log(`my favourite fruit is `, fruit);

printFavouriteFruit();

// local declaration is more powerful than the global.

//Multiply a number by itself
//let result = 1;
function exponent(x, y) {
  let result = 1;
  for (let i = 0; i <= y; i++) {
    result = result * x;
  }
  console.log(result);
  return result;
}

console.log(exponent(2, 4));
//console.log(result);
// result cannot be used outside the function as it was defines locally.
