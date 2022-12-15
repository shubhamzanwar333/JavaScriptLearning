console.log(`1)`);
var wordLengthSquare = function(value) {
    
    console.log(`The length of word ${value} is ${value.length} and its square is ${value.length*value.length}.`);

}

wordLengthSquare("JavaScript");
wordLengthSquare("Google Chrome");
wordLengthSquare("Developer Smart");

console.log(`---------------------------------------------------------------------`);

var newFunction = function () {

        var str = "I am a Angular Developer";
        var wordsInString = str.split(" ");
        console.log(`2.1) Length of string is ${str.length}. Total words in string are ${wordsInString.length}.
         \n After dividing length by total words the ans is ${str.length/wordsInString.length}.`);
        console.log(`---------------------------------------------------------------------`);
        console.log(`2.2) Multiplying string length with total words : ${str.length*wordsInString.length}`);
        console.log(`---------------------------------------------------------------------`);
}
newFunction();