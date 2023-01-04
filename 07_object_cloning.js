const person = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company: "Microsoft",
      valuation: "130B $"
  
  
  }

  const person2 = Object.freeze(person);

  person.height=7;
  console.log(person);






  var isMarried = true;

let name = "John";
let frdName = "Tom"
name = frdName;

const age = 23;
// const frdAge = 25;
// age = frdAge;// Not allowed


const anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
Object.freeze(anil);
anil.country = "India";
anil.age = 27;
delete anil.company;
console.log(anil);

const sunil = {
    age: 24,
    name: "Sunil",
    company: "Apple"
}
// anil = sunil; // Not allowed



// Array freezing 
const arrayNumbers = [2, 4, 5, 8];
// arrayNumbers = []; /// Not allowed
// Freeze array
Object.freeze(arrayNumbers);
arrayNumbers.push(10);
console.log(arrayNumbers);





const sunilAddress = {
    city : "Pune",
    pin: "431202"
}
// Merging two objects





let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);

let anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
let newSunil = {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anil = newSunil; // Shallow cloning
newSunil.country = "India";
console.log("Sunil: ", newSunil); // 
console.log("Anil: ", anil); //

// Spread Operator 
let empSumit = {
    empName : "Sumit",
    empSalary : "70K"
}
// ... Spread Operator
// console.log(empSumit);
// console.log({... empSumit});
let empMohit = {...empSumit}; // Deep Cloning using spread operator (... ) 
empMohit.empName = "Mohit";
console.log(empMohit);
console.log(empSumit);




// 2. Deep clone using JSON.stringfy
console.log("===== Deep clone using JSON.stringfy ======");
const empStew = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70, 
        math: 90,
        english: 87
    }
}
let empBill = JSON.parse(JSON.stringify(empStew));
empBill.marks.science = 90;
empBill.name = "Bill Gates";
console.log(empStew);
console.log(empBill);
console.log(empStew.marks.science);
console.log(empBill.marks.science);
