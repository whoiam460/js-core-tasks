



class Worker{
    constructor(name,surname,rate,days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary(){
        return(this.rate*this.days)
    }
}

const worker = new Worker('andry', 'mur', 1,20)

console.log(worker.getSalary())