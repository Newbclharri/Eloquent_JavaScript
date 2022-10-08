///////////////////
// PROTOTYPES
//////////////////
/**
 * Before the current pseudo class notation in JS
 * JS had a prototype syntax for inheritance
 * initialized objects inherit
 */

////////////////////
// CONSTRUCTOR
///////////////////
/**
 *  Constructor is a special JavaScript function denoted with a capital letter
 * that initializes its parameters with the arguments passed to it from a new instance of the constructor
 * and returns these bindings as properties to this new instance
 * Constructor functions also return a prototype property that contains other function and properties
 * The prototype property allows new instances of the Constructor to inherit that data from prototype
 * @param {*} type 
 * @param {*} greeting 
 */


// Most fundamental example of a JavaScript constructor function:

function Person(type, greeting){
    this.type = type
    this.greet = function(){
        console.log(greeting);
    }
   
}
Person.prototype.speak = function(phrase){
    console.log("I am " + this.type + ". " + phrase);
}

let weirdDude = new Person('Weird', "Howdy");
console.log("weird dude:", weirdDude);
console.log("Person: ",Person);

weirdDude.speak("What it do?")
console.log(Object.getPrototypeOf(Person))
console.log(Object.getPrototypeOf(Person) == Function.prototype)
console.log(Object.getPrototypeOf(weirdDude))
console.log(Object.getPrototypeOf(weirdDude) == Person.prototype)
console.log(Person.prototype)
weirdDude.greet()
Person.prototype.speak = function (){
    console.log("I've been changed!")
}
weirdDude.speak()
// Obj.protoype is a class function created property that passes properties from the progenitor obj
// to new instances of that object.
// if the property is not defined in prototype, it is not passed to instances of the progenitor obj]
// as illustrated below:
Person.ethnicity = "brown";
console.log("Weird Ethnicity: ",weirdDude.ethnicity);
Person.prototype.ethnicity = "brown";
console.log("Weird Ethnicity: ",weirdDude.ethnicity);

console.log("Person.type: ",Person.type)
console.log("Person: ", Person)
console.log("Object: ", Object)
// The following methods are in Object but not in Object.protoype, 
// so they are NOT passed to new instances of the Object constructor function:
console.log("create" in Object)
console.log("getPrototypeOf" in Object)
//The following ARE functions passed to new instances of the Object constructor function:
console.log("toString" in Object.prototype)

/////////////////////////////
console.log(Person.prototype)
console.log(Object.getPrototypeOf(Person))
console.log(Object.getPrototypeOf(weirdDude))
console.log(Object.getOwnPropertyNames(Object.prototype))