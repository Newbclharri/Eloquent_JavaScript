// let theNumber = Number(prompt("Enter a number"));

// console.log(theNumber);

// if(!Number.isNaN(theNumber)){
//     alert("Your number is the square root of " + theNumber * theNumber + ".")
// }else{
//     alert(`${theNumber} is not a number.`)
// }
let number = 0;
const MAX = 100;
let evenNums = new Array();
while(number < MAX){
    evenNums.push(number);
    number += 2;
}
alert(`Even numbers less than ${MAX}: ${evenNums}`);
