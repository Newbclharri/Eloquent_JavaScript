//////////////
// CLOSURE EXAMPLE
//////////////

const { numberParser } = require("config/parser");


// let multiplyByTwo = number => number * 2;

// console.log(multiplyByTwo(5))


function multiplier(factor){

    return number => number * factor;
}

let twice = multiplier(2);
console.log('let twice = multiplier(2)')
console.log("twice = ", twice)
console.log("twice = function (number){ return number * 2}");
 twice = function (number){
    return number * 2 
} 

console.log("\n")
let thrice = (multiplier(3));
console.log("thrice = ", thrice)
console.log("twice = ", twice)
console.log("let thrice = multiplier(3)")
console.log("thrice = function (number){ return number * 3}");
//thrice = number => number * 3

console.log("\n")
console.log("twice(5) --> ", twice(5));
console.log("(5) { return 5 * 2}");
// --> 10

console.log("\n")
console.log("thrice(4) --> ", thrice(4));
console.log("(4){ return 4 * 3}");
// --> 12

console.log("twice(7): ",twice(7))
console.log("thrice(30)", thrice(30))

let add = (addend) => 2 + addend;

aValue = add(3)
console.log(aValue)