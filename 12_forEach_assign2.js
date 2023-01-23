class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22,"Anil","IT", 50000,"TCS");
const empRadha = new Employee(33,"Radha","HR", 74000,"Wipro");
const empRishi = new Employee(55,"Rishi","Finance", 47000,"TCS");
const empSonali = new Employee(66,"Sonali","Finance", 45000,"Infy");
const empMonika = new Employee(77,"Monika","IT", 40000,"Wipro");
const empViny = new Employee(88,"Vinayak","IT", 75000,"TCS");
const empMahi = new Employee(99,"Mahesh","HR", 85000,"Infy");
const arrayOfEmployee = [ empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];
console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`1)Find out TCS employee and log only name and company.`);
arrayOfEmployee.forEach( (currentValue) => {
        if(currentValue.empCompany=="TCS"){
            console.log(`Employee name is: ${currentValue.empName}, Company is: ${currentValue.empCompany}`);
        }
} );
console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`2)Find out employee who have salary greater than or equal to 50000 and log it on consol.`);
arrayOfEmployee.forEach( (currentValue) => {
    if(currentValue.empSalary >= 50000){
        console.log(currentValue);
    }
} );
console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`3) Find the sum of all employee salary and log it on consol.`);
let sum = 0;
arrayOfEmployee.forEach( (currentValue) => {
        sum = sum + currentValue.empSalary;
});
console.log(`Sum of all employee salary is: ${sum} INR`);
console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`4)Find the average salary of all employees and log it on consol`);
let avg = 0;
arrayOfEmployee.forEach( (currentValue) => {
    avg = sum/arrayOfEmployee.length;
});
console.log(`The average salary of all the employee is: ${avg} INR`);
console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`5)Find IT or HR dept employee whose salary is greater than or equal to 75000 INR and Log empployee details.`);
arrayOfEmployee.forEach( (currentValue) => {
    if((currentValue.empDept=="IT" || currentValue.empDept=="HR") && currentValue.empSalary >= 75000){
        console.log(currentValue);
    }
} );
console.log(`--------------------------------------------------------------------------------------------------------`);
