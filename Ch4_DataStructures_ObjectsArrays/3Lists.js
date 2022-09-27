//list = {value: array[i], rest: list}

function arrayToList(array){
    let list = null;
    for(i = array.length-1; i >= 0; i--){
        list = {value: array[i], rest: list}
    }
    return list;
}

let values = [1,2,3,4,5];

let list = arrayToList(values)

//{value: 1, rest: {value: 2, rest: {value: 3, rest: {value: 4, rest: null}}
console.log(list)

function listToArray(list){
    //using a while loop
    const array = [];
    while(list){
        array.push(list.value)
        list = list.rest
        // list will be overwritten at every iteration with the data held in list.rest 
        // {list.rest = {value: 2, rest: {value: 3, rest: null}}}
        // at some point list will be null 
        // as the last / original list.rest value reads null, and the loop will end
    }
    return array;
}

console.log(listToArray(list))

///////////////////////////////////////////////

function listToArray2(list){
    //using a for loop
    const array = []
    // for(list; list; list = list.rest){
    //     array.push(list.value);
    //    //this syntax works but is confusing
    // }

    for(let next = list; next; next = next.rest){
        array.push(next.value);
    }
    return array;
}

console.log(listToArray2(list));

function prependToList(element, list){
    let newList = {value: element, rest: list }
    return newList
}

list = prependToList(-1, prependToList(0,list))

function nthListElement(n, list){
    if(n === 0) return list.value
    
    //easier to organize list data into an array to locate an element in a given position
    let array = listToArray(list)
    return array[n]
}

console.log(list)
console.log(nthListElement(list, n))

function nthListRecursion(list, n){
    //n represents the number of times to recurse 
    //to get to the rest object that contains the nth value
    if(!list) return undefined
    if(n===0) return list.value
    //breaking down list object until n recursive calls have been invoked
    //to find the value at position n
    return (nthListRecursion(list.rest, n-1))
}

console.log(nthListRecursion(list, n))