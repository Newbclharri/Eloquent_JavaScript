/*
    This program simulates a 2d chessboard
    using '#' to represent colored spaces
    and " " to represent non colored spaces
    each row of the chessboard alternates between leading space
*/
let board = '';
//Build a row
let size = 8, row='', leadingSpace;
for(i = 0; i < size; i++){
    if(i % 2 === 0) row += "#" // every other charcter is a hash
    else row += ' ' // or a space
}

//leading space row
leadingSpace = " " + row;

for(i = 0; board.length < 72; i++){
    //Condition that alternates between a leading space row and default row
    if(i % 2 !== 0) board += row;
    else board += leadingSpace;
    board += '\n';
}

console.log(board);
console.log(board.length)
console.log(board[0])