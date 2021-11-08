let body = document.body;



const hasClass = (node) =>{
    let elements = body.querySelector(node);
    return   ( elements.className == false) ? console.log('Class notFound') : console.log(elements.className);
};


const addClass = (node, klass) => {
   let id = document.querySelector(node)
   
    if(id.className == false){
       return id.className = klass;
    } else if (id.className === klass) return console.log('already done') 
    else {
       return id.classList.add(klass);
    }
}




const removeClass =(node) =>{
    console.log('done')
    return document.querySelector(node).className = '';
}