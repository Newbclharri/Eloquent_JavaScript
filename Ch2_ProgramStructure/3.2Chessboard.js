////////////////////////////////
// ALTERNATE CHESSBOARD SOLUTION
////////////////////////////////

/**
 * Uses nested for loops
 * x to construct width
 * y to construct height
 */

let size = 8, chessboard = '';

for(let y = 0; y < size; y++){
    for(let x = 0; x < size; x++){
        //at the first iteration of every inner "x" loop, x will always be 0
        // if y is even, y + 0 (first x iteration) will be even and the leading row character will be a space
        // if y is odd, y + 0 will be odd and the leading character will not be a space, but a hash instead
        // afterwards, y is constant for the rest of the x iterations and the row will continue to oscillated between a space and a hash 
        // # # # #, if y is even
        //# # # # , if y is odd
        if((y + x)  % 2 === 0) chessboard += ' ';
        else chessboard += '#';
    }
    chessboard += '\n'; //needed to create the next row
}

console.log(chessboard)
console.log(chessboard.length)