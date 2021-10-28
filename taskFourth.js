function sequence(start = 0, step = 1) {
  return function () {
    return (start += step);
  };
}
function square(x) {
  return x * x;
}

function fmap(fn, gen) {
  return (...value) => fn(gen(...value));
}

var generator = sequence();

var squareGen = fmap(square, generator);





function add(...args) {
  let sum = 0;
  args.map((x) => (sum += x));
  return sum;
}

var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3));