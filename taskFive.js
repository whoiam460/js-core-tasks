function partial(fn, ...partialArgs) {
  return function (...args) {
    return fn.apply(this, partialArgs.concat(args));
  };
}

function add(...args) {
  let sum = 0;
  args.map((element) => (sum += element));
  return sum;
}

function mult(...args) {
  let multResult = 1;
  args.map((element) => (multResult *= element));
  return multResult;
}

var add5 = partial(add, 5);


console.log(add5(2));