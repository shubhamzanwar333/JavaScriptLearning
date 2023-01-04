console.log(`----------------------------------------------------------------------------------`);
function bank(bankName,location,ifsc,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifsc=ifsc;
    this.branchCode=branchCode;
}
bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";



let yesBank = new bank("YES Bank","Magarpatta","YES000033",1122);
let sbiBank = new bank("SBI Bank","Mumbai","SBI000043",1515);
let axisBank = new bank("AXIS Bank","Thane","AXS000077",9645);
let mahBank = new bank("Maharashtra Bank","Solapur","MHB001188",1004);
console.log(`2)`);
console.log(`Bank details is: "Bank Name: ${yesBank.bankName}, Branch: ${yesBank.location}, IFSC: ${yesBank.ifsc},Branch Code: ${yesBank.branchCode}".`);
console.log(`Bank details is: "Bank Name:  ${sbiBank.bankName}, Branch: ${sbiBank.location},IFSC: ${sbiBank.ifsc}, Branch Code: ${sbiBank.branchCode}".`);
console.log(`Bank details is: "Bank Name:  ${axisBank.bankName}, Branch: ${axisBank.location},IFSC: ${axisBank.ifsc}, Branch Code: ${axisBank.branchCode}".`);
console.log(`Bank details is: "Bank Name:  ${mahBank.bankName}, Branch: ${mahBank.location}, IFSC: ${mahBank.ifsc}, Branch Code: ${mahBank.branchCode}".`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`5)`);
console.log(`The open time of the sbiBank is "${sbiBank.openTime}" and close time is "${sbiBank.closeTime}"`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`6)`);
console.log(`The open time of the axisBank is "${axisBank.openTime}" and close time is "${axisBank.closeTime}"`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`7)`);
console.log(`The Bank name is "${yesBank.bankName}". Branch code is "${yesBank.branchCode}". Open time is "${yesBank.openTime}"`);
console.log(`----------------------------------------------------------------------------------`);