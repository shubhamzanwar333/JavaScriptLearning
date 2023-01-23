
// let arrayOfNum = [2, 5, 9, 3, 4, 7];
// let num = 0;
// function operation(evenCallback, cubeCallback) {
//   arrayOfNum.forEach((element,index) => {
//     if (index % 2 == 0) {
//       console.log(`The index of ${element} is ${index}`);
//       evenCallback(element);
//     } else {
//       console.log(`The index of ${element} is ${arrayOfNum.indexOf(element)}`);
//       cubeCallback(element);
//     }
//   });
// }
// function squareEven(element) {
//   num = element * element;
//   console.log(`The square Of the number ${element} is ${num}`);
//   console.log(
//     `------------------------------------------------------------------------------------`
//   );
// }
// function cubeOdd(element) {
//   num = element * element * element;
//   console.log(`The cube Of the number ${element} is ${num}`);
//   console.log(
//     `------------------------------------------------------------------------------------`
//   );
// }
// operation(squareEven, cubeOdd);


// console.log(`=============largest 3rd number using single for loop=============`);
// arrayOfNum = [8,55,74,5555,622,88,66,3,6];
// function findLargest3rd(array) {
//     let first = 0, second = 0, third = 0;
//     for (let i = 0; i < array.length; i++) {
//       let current = array[i];
//       if (current > first) {
//         third = second;
//         second = first;
//         first = current;
//       } else if (current > second) {
//         third = second;
//         second = current;
//       } else if (current > third) {
//         third = current;
//       }
//     }
//     return third;
//   }
  
// let thirdIs =   findLargest3rd(arrayOfNum);
// console.log(thirdIs);


// console.log(`================================================================`);


// let result = 0;
// let counter = 0;
// function operation(num1, num2) {
//   let newNum1 = Math.abs(num1);
//   let newNum2 = Math.abs(num2);

//   if (num1 == 0 || num2 == 0) {
//     result = 0;
//     return `The multiplication of ${num1},${num2} is ${result}`;
//   } else {
//     if (num1 < 0 && num2 < 0) {
//       do {
//         result = result + newNum1;
//         counter++;
//       } while (counter < newNum2);
//       return `The multiplication of ${num1},${num2} is ${result}`;
//     } else  {
//       do {
//         result = result + newNum1;
//         counter++;
//       } while (counter < newNum2);

//       return num1 < 0 || num2 < 0 ? `The multiplication of ${num1},${num2} is ${-result}` : `The multiplication of ${num1},${num2} is ${result}`;
//     }
//   }
// }
// let res1 = operation(0,8);
// console.log(res1);
// let res2 =  operation(7,0);
// console.log(res2);
// let res3 = operation(-7,-8);
// console.log(res3);
// let res4 =  operation(-7,8);
// console.log(res4);
// let res5 = operation(7,-8);
// console.log(res5);
// let res6 = operation(7,8);
// console.log(res6);


// console.log(`================map===============`);
// class Child {
//   constructor(name,age,height,weight,){
//   this.name = name;
//   this.age = age;
//   this.height = height;
//   this.weight = weight;
  
//   }}
//   const sharvi = new Child("Sharvi","1year & 5 months","1.9 ft","8.9 kg");
//   const adiraj = new Child("Adiraj","1year & 2 months","1.6 ft","7.9 kg");
//   const kirtiraj = new Child("Kirtiraj","3year & 1 months","2.8 ft","13.6 kg");
//   const shrisha = new Child("Shrisha","2year & 3 months","2.1 ft","9.3 kg");
//   const arush = new Child("Arush","1year & 1 months","1.93ft","8.7 kg");
    
//   childArray = [sharvi,adiraj,kirtiraj,shrisha,arush];

//   console.log(`\n)map of child`);
// let mapOfChild = new Map();
// mapOfChild.set("No_1",sharvi);
// mapOfChild.set("No_2",adiraj);
// mapOfChild.set("No_3",kirtiraj);
// mapOfChild.set("No_4",shrisha);
// mapOfChild.set("No_5",arush);

// mapOfChild.forEach((childObject, num) => {
//   console.log(`${num} ===>`, childObject);
// } );

// console.log(`=================================================================`);
// var str = "I like apple so much And also banana too";
// let totalLength = str.length;
//  let counter = 0;
// for (let index = 0; index < totalLength; index++) {
//     var char = str.charAt(index);
//     var newChar = char.toLowerCase(index);
//     if(newChar=="a"){
//         counter=counter+1;
//     }
// }
// console.log(counter);

// console.log(`=================================================================`);




// var str= "hi how are you?";
// var totalLenght = str.charAt(str.length-1);
// console.log(totalLenght);
// var abc= str.charAt(6);
// console.log(abc);

