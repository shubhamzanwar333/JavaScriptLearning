console.log("Array shallow Cloning");
let arrayOfEvenNum = [0, 2, 4, 6, 8 ];
let arrayOfNum = arrayOfEvenNum; // Shallow Cloning
arrayOfEvenNum[1] = 10;
console.log(arrayOfEvenNum);
console.log(arrayOfNum);

// Deep Cloning
console.log("Array Deep Cloning");
let arrayOfNumber = [0, 2, 4, 6, 8 ];
let arrayClone =  [... arrayOfEvenNum]; // Deep Clone
arrayOfNumber[2] = 100;
arrayClone[2] = 200;
console.log(arrayOfNumber);
console.log(arrayClone);










console.log("===== Object merge using spread operator ======");
let empAnil = {
    name : "Anil",
    role: "Software Developer"
} 
let empAddress = {
    city: "Pune",
    street: "Wakad - 411057"
}
   let mergedObject = {...empAnil, ...empAddress};
   console.log(mergedObject);
