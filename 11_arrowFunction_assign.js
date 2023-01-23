console.log(`---------------------------------------------------------------------------------------------`);
console.log(`1)Simple message with arrow function`);
let greet = () => {
console.log(`Good Evening. Today is sunday`);
}
greet();
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`2)multiplication of three numbers and multiplication of three numbers with one default value`);
let mul = (num1,num2,num3=1) => {
        mulResult = num1*num2*num3;
        console.log(`Multilplication of ${num1}, ${num2}, ${num3} is  ${mulResult}`);
}
mul(5,5,2);
mul(10,4);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`3)Addition of 5 parameters and return it.`);
let add = (n1,n2,n3,n4,n5) => {
    addResult = n1+n2+n3+n4+n5;
    return addResult;

}
var addFunction = add(100,100,200,349,756);
console.log(`The addition is ${addFunction}`);
var addFunction = add("I am","learning","ES6","features","in depth");
console.log(`The addition is ${addFunction}`);
console.log(`---------------------------------------------------------------------------------------------`);

