let min = Math.min(88,7,91,88,22);
console.log(min);

function isEven(number){
    let even = false;
    if(number === 0) return true;
    else if( number === 1) return false;
    else if(number < 0) return isEven(-number);
    else return isEven(number - 2);

}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-5))

let string = 'boyBig';

function countBs(string){
    let count = 0;
    for(i = 0; i < string.length; i++){
        if(string[i] === 'B') count++
    }
    return count;
}

console.log(countBs(string))

function countChar(string, letter){
    let numBs = countBs(string), countOther = 0;

    if(letter){
        for(i = 0; i < string.length; i++){
            if(string[i] === letter) countOther++;
        }
        return (String(numBs) + ", " + String(countOther));
    }
    else return(countB);
}

console.log(countChar("BigBoy", "g"));

