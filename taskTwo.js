function sequence(start = 0, step=1 ) {
  let number = start;
  return function() {
    let returnValue = number ; 
    number += step 
    return returnValue;
  }
}
let gen = sequence(2,2);


function take(gen, x) {
    let array =[];
   for (i=0; i < x; i++) {
       array[i] = gen()
   }
return array
}
console.log(take(gen, 5))





