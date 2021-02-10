let name= "kuddus";
function add(num1 ,num2){
    // implicitely declared gobal variable
    result = num1 + num2; // without let or var , any declared variable is assumed as a global variable
    // implicitely declared gobal variable
    window.resultRRR = num1 + num2; 
    console.log("Inside function" , name)
    var result2 = num1+ num2;
    return result;
}
// let name= kuddus;
console.log("Outside function" ,result ) // will show you AN error
let sum = add(12,21);
console.log("Outside function" ,result )
console.log(sum)