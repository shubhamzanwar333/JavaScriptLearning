console.log(`-----------------------------------------------------------------------------------------------------------------------`);
class Bank {
    constructor(bankName,location,accountNo,ifsc,intrestRate){
        this.bankName=bankName;
        this.location=location;
        this.accountNo=accountNo;
        this.ifsc=ifsc;
        this.intrestRate=intrestRate;
    }
}
console.log(`A) Created the class and added the data members`);
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
let axisBank = new Bank ("Axis Bank", "Hadapsar", 225566, "AXB0000223", "10%");
let sbiBank = new Bank ("SBI Bank", "Swargate", 4494551, "SBI0000223", "9%");
let iciciBank = new Bank ("ICICI Bank", "Wakad", 4448948, "ICICI0000223", "8%");
let kotakBank = new Bank ("Kotak Bank", "Chinchwad", 117122, "KTK0000223", "8.5%");
let hdfcBank = new Bank ("HDFC Bank", "Pimpri", 5115155, "HDFC0000223", "10%");
let punjabBank = new Bank ("Punjab Bank", "Warje", 778899, "PJ0000223", "11%");

const mapOfBanks = new Map ();
mapOfBanks.set(225566, axisBank);
mapOfBanks.set(4494551, sbiBank);
mapOfBanks.set(4448948, iciciBank);
mapOfBanks.set(117122, kotakBank);
mapOfBanks.set(5115155, hdfcBank);
mapOfBanks.set(778899, punjabBank);

console.log(`B)Created Objects of various banks`);
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`C)Create the map in such a way that key should be bank account numberand value is object.`);
const keysOfMapBanks = mapOfBanks.keys();
console.log(`Account number as a key :`);
console.log(keysOfMapBanks);
console.log(`Value of particular keys :`);
console.log(mapOfBanks.get(225566));
console.log(mapOfBanks.get(4494551));
console.log(mapOfBanks.get(4448948));
console.log(mapOfBanks.get(117122));
console.log(mapOfBanks.get(5115155));
console.log(mapOfBanks.get(778899));
console.log(`-----------------------------------------------------------------------------------------------------------------------`);

console.log(`D)Traverse the map and log Bankname, account number and interest rates.`);
for (const key of keysOfMapBanks) {
    const bank = mapOfBanks.get(key);
    console.log(bank.bankName, bank.accountNo, bank.intrestRate);
}
console.log(`-----------------------------------------------------------------------------------------------------------------------`);








// own Practice.....
class Employee {
    constructor(empId,name,city) {
        this.empId = empId;
        this.name = name;
        this.city = city;
    }
}

let empShubh = new Employee(11,"Shubham", "Pune");
let empNick = new Employee(22,"Nikhil","Nashik");
let empHanu = new Employee(33,"Hanumant","Solapur");
let empKiran = new Employee(44,"Kiran","Nanded");

let mapOfEmployee = new Map();

mapOfEmployee.set(empShubh.empId, empShubh);
mapOfEmployee.set(empNick.empId, empNick);
mapOfEmployee.set(empHanu.empId, empHanu);
mapOfEmployee.set(empKiran.empId, empKiran);

// let keysOfmapOfEmployee = mapOfEmployee.keys();
// console.log(keysOfmapOfEmployee);

for (const key of mapOfEmployee.keys()) {
    console.log(mapOfEmployee.get(key));
    
}