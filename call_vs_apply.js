const normalPerson = {
    firstName : "Towhidul" ,
    lastName : "Islam" ,
    salary : 15000 ,
    tax : function(amount , tax, tip ){
        console.log('PREVIOUS ',this);
        this.salary = this.salary - amount -tax -tip;
        console.log('AFTER ', this);
        return  this.salary;
    }
}

const friendPerson = {
    firstName : "rafiul" ,
    lastName : "Islam" ,
    salary : 13000 ,
}
const helpfulPerson = {
    firstName : "monirul" ,
    lastName : "Islam" ,
    salary : 12000 ,
}

normalPerson.tax.call(friendPerson, 300 , 300 ,300)
normalPerson.tax.call(helpfulPerson,200,200,200)
normalPerson.tax.call(friendPerson, 300, 300 ,300)
normalPerson.tax(500,500,500);
normalPerson.tax.apply(friendPerson, [300,300,300])