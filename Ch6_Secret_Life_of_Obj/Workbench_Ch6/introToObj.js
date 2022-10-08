/////////////////////////////////////
// Secret Life of Objects - Workbench
/////////////////////////////////////

function speak(line){
    console.log(`The ${this.type} rabbit says, "${line}"`);
}

speak(5 + "!")
//The undefined rabbit says 5!

let brownRabbit = {type: 'brown', speak};
let whiteRabbit = {type: 'white', speak};
brownRabbit.speak(`Hi, I'm ${this.type}`)
whiteRabbit.speak("Hello")
//passing the this binding explicitly using a function's standard call method:
speak.call(whiteRabbit, "What up, cuh? My name is " + this.type)
// let obj = brownRabbit;
// console.log(brownRabbit === obj)
// obj = {type: brownRabbit.type, speak: brownRabbit.speak};
// console.log(brownRabbit === obj)
// console.log(brownRabbit, obj)
// console.log(Object.keys(obj));

