////////////////////////
// JavaScript Classes
//////////////////////
/**
 * JavaScript Classes are a pseudo class-based syntax
 * classes are special JS fxns that combine constructor fxns and an objects protoype properties
 * into one function that returns a new instance of that function (Object.create(obj))
 * when using the JavaScript keyword "new" + the constructor function's name
 */

// Below is an example of creating new instances of an object before the implemenation of 
// class functions in 2015

// Step 1: Create an protoype object

let protoCat = {
    meow (){
        console.log("The " + this.type + " cat says, " + "\"meeOOOOOOOOOOOOOOOOOWWWWWW\"");
    }
}

////////////
// Method 1
/////////////

// Step 2: Create a makeCate function:
function makeCat(type){
    let cat = Object.create(protoCat);
    cat.type = type;
    return cat;
}

// Step 3: Invoke make cat:
let siameseCat = makeCat("siamese");
siameseCat.meow()
console.log(Object.getPrototypeOf(siameseCat))

// Summary:
// The Object.create fxn binds the object to the "this" keyword of the prototype object protocat

/////////////
// Method 2
/////////////

//Step 1: declare and define Constructor function:
// the constructor function will define properties that pertain only to new instances
// However, the prototype properties that follow will apply to all subsequent instances
function Duck (type, gender) {
    this.type = type;
    this.gender = gender;
}


//Step 2: Define the Constructor prototype:
Duck.prototype.talkDuck = function talkDuck(){
    const phrase = "The " + this.gender + " " + this.type + " 🦆 says, ";
    const otherPhrase = "The " + this.gender + " " + this.type + " ⚧️  🦆 says, "
    if(this.gender === "female" || this.gender === "girl") console.log(phrase + "\"quack!\"");
    else if(this.gender === "male" || this.gender === "boy") console.log(phrase + "\"quack quack!\"");
    else console.log(otherPhrase + "\"I guess I feel like a duck?\"");
}

//Step 3:  Use the "new" keyword before invoking the function instead of Object.create(obj)
// to assign the individual proporties and the prototype properties to an instance of the Constructor:
let mallard = new Duck("mallard", "female");
mallard.talkDuck();
let mottledDuck = new Duck("mottled", "boy");
mottledDuck.talkDuck();
let transDuck = new Duck("trans");
transDuck.talkDuck();
console.log(Object.getPrototypeOf(transDuck))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(transDuck)));

////////////////////////
// Class Method
/////////////////////////

// Step 1: Use the keyword Class and the name of the Constructor object
// Step 2: Declare and define the constructor function inside of the class
// Step 3: In the constructor function, declare the individual properters
// Step 4: Below the constructor function, declare and define the prototype properties
// Step 5: Finally, invoke the constructor function using the keyword "new" and the class Name:
const BIGGIE_LYRICS = require("../biggieNotoriousThugs.js");
class Turtle {
    constructor(name, type, gender){
        this.type = type,
        this.gender = gender,
        this.name = name
    }

    spitGame(shot) {
        console.log(`Hi! My name is ${this.name}.\n\n ${shot}`);
    }
}

console.log("lyrics: ",BIGGIE_LYRICS)
console.log(Object.getOwnPropertyNames(Turtle.prototype));

let Michaelangelo = new Turtle("Michaelangelo", "ninja", "male");
Michaelangelo.spitGame(BIGGIE_LYRICS);