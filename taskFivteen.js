
var a = { x: 1, y: 2, z: [1, 2, 3] };



function copy(data){
    let b = Object.assign({},data)
    return b;
}
b= copy(a)
b.x=10;


console.log(a);

console.log(b.z);