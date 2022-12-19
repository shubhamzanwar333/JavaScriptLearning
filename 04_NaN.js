
var resultDivide = 0/0;
console.log(`Result is: ${resultDivide}`);
console.log(`Type of${resultDivide} is ${typeof resultDivide}`);

var resultAdd = resultDivide + 10;
console.log(`resultAdd is: ${resultAdd}`);

var resultMul = resultDivide * 10;
console.log(`resultMul is: ${resultMul}`);

var num = new Number("Prathamesh"); 
console.log(`num is: ${num}`);





console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var num = + numStr;
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`)
