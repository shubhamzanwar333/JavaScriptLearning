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
console.log(`------------------------------------------------------------------------------------`);
console.log(`1) Find all the employee from Wipro Company.`);
const employeeWipro = arrayOfEmployee.filter( (currentValue) => {
      return currentValue.empCompany=="Wipro";
} );
employeeWipro.forEach( (currentValue) => {
    console.log(currentValue);

} );
console.log(`------------------------------------------------------------------------------------`);
console.log(`2) Find all the employee from IT or HR department`);
const employeeITHR = arrayOfEmployee.filter( (currentValue) => {
    return currentValue.empDept=="IT" || currentValue.empDept=="HR" ;
} );
employeeITHR.forEach( (currentValue) => {
  console.log(currentValue);

} );
console.log(`------------------------------------------------------------------------------------`);
console.log(`3) Find all the employees whose empId is greater than 50`);
const employeeId50 = arrayOfEmployee.filter( (currentValue) => {
    return currentValue.empId > 50 ;
} );
employeeId50.forEach( (currentValue) => {
  console.log(currentValue);

} );
console.log(`------------------------------------------------------------------------------------`);
console.log(`4)All employess whose name starts with A/V/M`);
const employeeAVM = arrayOfEmployee.filter( (currentValue) => {
    return currentValue.empName.startsWith("A") || currentValue.empName.startsWith("V") || currentValue.empName.startsWith("M") ;
} );
employeeAVM.forEach( (currentValue) => {
  console.log(currentValue);

} );
console.log(`------------------------------------------------------------------------------------`);
console.log(`5) Find average salary of employees for all the department`);
const sal = arrayOfEmployee.reduce( (runningTotal,value) => {
    return runningTotal+ value.empSalary;
 },0 );
 
 console.log(`salary of employees for all the department is INR ${sal/arrayOfEmployee.length}`);

console.log(`------------------------------------------------------------------------------------`);
console.log(`6) Find the average salary of IT department`);
const arrayIT = arrayOfEmployee.filter( (currentValue) => {
    return currentValue.empDept == "IT";
} );

const avgIT = arrayIT.reduce( (runningTotal, value) => {
        return runningTotal + value.empSalary;
},0 );
console.log(`The average salary of employee in IT dept is: INR ${avgIT/arrayIT.length}`);


