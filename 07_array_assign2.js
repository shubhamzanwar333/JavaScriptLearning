console.log(`\n`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is: "${arrayNumbers}"`);
console.log(`\n`);

console.log(`1) Total length of the given array is "${arrayNumbers.length}".`);
console.log(`------------------------------------------------------------`);

console.log(`2) First element in array is "${arrayNumbers[0]}" and last element is "${arrayNumbers[arrayNumbers.length-1]}".`);
console.log(`------------------------------------------------------------`);

let thirdLast = arrayNumbers[arrayNumbers.length-3];
console.log(`3) The third last number in the array is "${thirdLast}".`);
console.log(`------------------------------------------------------------`);

let evenNum = [];
for (let index = 0; index < arrayNumbers.length; index++) {
        if (arrayNumbers[index]%2 == 0) {
            evenNum = evenNum  + " " + arrayNumbers[index] ;
        }  
}
console.log(`4) The even numbers in the given array is: "${evenNum}"`);
console.log(`------------------------------------------------------------`);

let oddNum = [];
for (let index = 0; index < arrayNumbers.length; index++) {
        if (arrayNumbers[index]%2 == 1) {
            oddNum = oddNum  + " " + arrayNumbers[index] ;
        }  
}
console.log(`5) The Odd numbers in the given array is: "${oddNum}"`);
console.log(`------------------------------------------------------------`);

let allEvenNum = [];
for (let index = 0; index < arrayNumbers.length; index++) {

        if(index%2==0) {
            allEvenNum = allEvenNum + " " + arrayNumbers[index];
        }

}
console.log(`6)All even index positioned numbers are: "${allEvenNum}"`);
console.log(`------------------------------------------------------------`);

let allOddNum = [];
for (let index = 0; index < arrayNumbers.length; index++) {
        if(index%2==1) {
            allOddNum = allOddNum + " " + arrayNumbers[index];
        }
}
console.log(`7) All even index positioned numbers are: "${allOddNum}"`);
console.log(`------------------------------------------------------------`);

let sum = 0;
i=0;
while (i<arrayNumbers.length) {
    sum=sum+arrayNumbers[i];
    i++
}
console.log(`8) Sum of all the elements in the array is: "${sum}"`);
console.log(`------------------------------------------------------------`);

let multipleOfFive= [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if(arrayNumbers[index]%5==0){
        multipleOfFive = multipleOfFive + " " + arrayNumbers[index];
    }
}
console.log(`9) Numbers which is multiple of 5 are: "${multipleOfFive}"`);
console.log(`------------------------------------------------------------`);

let include115 = arrayNumbers.includes(115);
console.log(`10) Is 115 is available in the arrayNumbers: ${include115}.`);
console.log(`------------------------------------------------------------`);

let include23 = arrayNumbers.includes(23);
console.log(`11) Is 23 is available in the arrayNumbers: ${include23}.`);
console.log(`------------------------------------------------------------`);

console.log(`12) Before adding 55,66 before index 3: "${arrayNumbers}"`);
arrayNumbers.splice(3,0,55,66);
console.log(`After adding 55,66 before index 3: "${arrayNumbers}"`);
console.log(`------------------------------------------------------------`);

console.log(`13)Before deleting 3 numbers from index 4: "${arrayNumbers}"`);
arrayNumbers.splice(4,3);
console.log(`After deleting 3 numbers from index 4: "${arrayNumbers}"`);