var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 },
  { 'name': 'aaa', 'age': 40 }
];

let b = characters.length 

function pluck( array, filter){
    let a = array.length
        let output =[];
        for(let i=0; i < a; i++){
            output.push(array[i] [filter]);  
        }
        return output;
       
    

}
var result = pluck(characters, "age");
console.log(result);