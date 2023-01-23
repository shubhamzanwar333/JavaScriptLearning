const arrayNumbers= [10, 3, 4, 50, 6];
arrayNumbers.forEach(function(currentValue, index, array){
 console.log(currentValue, index, array);
});

arrayNumbers.forEach(function(currentValue){
    console.log(currentValue);
   });

arrayNumbers.forEach((currentValue)=>{
    console.log(currentValue);
});

arrayNumbers.forEach(currentValue=>console.log(currentValue));

console.log("======== Find even numbers==========");
const array = [2, 3, 4, 5, 6, 7, 0, 34, 57];
const arrayOfEven = [];
console.log(array);
array.forEach( (currentValue) => {
    if(currentValue%2==0) {
        arrayOfEven.push(currentValue);
      console.log(currentValue);
    }
});
console.log("Array of even numbers");
console.log(arrayOfEven);


