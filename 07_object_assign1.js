let professor = {
    name : "Steve",
    gender : "Male",
    age : 45,
    city : "Geneva",
    degrees : {
        engineering : "CSC",
        PHD : "Adv Computing",
        award : "Nobel for Physics",
        allDegrees : function(){
            let certRes = this.engineering + " " + this.PHD + " " + this.award;
            return certRes;
        }
    },
    certificates : {
        cartificate1 : "Hacker Rank Participation",
        cartificate2 : "IFE Course",
        cartificate3 : "Adv programming"
    }
}
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`1) All the properties`);
console.log(professor);
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`2) Include nested object "Degrees".`);
console.log(professor.degrees);
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`3) Include nested object "Certificates".`);
console.log(professor.certificates);
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`4) Add function which will concate all the Degrees.`);
console.log(professor.degrees);
let degree = professor.degrees.allDegrees();
console.log(`Total Degrees of the professor are : "${degree}".`);
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`5) Try to add new property.`);
professor.married = "YES";
console.log(professor);
console.log(`Added "married" property and its showing like ... this.`);
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`6) Modify existing property`);
professor.age = 50;
console.log(professor);
console.log(`Age is modified.`);
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`7) Delete any one certificate.`);
console.log(professor.certificates); 
delete professor.certificates.cartificate2;
console.log(professor.certificates); 
console.log(`Certificate2 is deleted.`);
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`8)Add new certificate in nested Object "Certificates"`);
professor.certificates.newCertificate = "MS-CIT";
console.log(professor.certificates); 
console.log(`New certificate added.`);
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`9) Log the nested object certificate on consol.`);
console.log(professor.certificates);
