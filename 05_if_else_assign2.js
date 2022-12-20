var marriageEligibility = function (gender, age, name) {
  if (gender != "Male" && gender != "Female") {
    console.log(`Hey ${name}. "Your Gender is unknown".`);
    return;
  }
   else {
    if (gender == "Male" && age >= 21) {
      console.log( `Hey ${name} your age is "${age}". Yor are "ELIGIBLE" for marriage.` );
    } else if (gender == "Female" && age >= 18) {
      console.log( `Hey ${name} your age is "${age}". Yor are "ELIGIBLE" for marriage.`);
    } else {
      console.log(`Hey ${name} your age is "${age}". You are "NOT ELIGIBLE" for marriage.`);
    }
  }
}
console.log(``);
marriageEligibility("Male", 17, "Shubham");
console.log(``);
marriageEligibility("Male", 25, "Hanu");
console.log(``);
marriageEligibility("Female", 28, "Neha");
console.log(``);
marriageEligibility("Female", 16, "Sanjana");
console.log(``);
marriageEligibility("Other", 35, "Nikhil");
console.log(``);
marriageEligibility("Other", 41, "Swati");

