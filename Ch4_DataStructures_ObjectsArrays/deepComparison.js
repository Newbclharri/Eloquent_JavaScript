const anObject = {first: 1, second: 2};
const anotherObject = {first: 'a', second: 'b'};

const dataA = ["yo", "what's good?"], dataB = {0: "yo", 1: "what's good?"};
console.log(deepEqual(dataA, dataB))
dataA.shift();
console.log(0 in dataB)
console.log(deepEqual(dataA, dataB))
delete dataB[1]
console.log(dataB)
dataB[0] = "what's good?"
console.log(dataA, dataB)
console.log(deepEqual(dataA, dataB))
console.log(deepEqual({0: "what's good?"}, dataA))
console.log(deepEqual({phrase: "what's good?"}, dataA))
console.log(deepEqual({phrase: "what's good?"}, {"phrase": "what's good?"}))


function deepEqual(data1, data2){
    ////////////////////
    // DIRECT COMPARISON
    ////////////////////
    /**
     * data is equal if the simple data types are exactly the same or both instances are null
     * when comparing objects, direct comparison is always initially false
     * the code below quickly checkis if the two elements to compare are simple data types that are equal
     */
   if(data1 === data2) return true

   ////////////////////
   // filter data types
   ///////////////////

   /**
    * if the above condition is not met then the compared data are either
    * data types that are unequal or a simple data that is compared to an object, also unequal
    * or
    * both sets of data are objects
    * ___________________________________
    * the code below checks the data type of each argument
    * if at least one of the arguments is null OR IS NOT an object then there's no point in comparing, and the fxn returns false
    * 
    */

   if (data1 == null || typeof data1 !== "object" || 
    data2 == null || typeof data2 !== "object") return false

   /////////////////////////
   // Simplest step: determine if the objects are unequal
   //////////////////////////
   /**
    * if both arguments are objects (resulting in false on both sides of the central || operator above)
    *  then a deep comparison is performed that will directly compare the values of each property via recursion
    * 1) if the two objects don't have the same number of keys (use Object.keys().length to compare)
    * then the two objects are not equal
    */
   let keysData1 = Object.keys(data1), keysData2 = Object.keys(data2);
   if(keysData1.length !== keysData2.length) return false

   ///////////////////////
   // DEEP  COMPARISON USING RECURSION
   //////////////////////
    /**
     * if both objects have the same number of keys then the following must be true if the two objects are exactly the same
     * 1) the keys from each obj must be the same. Loop to verify and return false at the first instance of difference
     * 2) each key must have the same value. Call deepEqual() recursively to compare values.
     *          Loop through and return false at the first instance of difference.
     */

    //if one of the keys from data1 is not in data2 OR 
    // if the two keys have unequal values return false

    for(let key of keysData1){
        if(!keysData2.includes(key) || !deepEqual(data1[key], data2[key])) return false
    }

    // after looping through all of the keys successfully without returning false above
    // then the same keys exist in both objects and hold the same values.

    return true
}

console.log(typeof null)
let a = null,b = null;
console.log(a === b)
console.log(typeof undefined)
console.log(undefined === undefined)