
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

let mapOfEmployee = new Map ();

mapOfEmployee.set(empAnil.empId, empAnil);
mapOfEmployee.set(empRadha.empId, empRadha);
mapOfEmployee.set(empRishi.empId, empRishi);
mapOfEmployee.set(empSonali.empId, empSonali);
mapOfEmployee.set(empMonika.empId, empMonika);
mapOfEmployee.set(empViny.empId, empViny);
mapOfEmployee.set(empMahi.empId, empMahi);

console.log(`--------------------------------------------------------------------------------------------------`);
console.log(`1)Traverse the map using forEach loop.`);
mapOfEmployee.forEach((empObject, empId) => {
    console.log(`${empId} ===>`, empObject);
} );
console.log(`--------------------------------------------------------------------------------------------------`);