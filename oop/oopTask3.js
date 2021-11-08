



class Worker{
    constructor(name,surname,rate,days){
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
    }

    getName() {
        return this._name
    }
    getSurname(){
        return this._surname
    }
    getRate() {
        return this._rate
    }
    getDays(){
        return this._days
    }
    getSalary(){
        return(this._rate*this._days)
    }

    setRate(rate) {
        this._rate = rate
    }
    setDays(days){
        this._days = days
    }
}

const worker = new Worker('andry', 'mur', 5,20)

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary());