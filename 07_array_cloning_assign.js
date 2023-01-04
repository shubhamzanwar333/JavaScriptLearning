console.log(`-----------------------------------------------------------------------------------------------------------`);

const  arrayNums = [20,3,4,56,90,400,49];
let newArrayNums = arrayNums;
console.log(`1) Original array is : [${arrayNums}]`);
newArrayNums.push(55,56);
console.log(`Cloned array after updating 55,56 is : [${newArrayNums}]`);
console.log(`-----------------------------------------------------------------------------------------------------------`);



let arrayNumber = [... arrayNums];
console.log(`2) Original array is : [${arrayNums}]`);
arrayNums.push(10,25);
console.log(`Deep cloning using spread operator and updating 10,25 in the last: : [${arrayNums}]`);
console.log(`Cloned array : [${arrayNumber}]`);
console.log(`-----------------------------------------------------------------------------------------------------------`);



let arrayEven = [2,30,14,8];;
let mergeReselt = [...arrayNums , ...arrayEven];
console.log(`3) After merging arrayEven with arrayNums: [${mergeReselt}]`);
console.log(`-----------------------------------------------------------------------------------------------------------`);



const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,000 INR",
        aug_month : "50,000 INR",
        jun_month : "65,000 INR" 
    },
    address : {
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli,431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88","1800-4567-32","+91-9096 5678 77"]
}


console.log(`5) Log in employee details on consol like:`);
console.log(`5a) The address of ${employee_info.emp_name} is: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city},${employee_info.address.state}, ${employee_info.address.country}. `);
console.log(`5b) The mobiles of ${employee_info.emp_name} is: ${employee_info.mobiles[0]}, ${employee_info.mobiles[1]}, ${employee_info.mobiles[2]}.`);
console.log(`-----------------------------------------------------------------------------------------------------------`);

console.log(`6) Perform a deep copy using JSON.stringify`);
let newEmployee = JSON.parse(JSON.stringify(employee_info));
newEmployee.salary.july_month = "80,000 INR";

console.log(`6a) Update property july month salary to 80k in cloned object.`);
console.log(employee_info.salary);
console.log(newEmployee.salary);
console.log(``);
console.log(`6b) Update property country to United Kingdom in original object`);
employee_info.address.country = "United Kingdom";
console.log(employee_info.address);
console.log(newEmployee.address);
console.log(``);
console.log(`6c) Logging updated value of original and cloned object`)

for (const key in employee_info) {
    if (Object.hasOwnProperty.call(employee_info, key)) {
        const element = employee_info[key];
        console.log(element);
        
    }
}

for (const key in newEmployee) {
    if (Object.hasOwnProperty.call(newEmployee, key)) {
        const element = newEmployee[key];
        console.log(element);
        
    }
}