/////////////////////
// EVERYTHING
////////////////////
/**
 * Analogous to the some method, arrays also have an every method
 * This one return true when the given function returns true for every element in the array.
 * In a way, "some" is a version of the || operator that acts on arrays, and 
 * "every" is like the && operator 
 * 
 * Implement "every" as a function that takes an array and a predicate function as parameters
 * Write two versions, one using a loop and one using the some method.
 */

function every(array, test){
    for(element of array){
        if(!test(element)) return false
    }
    return true
}


function every2(array, predicate){
    //a predicate is a function that returns true or false based on conditions
    //i.e. a "test" fxn

    // using the some array method to determine if every element 
    // in a given array meets a condition
    // if all elements meet the condition the return should be true, otherwise false
    // to do this using the some method which usually returns true if
    // at least one element in an array meets a certain condition
    // I have to set up a situation in which the some array method searches for at least one element that DOES NOT
    // meet the condition using the ! before the predicate fxn.
    // In this case, some returns true, meaning that at least on element failed the test
    // but I negate true so that the fxn returns false meaning that not every element
    // in the array met the condition

    return !array.some(element => !predicate(element))

    // Also, it's important to note that the some array method loops through all elements until it finds
    // one that meets the condition.
    // if the some array method loops through every element successfully
    // then there is no element in the array that meets the condition.
    // The fxn then exits the loop and returns false by default.
    // However, in this case, the default false at the end of the loop is negated to true
    // inversely meaning that every element in the array met the condition
}
console.log(every([1,3,5], n => n > 0))
console.log(every([1,3,-5], n => n > 0))
console.log(every([1,3,-5], n => n < 10))
console.log(every([10,10,10], n => n < 10))
console.log('\n', 'Using the fxn every2: ');
console.log('Remember, think of the some method as, "There is at least one element in the array that meets the condition')

const array = [1,2,3,4,20];
console.log("array.some method test: ", array.some(n => n < 10))
array[4] = 2;
console.log("array.some method test: ", array.some(n => n < 10))
console.log(every2(array, n => n < 10));
array[4] = 20;
console.log(every2(array, n => n < 10));