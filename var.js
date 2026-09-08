const accID = 2345
var name = "Karan";
let password = "nhh1939"

console.log(password);

console.table([accID, name, password])

accnum = 34 
//this is valid too, but never do it this way

/*always use const and let only, as var can 
cause issues in block scope and functional 
scope, so never use var!
*/

let accState;
console.table([accID, name, password, accState])

//conclusion
/*
1. value of the variable defined in const cannot
    be changed 
2. prefer not use var 
3. use let instead of var 
4. console.table can be used
*/