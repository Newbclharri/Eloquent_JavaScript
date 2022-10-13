/////////////////////////////////////////////
// Getter Setter and Static Method of a Class
/////////////////////////////////////////////

/**
 * getter methods are special methods declared under the constructor of a class
 * getters tend to have hidden methods calls in the return statement
 * thus requiring the user to use only the the property name to retrieve a calculation
 * 
 */

 class Temperature {
    constructor(celsius) {
      this.celsius = celsius;
    }
    get fahrenheit() {
      return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8;
    }
  
    static fromFahrenheit(value) {
      return new Temperature((value - 32) / 1.8);
    }
  }

let temp = new Temperature(24)

console.log('C = ', temp.celsius, " degrees Celsius");
//instance methods with keyword get has hidden function calls. No need to use () here
console.log('F = ',temp.fahrenheit, " degrees Fahrenheit");
//instance methods with set keyword are invoked when an equal sign is used.  
// The value after the equal sign is passed as an arg to teh fxn
temp.fahrenheit = 65;
console.log('New C = ', temp.celsius, " degrees Celsius")
console.log('New F = ',temp.fahrenheit, " degrees Fahrenheit");
console.log('temp2_____________________________________________');
console.log(Temperature.fromFahrenheit(72))
let temp2 = Temperature.fromFahrenheit(72)
console.log('C = ',temp2.celsius);
console.log('F = ', temp2.fahrenheit);
  // static methods