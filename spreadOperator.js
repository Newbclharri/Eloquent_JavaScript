//////////////////
// SPREAD OPERATOR p. 74
//////////////////

/*
Spread operator [...variable] copies an existing array to a new binding with a unique address
such that the new array is independent of the original array
*/

let array1 = ["blue couch"];
let array2 = [...array1];
console.log(array1);
console.log(array2);

array1[0] = "red couch"
console.log("array1:",array1)
console.log("array2: ",array2)

/////////////////////////////////////

/**
 * 
 * Spread operator also serves as a Rest Parameter
 * allowing a function to accept an unlimited amount of arguments
 * function add(...numbers){
 * //this function spreads out elements of an array
 * //as individual arguments to be copied to a new array
 * //all arguments passed to this function will be added to one giant array
 * 
 * }
 */

function addACouple(a,b,c){
    return a + b + c
}

function addInfinite (...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum
}

console.log(addACouple(1,2,3,4,5,6,7))
console.log(addInfinite(1,2,3,4,5,6,7))