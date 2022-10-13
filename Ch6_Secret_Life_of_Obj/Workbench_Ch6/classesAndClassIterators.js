//////////////////////////////
// Classes and Class Iterators
//////////////////////////////

/**
 * Classes, according EJS, are special js fxns composed of two pars
 * 1) a constructor functions that assigned indiviudal, unique properties specific to one instance of the class
 * 2) methods that are delcared below the constructor fxn and automically stored in a property titled "prototype"
 * the prototype property and it's values are shared among all instances created form the class
 * prototype properties are the backbone of inheritance in js
 */

//always capitalize a class to distinguish it from other fxns
class Matrix{
    // constructor fxn is declared first and assigned unique properties to a new instance
    constructor(width, height, element = (x,y) => undefined){
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                this.content[y * width + x] = element(x,y);
            }
        }
    }

    // a classes methods are defined below and will be passed to all new instances of this class
    get(x,y){
        return this.content[y * this.width + x];
    }

    set(x, y, value){
        this.content[y* this.width + x] = value;
    }


}

// building a MatrixIterator class
class MatrixIterator{
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next(){
        // last row containing data is reached
        // at some point, the done property must read true to end iteration
        // probably good practice to declare this condition first
        if(this.y == this.matrix.height) return {done: true}
        // creating the value object that will hold the current value at each iteration
         let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
         };

         // increment x to move to the next column in row y
         this.x++;
         
         // set state once iteration has reached the end of column x
         if(this.x == this.matrix.width){
            this.x = 0;
            this.y ++;
         }
         return {value, done: false};
    }
}

// an iterable object must inherit a Symbol.iterator function from its class prototype
// the below creates an instance of the Symbol.iterator function in the class Matrix
// rendering the class iterable
Matrix.prototype[Symbol.iterator] = function() {
    // new keyword turns a function into a constructor
    return new MatrixIterator(this)
}

let matrix = new Matrix(3, 3, (x, y) => {
    if (x == 2 && y == 2) return `this is the last row and col.`

    return `this is row ${y + 1} column ${x + 1}.`});

for (let ele of matrix){
    console.log(ele)
}