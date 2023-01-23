// Given the home work

// Anil -> Homework
function anilHomeWork(callback){
    console.log("Anil is doing homework... ");
    console.log("After some time.. Anil did homework..");
    callback();
}

// Sunil -> Homework
function sunilHomeWork(){
    console.log("I am happy Anil, you have completed homework");
    console.log("I am bit lazy and don't have time as well");
    console.log("So copying as it is your homework");
}
anilHomeWork(sunilHomeWork);
//sunilHomeWork();



// function show(){
//     console.log("This is show function..");
// }
// setTimeout(show, 3000);
setTimeout(function show(){
    console.log("This is show function..");
}, 3000);



console.log("Callback with arg functions");
let add = function (n1, n2){
    console.log(n1+n2);
}
let multiply = function (n1, n2){
    console.log(n1*n2);
}

function operation(callbackAdd, callbackMultiply) {
    console.log('operation');
    callbackAdd(5, 5);
    callbackMultiply(2, 2);
} 
operation(add, multiply);




console.log(`=============own practice==============`);

arrayOfNumbers = [4,-9,-99,88,145,-5];
function newOperation (callbackPos, callbackNeg) {
    arrayOfNumbers.forEach(element => {
        if(element > 0) {
            callbackPos(element);
        }
        else {
            callbackNeg(element)
        }
    });
}
function positive(element) {
    console.log(`The number ${element} is Positive number `);
}
function negative(element) {
    console.log(`The number ${element} is Negative number `);
}
newOperation(positive,negative)


console.log(`=============own practice==============`);

myArray = [1,2,3,4,5,6,7,8,9];
function perform (evenCallback,oddcallback) {
    myArray.forEach( (num) =>{

    if(num%2==0){
        evenCallback(num);
    }
    else{
        oddcallback(num);
    }
} );
}
function even (num){
        console.log(`Given number ${num} is the even number`);

}
function odd (num){
    console.log(`Given number ${num} is the odd number`);
}
perform(even,odd);