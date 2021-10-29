




class MyString{
    constructor(string){

    
    this._string = string
    }


    reverse(string){
       let stringSplit = string.split("")
       let reverseArray = stringSplit.reverse()
       let done = reverseArray.join("")
       return done

    }
    ucFirst(string){
        let newStr = string[0].toUpperCase() + string.slice(1)
        return newStr
    }

    ucWords(string){
      let done =  string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
      return done
    }
}

let str = new MyString()

console.log(str.reverse('adc'));
console.log(str.ucFirst('adc'));
console.log(str.ucWords('adc gg sgsg'));