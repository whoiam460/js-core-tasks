var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность


function filter(input, isEven){
   const result = input.filter(word => isEven(word));
   return(result)
}

console.log(filter(input, isEven)); 