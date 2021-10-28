


function type (data) {
    if(data === null) return null
    else if(Array.isArray(data) ===  true) return 'array'

   else return typeof(data)
}


console.log(type(156));