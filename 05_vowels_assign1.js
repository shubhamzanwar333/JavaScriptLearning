console.log(``);
console.log(`1)`);

var counter = 0;
var str = "I am very good IT Developer";
var newString = "";
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    var newChar = char.toLowerCase(index);
    if (newChar=="a" || newChar=="e" || newChar=="i" || newChar=="o" || newChar=="u" ) {

        // console.log(char);
     newString = newString.concat(char);
        counter = counter + 1;
    }
}
console.log(newString);
console.log(`Total number of vowels is ${counter}`);

console.log(``);
console.log(`-----------------------------------------------------------------------------------------`);

console.log(`2)`);
var cubeNumber = function (num) {
var sum = 0;
        for (let index = 1; index <= num; index++) {

          sum = sum + (index*index*index)

        }
        console.log(`The sum of cube of numbers from 1 to ${num} is: ${sum}`);
}

cubeNumber(5);
console.log(``);
console.log(`-----------------------------------------------------------------------------------------`);

console.log(`3)`);
var oddPositionedChars = function(str) {

    // var splitStr = str.split(" ").join("");
    var stringLength = str.length;
    var newStr = "";
    for (let index = 0; index < stringLength; index++) {

        if(index%2==1) {
            oddChar = str.charAt(index);
            newStr = newStr.concat(oddChar)
            newStr = newStr.split(" ").join("");
         }

    }
    console.log(`String is== "${str}"`);
    console.log(`Odd Positioned characters without considering space is== "${newStr}"`);

}
oddPositionedChars("Hard work always pays back");
console.log(``);
oddPositionedChars("Soon I will be Angular IT champ");
console.log(`-----------------------------------------------------------------------------------------`);

console.log(`4) Factorial`);


var factorialNumber = function (num) {
    var fact = 1;
    for (i=num; i>=1; i--) // 5 4 3 2 1
    {
        fact= fact * i  ;  // 5 20 60 120 120
    }
    console.log(``);
    console.log(`The factorial of given ${num} is ${fact} `);
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);
