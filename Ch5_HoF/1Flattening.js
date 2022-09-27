///////////////////////
// FLATTENING
///////////////////////
/**
 * Use reduce method in combo with concat method to "flatten"
 * an array of arrays into a single array that has all the elements of the
 * original array
 */

let arrays = [[1,2,3], [4,5], [6]];

let arraysCombined = arrays.reduce((a,b) => a.concat(b))
console.log(arraysCombined)


