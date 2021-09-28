//Query selectors. These variables reference the parts of the HTML page that you,
//as the user, see on the website. The functions down below will calculate a value, and
//we'll use these variables later to display the dice values on the website.

var dieOneResult = document.getElementById('die-one-result');
var dieTwoResult = document.getElementById('die-two-result');
var dieThreeResult = document.getElementById('die-three-result');
var tallyResult = document.getElementById('total-dice-value');

//Dice value arrays. These contain lists of the numbers on each side of the dice, which 
//our functions below will loop through randomly to tell you what you rolled for each die.

var dieOne = ["1", "2", "2", "3", "3", "3"];
var dieTwo = ["0", "1", "2", "3", "4", "5"];
var dieThree = ["0", "0", "1", "2", "3", "4"];

//Roll dice functions. I set it up so that you're effectively rolling all three dice at one time.
//(I can change that if you want, btw). In the html file, I set the "roll dice" button to set off
//the following chain of events, where dice one automaticallypasses the torch to dice three, etc, 
//until they're all tallied up at the end.

function rollDieOne() {

    //This selects a random element in our dieOne array from above. 
    dieOneOutcome = dieOne[Math.floor(Math.random() * dieOne.length)];

    //Except that result wasn't ACTUALLY a number. Our dieOne list is actually storing the text value
    //of those numbers, but not a number value that you can, like, do math with. This method converts that
    //text value to a number value, so that we'll be able to add up all the dice rolls at the end.
    dieOneNum = parseInt(dieOneOutcome, 10);

    //This is where we tell it to display an image of the dice that reflects the result of the roll.
    if (dieOneNum === 1) {
        dieOneResult.innerHTML = "<img src='/images/dice-1-sm.png'/>"
    } else if (dieOneNum === 2) {
        dieOneResult.innerHTML = "<img src='/images/dice-2-sm.png'/>"
    } else {
        dieOneResult.innerHTML = "<img src='/images/dice-3-sm.png'/>"
    }

    console.log(dieOneNum)

    //This is where we tell it to automatically start the next function, rolling the second die
    // once it finishes doing all that stuff above.
    rollDieTwo()

}

function rollDieTwo() {

    dieTwoOutcome = dieTwo[Math.floor(Math.random() * dieTwo.length)];
    dieTwoResult.innerHTML = dieTwoOutcome
    dieTwoNum = parseInt(dieTwoOutcome, 10);

    if (dieTwoNum === 0) {
        dieTwoResult.innerHTML = "<img src='/images/dice-0-sm.png'/>"
    } else if (dieTwoNum === 1) {
        dieTwoResult.innerHTML = "<img src='/images/dice-1-sm.png'/>"
    } else if (dieTwoNum === 2) {
        dieTwoResult.innerHTML = "<img src='/images/dice-2-sm.png'/>"
    } else if (dieTwoNum === 3) {
        dieTwoResult.innerHTML = "<img src='/images/dice-3-sm.png'/>"
    } else if (dieTwoNum === 4) {
        dieTwoResult.innerHTML = "<img src='/images/dice-4-sm.png'/>"
    } else {
        dieTwoResult.innerHTML = "<img src='/images/dice-4-sm.png'/>"
    }

    console.log(dieTwoNum)

    rollDieThree()

}

function rollDieThree() {

    dieThreeOutcome = dieThree[Math.floor(Math.random() * dieThree.length)];
    // dieThreeResult.innerHTML = dieThreeOutcome
    dieThreeNum = parseInt(dieThreeOutcome, 10);

    if (dieThreeNum === 0) {
        dieThreeResult.innerHTML = "<img src='/images/dice-0-sm.png'/>"
    } else if (dieTwoNum === 1) {
        dieThreeResult.innerHTML = "<img src='/images/dice-1-sm.png'/>"
    } else if (dieTwoNum === 2) {
        dieThreeResult.innerHTML = "<img src='/images/dice-2-sm.png'/>"
    } else if (dieTwoNum === 3) {
        dieThreeResult.innerHTML = "<img src='/images/dice-3-sm.png'/>"
    } else {
        dieThreeResult.innerHTML = "<img src='/images/dice-4-sm.png'/>"
    }

    console.log(dieThreeNum)


    tallyResults()

}

//tally results function

function tallyResults() {

    tallyOutcome = 10 * dieOneNum + (dieTwoNum + dieThreeNum);
    tallyResult.innerHTML = tallyOutcome

}