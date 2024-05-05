

class Account{
    constructor(name){
        this.name = name;
        this.balance = 0;
    }
    credit(amount){
        this.balance += amount;
    }

    describe(){
        return `Account holder: ${this.name}, Balance: ${this.balance}`
    }
}

const person1 = new Account('Sean')
const person2 = new Account('Brad')
const person3 = new Account('Georges')


let accountList = [person1,person2,person3]

accountList.forEach((account)=>{
    account.credit(1000)
})

accountList.forEach((account)=>{
    console.log(account.describe())
})