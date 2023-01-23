const arrayRollNo = [113,45,56,11,32,45,109,799,56,45];
console.log(`----------------------------------------------------------`);
console.log(`Given Array : `);
console.log(arrayRollNo);
console.log(`----------------------------------------------------------`);
console.log(`1) Reverse the array.`);
arrayRollNo.reverse();
console.log(arrayRollNo);
console.log(`----------------------------------------------------------`);
console.log(`2) Use sort() without any custom logic.`);
arrayRollNo.sort();
console.log(arrayRollNo);
console.log(`----------------------------------------------------------`);
console.log(`3) Sort the array in ascending order with custom logic.`);
arrayRollNo.sort((a, b)=>{
    return a>b ? 1 : -1;
 });
 console.log(arrayRollNo);
 console.log(`----------------------------------------------------------`);
console.log(`4) Find the greatest number from the array.`);
arrayRollNo.sort((a, b)=>{
    return a>b ? 1 : -1;
 });
 console.log(arrayRollNo);
 console.log(`The greatest number from the array is: ${arrayRollNo[arrayRollNo.length-1]}`);
 console.log(`----------------------------------------------------------`);
 console.log(`5) Find the smallest number from the array.`);
 arrayRollNo.sort((a, b)=>{
    return a>b ? -1 : 1;
 });
 console.log(arrayRollNo);
 console.log(`The smallest number from the array is: ${arrayRollNo[arrayRollNo.length-1]}`);
 console.log(`----------------------------------------------------------`);
 console.log(`6) Remove duplicate number from the array.`);
 const newSet = new Set(arrayRollNo);
 console.log(newSet);
 console.log(`----------------------------------------------------------`);