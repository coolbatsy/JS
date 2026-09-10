let smth = "45"
console.log(typeof(smth))

let val = "23nhh"
let convertor = Number(val)
console.log(typeof(convertor))
console.log(convertor)
// 23nhh cannot be a number that's why NaN

let bool = false 
console.log(typeof(bool));
let convertor2 = Number(bool) 
console.log(typeof(convertor2)) // number
console.log(convertor2) //gives 0 as false = 0


// "23nhh" => NaN: Not a Number
// NaN is of number type still

//boolean conversions 
let token = 1
let tokenbool = Boolean(token)
console.log(tokenbool); // returns true 

// boolean conersions for strings 

let word = "hello"
let wordbool = Boolean(word)
console.log(wordbool) // returns true 

let word2 = ""
let word2bool = Boolean(word2)
console.log(word2bool) // returns false 

/* empty strings when converted to boolean
return false as they are 0 and false = 0 or null
*/

// conversion to string
let num = 45
let numstring = String(num)
console.table(typeof numstring) // returns string
// easiest conv of all 