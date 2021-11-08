



function square(x) { return x * x; }




function fn(fn, array) {
   var arr = array.map(x=>{
    return(fn(x))
})
return arr
}

console.log(fn(square, [1, 2, 3, 4]))