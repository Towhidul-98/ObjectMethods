const normalPerson = {
    firstName : "Towhidul" ,
    lastName : "Islam" ,
    salary : 15000 ,
    //getFullName : this.firstName + this.lastName;
    // getFullName : function(){
    //     return this.firstName + " " + this.lastName
    // },
    tax : function(amount){
        console.log(this);
        this.salary = this.salary - amount ;
        console.log(this);
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

//console.log(normalPerson.getFullName());
//console.log(normalPerson.tax(500));

normalPerson.tax(500);
console.log(normalPerson.salary)

const helpfulPersonTax = normalPerson.tax.bind(helpfulPerson);
helpfulPersonTax(1000);
helpfulPersonTax(2000);

normalPerson.tax(500);

helpfulPersonTax(2000);




