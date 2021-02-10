// ES6
// class person {
//    constructor( firstName , lastName, salary){
//      this.firstName = firstName;
//      this.lastName = lastName ;
//      this.salary = salary ;
//    }
// }
// const helpfulPerson = new person("Hero","Alam",12000)
// console.log(helpfulPerson)

// const enemy = new person("sakib", "khan",23000)
// enemy.tax=200;
// enemy.restSalary= function(){
//     this.salary = this.salary - this.tax;
// }
// console.log(enemy.salary)
// enemy.restSalary()
// console.log(enemy.salary)


// Previous Systems
function Man (name,age,siblings){
    this.name = name;
    this.age = age;
    this.siblings= siblings;
}

const Rafi = new Man("rafi",19,2)
console.log(Rafi)
