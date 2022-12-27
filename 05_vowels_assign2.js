console.log(``);
var  countCharA = function (str) {
var counter = 0;
var newString = "";
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    var newChar = char.toLowerCase(index);
    if (newChar=="a" || newChar=="A") {
        counter = counter + 1;   
    }    
}
console.log(`"${str}"`);
console.log(`Total number of a/A in the given string is:  ${counter}`);
}
console.log(`1)`);
countCharA("I AM Learning JavaScript, The Language of internet");
console.log(`-------------------------------------------------------`);
console.log(`2)`);
countCharA("My favourite movie is LAggAn");





var str = "Hi good morning all of you"
var counter = 0;
var newString = "";
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    var newChar = char.toLowerCase(index);
    if (newChar==" ") {
        counter = counter + 1;   
    }    
}
console.log(`"${str}"`);
console.log(`Total number of spaces in the given string is:  ${counter}`);

