////////////////////
// Your Own Loop
////////////////////
/**
 * Write a higher-order function loop that provides something like a for loop  statement.
 * It takes a value, a test function, an update function, and a body function.
 * Each iteration, it first runs the test function on the current loop value 
 * and stops if that returns false.
 * Then it calls the body function, giving it the current value.
 * Finally, it calls the update function to create a new value and start from the beginning.
 * 
 * When defining the function, you can use a regular loop to do the actual looping.
 */

function mySolution(num, test, update, body){
    //the named parameters create binding that exist in this fxn's environment
    if(test(num)){
        body(num)
        num = update(num);
        //all of the parameters must be passed as arguments to define the parameter bindings
        //declared in the fxn definition
        //if not, JavaScript will complain that the parameter was never defined, initialized, or
        // is the wrong type
        // mySolution(num) vs mySolution(num, test, update, body)
        mySolution(num, test, update, body)
    }else console.log("\n")
}

mySolution(10,n => n > 0, n => n - 1, console.log);

/////////////////////////////////////////////////////////////
function loop(start, test, update, body){
    /**
     * this fxn simulates a for loop using function values in place of simple values
     * @param start holds the initial value to begin iterations
     * @param test is the funciton value that evaluates a condtion and returns true or false
     * @param update will change the value of param start to get it closer to the value that
     * will trigger test(n) to return false and end the loop
     * @param body is the function value that performs and action if the test function value returns true
     */

    for(let i = start; test(i); i = update(i)){
        body(i)
    }

    console.log('\n');
}

loop(5, n => n > 0, n => n - 1, console.log)