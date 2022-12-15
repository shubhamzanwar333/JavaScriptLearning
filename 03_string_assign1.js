console.log("\n");

console.log(`1) My dream company is "CODEMIND"`);

console.log("\n");

var stringAssignment = function() {
    var hobbie1 = "Swimming";
    var hobbie2 = "Dancing";
    var hobbie3 = "Reading";

    console.log(`2.1) (Using variable substitution) My hobbies are:  ${hobbie1} ${hobbie2} ${hobbie3}`);

    console.log(`2.2) (Using String template) My hobbies are: ${hobbie1.concat(hobbie2, hobbie3)} `);
}
stringAssignment();