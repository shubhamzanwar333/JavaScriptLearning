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
console.log(`B) Create the following objects.`);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
const bankArray = [axisBank, sbiBank, iciciBank, kotakBank, hdfcBank, punjabBank];
console.log(`C))Create an array of above objects and traverse with for of loop and just log Bank name and location.`);
for (const element of bankArray) {
    console.log(`${element.bankName} , ${element.location}`); 
}
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`D)Find the object which has name "Kotak Bank" using for of loop.`);
for (const element of bankArray) {
    if(element.bankName == "Kotak Bank"){
        console.log(element);
    }
    
}
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`E) Log the details using normal for loop.`);
for (let index = 0; index < bankArray.length; index++) {
    console.log(bankArray[index]);
      
}
console.log(`-----------------------------------------------------------------------------------------------------------------------`);