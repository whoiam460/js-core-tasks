let ctx = {x : 2};

function testThis(a) {
    console.log("x = " + this.x + ", a = " + a);
}
testThis(2);

function bind(fn, context){
    return (...args) => fn.apply(context, [...args]);
}



const bindf = bind(testThis, ctx);
bindf(100);
