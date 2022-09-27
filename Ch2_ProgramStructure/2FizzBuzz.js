let max = 100;

for(i = 0; i < max; i++){
    if(i % 3 === 0) console.log(i + " Fizz");
    if(i % 5 === 0) console.log(i + " Buzz");
    if(i % 3 === 0 && i % 5 === 0) console.log(i + " FizzBuzz");    
}