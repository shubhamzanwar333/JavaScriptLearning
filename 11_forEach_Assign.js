console.log(`-----------------------------------------------------------------------------------------`);
console.log(`1)Log the array element and its Index using for each loop with arrow function  (Using forEach)`);
const arrayOfNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

arrayOfNumbers.forEach((currentValue,index) => {
    console.log(`Value is ${currentValue} and its index is ${index}`);
});
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`2) Find the positive values in the array (Using forEach): `);
let positiveValue = [];
arrayOfNumbers.forEach((currentValue) => {
        if(currentValue > 0){
            positiveValue.push(currentValue);
        }
}  );
console.log(`Positive value in the array are:`);
console.log(positiveValue);
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`3) Find the negative numbers in the array   (Using forEach):`);
let negativeValue = [];
arrayOfNumbers.forEach((currentValue) => {
        if(currentValue < 0){
            negativeValue.push(currentValue);
        }
}  );
console.log(`Negative value in the array are:`);
console.log(negativeValue);
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`4) Find the even numbers  (Using forEach):`);
let evenNum = [];
arrayOfNumbers.forEach((currentValue) => {
    if(currentValue%2==0){
        evenNum.push(currentValue);
    }
}  );
console.log(`Even value in the array are:`);
console.log(evenNum);
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`5)Find the  sum of all elements in the array (Using forEach):`);
let sum = 0;
arrayOfNumbers.forEach((currentValue) => {
    sum=sum+currentValue;
}  );
console.log(`Sum of all the values in the array is: ${sum}`);
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`6) Find the even positioned values  (Using forEach):`);
let evenPosition = [];
arrayOfNumbers.forEach((currentValue,index) => {
    if(index%2==0){
        evenPosition.push(currentValue);
    }
}  );
console.log(`Even positioned in the array are  (Using forEach):`);
console.log(evenPosition);
