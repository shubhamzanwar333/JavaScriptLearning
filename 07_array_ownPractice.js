

let arrayfunction = function(num) {

let newArray = [5,10,20,15,10,20,50,60,5,10];
let serialNo = 0;
arrayLength = newArray.length;

for (i=0 ; i<arrayLength; i++){

    if(newArray[i] == num) {
            serialNo = serialNo + 1;
        console.log(`occurrence ${serialNo} of ${num} is at index ${i}.`);
    }
}
}
arrayfunction(10);