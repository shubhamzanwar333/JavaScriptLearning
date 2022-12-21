// console.log(``);
// console.log(`1)`);

// var counter = 0;
// var str = "I am very good IT Developer";
// var newString = "";
// for (let index = 0; index < str.length; index++) {
//     var char = str.charAt(index);
//     var newChar = char.toLowerCase(index);
//     if (newChar=="a" || newChar=="e" || newChar=="i" || newChar=="o" || newChar=="u" ) {

//         // console.log(char);
//      newString = newString.concat(char);
//         counter = counter + 1;   
//     }    
// }
// console.log(newString);
// console.log(`Total number of vowels is ${counter}`);
// console.log(`--------------------------------------------------`);

// console.log(``);
// console.log(`2)`);

// var cubeNumber = function (num) {
// var sum = 0;
//         for (let index = 1; index <= num; index++) {

//           sum = sum + (index*index*index)
             
//         }    
//         console.log(`The sum of cube of numbers from 1 to ${num} is: ${sum}`);
// }

// cubeNumber(5);

// console.log(`--------------------------------------------------`);

// console.log(``);
// console.log(`3)`);

var oddPositionedChars = function(str) {

    var newStr = "";
    var stringLength = str.length;

    for (let index = 0; index < stringLength; index++) {
        
         if(index%2==1) {
            oddChar = str.charAt(index);
            // console.log(`${oddChar}`);
            newStr = newStr.concat(oddChar)
         }
        
    }
    console.log(newStr);

}
oddPositionedChars("Hard work always pays back");
console.log(``);
oddPositionedChars("Soon I will be Angular IT champ");



