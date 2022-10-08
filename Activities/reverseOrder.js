///////////////////////
// reverseWordOrder
//////////////////////
/**
 * Write a function reverseWordOrder that accepts a single argument, a string. 
 * The function should return a string with the order of the words reversed. 
 * Don't worry about punctuation.
 * console.log(reverseWordOrder("Ishmael me Call"));
 * => "Call me Ishmael"
 */
const statement = "Tomorrow me call"
function reverseWordOrder(phrase){
    let string = "";
    // Convert string to an Array object
    phrase = phrase.split(" ");
    // Reverse Array
    phrase.reverse();
    // Capitalize first letter of the first word
    // Strings are immutable, so the string has to be rebuilt
    phrase[0] = phrase[0].charAt(0).toUpperCase() + phrase[0].slice(1);
    // Convert the last word in the Array to lowercase
    phrase[phrase.length -1] = phrase[phrase.length - 1].toLowerCase();

    for(i = 0; i < phrase.length; i++){
        string += phrase[i] + " "
    }
    return string
    
}

//console.log(Object.getOwnPropertyNames(String.prototype))
console.log(reverseWordOrder(statement));
