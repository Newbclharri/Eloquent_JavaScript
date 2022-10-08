////////////////////////
// this KEYWORD CONCEPTS
////////////////////////

/** Call() fxn:
 * The call() is a predifined standard JavaScript function 
 * that allows one object to use or "call" another objects method
 * without having to rewrite the method in the object that doesn't hav it
 */

function printText(){
    console.log(this.text + this.moreText)
}

printText.call({text: "learning about ", moreText: "'this'"})

let swatter = {
    name: 'Ultra Swatter',
    ultraSwat: function (start){
        let stringChars = [];
        for(i = start; i > 0; i -= 1)stringChars.push(i);        
        console.log(`${this.name} will destroy all flies in... ${stringChars}`)
    }
}

let batter = {
    name: "Some dude that plays for the Rangers",
    age: 37,
    description: "Can smack the seem off the ball",
    swing: function(average){
        console.log(this.name + ", YOU'RE UP!")
        let random = Math.floor(Math.random() * 100)/100;
        // console.log(random)
        const target = Math.floor((1 - average)*100)/100;
        // console.log(target)
        let strikes = 0, homeRun = false;
        while(strikes < 3  && !homeRun){
            if(random > target) {
                console.log("HOME RUN! " + this.name + ", YOU DUH BAWSS!");
                homeRun = true;
            }
            else {
                strikes++;
                console.log("STRIKE " + strikes + "!");
                if(strikes === 3) console.log(this.name + ", YOU'RE OUT!")
            }
            random = Math.round(Math.random() * 100)/100
            // console.log(random)
        }

    }
}
swatter.ultraSwat(5);
swatter.ultraSwat.call(batter, 10);
batter.swing(.35);
batter.swing.call(swatter,.35);

let cj = Object.create(batter)
cj.name = "Duh Mane";
cj.swing(.35);

