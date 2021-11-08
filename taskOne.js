function sequence(start = 0, ) {
  let number = start;
  return function() {
    let returnValue = number++; 
    return returnValue;
  }
}

let a = sequence(3);

console.log(a());
console.log(a());


