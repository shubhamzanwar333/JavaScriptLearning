var evenOrOdd = function(value) {

  if (value%2==0) {
    return "Even";
  }
  if (value%2==1) {
    return "Odd";
  }

}
console.log(`Result: ${evenOrOdd(45)}`)
console.log(`Result: ${evenOrOdd(40)}`)