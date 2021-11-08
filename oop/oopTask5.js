



class Validator {
    constructor(string,){
        this._string = string
        



    }

    isEmail(string) {
        if(string.includes('@')) {return true}
        else {return false}

    }
    isDomain(string){
        if(string.includes('.net')) {return true}
        else if(string.includes('.ua')) {return true}
       else if(string.includes('.ru')) {return true}
        else if(string.includes('.com')) {return true}
       else  {return false}
    }

    isData(number){
        let a = number.split(".")
        
       if((a[0] <=31) && (a[1] <=12) && (a[2]>0)) return true
       
       else return false
    }


    isPhone(string){
let b = string.split("")
if(b[0] === '+') return true
else return false
    }
 

}
let val = new Validator()




 console.log((val.isEmail("Jds@lf")));
 console.log((val.isDomain("adaskd.com")));

 console.log((val.isData("16.11.2021")));
 console.log((val.isPhone("380987173650")));
