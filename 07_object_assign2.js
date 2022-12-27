let sbiBank = {

    bankName : "State Bank Of India",
    location : "Hadapsar",
    accountNo : 36665221526,
    IFSC : "SBI00000343",
    intrestRate : "8%",
    showDetails : function(){
        console.log(sbiBank);
    }
}
let axisBank = {

    bankName : "Axis Bank",
    location : "Swargate",
    accountNo : 885566332545,
    IFSC : "AXB0000556",
    intrestRate : "10%" ,
    showDetails : function(){
        console.log(axisBank);
    } 
}
let hdfcBank = {

    bankName : "HDFC Bank",
    location : "Ch. Shivaji Nagar",
    accountNo : 11233656636,
    IFSC : "HDFC0000898",
    intrestRate : "8%", 
    showDetails : function(){
        console.log(hdfcBank);
    } 
}
let yesBank = {

    bankName : "Yes Bank",
    location : "Chinchwad",
    accountNo : 5545445554545,
    IFSC : "YB0000225",
    intrestRate : "12%" ,
    showDetails : function(){
        console.log(yesBank);
    } 
}
console.log(`---------------------------------------------------------------------------------------------------------------------------`);
console.log(`1) SBI Bank details by invoking the function`);
sbiBank.showDetails();
console.log(`---------------------------------------------------------------------------------------------------------------------------`);
console.log(`2) AXIS Bank details by invoking the function`);
axisBank.showDetails();
console.log(`---------------------------------------------------------------------------------------------------------------------------`);
console.log(`3) HDFC BAnk details by invoking the function`);
hdfcBank.showDetails();
console.log(`---------------------------------------------------------------------------------------------------------------------------`);
console.log(`4) YES Bank details by invoking the function`);
yesBank.showDetails();
console.log(`---------------------------------------------------------------------------------------------------------------------------`);