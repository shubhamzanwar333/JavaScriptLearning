console.log(`-----------------------------------------------------------------------------------`);
console.log(`1) Create object personal details`);
let personalDetails = {
    name : "shubham",
    gender : "male",
    address : "Hadapsar",
    
}
console.log(personalDetails);
console.log(`---------------------------------------------------------------------------`);
console.log(`2) Create object college details`);
let collegeDetails = {
    clgName : "Annasaheb Magar College",
    address : "Pune",
    university : "Pune"
}
console.log(collegeDetails);
console.log(`-----------------------------------------------------------------------------------`);
console.log(`3) Merging both the Objects`);


const mergedObj = Object.assign({}, personalDetails, collegeDetails);
console.log(mergedObj);
// personalDetails = collegeDetails;
// console.log(`personalDetails :`);
// console.log(personalDetails);
// console.log(`collegeDetails :`);
// console.log(collegeDetails);

console.log(`----------------------------------------------------------------------------------`);
console.log(`4) Create a array of friends name and freeze it`);

let friendsArray = ["Resham", "Nikhil", "Kiran", "Dhairya"];
console.log(friendsArray);
Object.freeze(friendsArray);
friendsArray[2] = "Bunty";
console.log(`Changed the value at index 2 in the array but no change because it is freezed.`);
console.log(friendsArray);
console.log(`----------------------------------------------------------------------------------`);
console.log(`5) Iterate the array using for of loop`);

for (const element of friendsArray) {
    console.log(element);
}
console.log(`----------------------------------------------------------------------------------`);
console.log(`6) Reverse a specific word in the string`);


let str = "CODEMIND TECHNOLOGY";
let strLength = str.length;
let newStr1 = "";
let newStr2 = "";
for (let index = strLength-1; index >=0; index--) {
    
    if(str.charAt(index)== " "){
        break;
    }
    else {
        newStr1 = newStr1 + str.charAt(index);
    }   
}
for (let index = 0; index < strLength; index++) {
    if(str.charAt(index)== " "){
        break;
    }
    else {
        newStr2 = newStr2 + str.charAt(index);
    }
}
let resultString = newStr2.concat(" " , newStr1);
console.log(resultString);