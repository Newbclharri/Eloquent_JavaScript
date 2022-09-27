//////////////////////
// REVERSING AN ARRAY
/////////////////////

const nums = [1,2,3,4,5];

const reverseArray = (arry) => {
    let elements = arry.length-1;
    let newArry = [];
    for( let i = 0; i <= elements; i ++){
        newArry[i] = arry[elements-i]
    }
    
    return newArry;
}

let numsReverse = reverseArray(nums);

console.log(numsReverse)
console.log(nums)



function reverseArrayInPlace(arry){
    for (let i = 0; i < Math.floor(arry.length / 2); i++) {
        let old = arry[i];
        arry[i] = arry[arry.length - 1 - i];
        arry[arry.length - 1 - i] = old;
    }
    return arry;
}

console.log(reverseArrayInPlace(nums))
console.log(Math.floor(2.5))
