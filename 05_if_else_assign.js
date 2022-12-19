console.log(`\n`);
console.log(`-------------------------**Question 1**------------------------------------`);
console.log(`\n`);
var ageCheck = function (age) {

    if(age<=0 || age>120){
        console.log(`your age is "${age}".... This is invalid Data.`);
        return;
    } 
    else if(age>=18 && age<=120) {
        console.log(`Your age is "${age}".... You are eligible for voting.`);
    }
    else if(age<18 && age>0) 
    {
        console.log(`Your age is "${age}"....You are not eligible for  voting.`);
        
    }  
}
ageCheck(45);
ageCheck(17);
ageCheck(8);
ageCheck(20);
console.log(`-----------------------------------------------------------------------`);
ageCheck(-10);
ageCheck(200);
ageCheck(0);

console.log(`\n`);
console.log(`-------------------------**Question 2**------------------------------------`);
console.log(`\n`);


var gradeCalculation = function (marks) {
    if (marks === 'number') {
        // console.log(`Valid Marks`);

    if(marks<=0 || marks>100){
        console.log(`Marks are "${marks}".... Invalid Marks.`);
        return;
    }

    else if (marks>=90 && marks<100){
        console.log(`Fantastic marks: "${marks}".... A+`);
    }
    else if(marks>=75 && marks<90){
        console.log(`Excellent Marks: "${marks}"....  A`);
    }
    else if(marks>=50 && marks<75){
        console.log(`Good Marks "${marks}"....  B `);
    }
    else if(marks>=35 && marks<50){
        console.log(`Marks is "${marks}"....  C (Need improvement).`);
    }    
} else {
    console.log(`Marks are ${marks} .... Invalid Marks. `);
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
console.log(`-----------------------------------------------------------------------`);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation("91");
gradeCalculation("Eighty");