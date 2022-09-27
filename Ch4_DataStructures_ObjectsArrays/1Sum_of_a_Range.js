////////////////////
//The Sum of a Range
////////////////////

//Example:
function range(start, end, step = start < end ? 1: -1){
    let numbers = [];

    if(step > 0){
        for(let i = start; i <= end;  i += step){
            numbers.push(i);
        }
    }
    else if(step < 0){
        for(let i = start; i >= end; i += step){
            numbers.push(i);            
        }
    }
    return numbers;
}

let nums = range(10, 1, -1)
console.log(nums)

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}


//Spreading out the returned array of numbers from range() as parameters for sum()
console.log(sum(...range(10,1)));