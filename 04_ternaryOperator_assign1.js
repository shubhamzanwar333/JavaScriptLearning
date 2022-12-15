console.log(`1)`);
var greatest = function (num1,num2) {

 var result = (num1>num2) ? `The greatest number among "${num1}" and "${num2}" is ${num1}.` : `The greatest number among "${num1}" and "${num2}" is ${num2}.`;
 console.log(result);
}
greatest(10,-10);
greatest(800,899);

console.log(`------------------------------------------------------`);
console.log(`2)`);

var evenOrOdd = function (num1) {

    var newResult = num1%2==0 ? `The number ${num1} is EVEN Number.` : `The number ${num1} is ODD Number.`;
    console.log(newResult);
}
evenOrOdd(29);
evenOrOdd(44);
evenOrOdd(0);
evenOrOdd(101);

console.log(`------------------------------------------------------`);
console.log(`3)`);

var evenOddLength = function (value) {

    var res = value.length%2==0 ? `The length of word "${value}" is EVEN.` : `The length of word "${value}" is ODD.`;
    console.log(res);
}
evenOddLength("JavaScript");
evenOddLength("Developer");
evenOddLength("Google");