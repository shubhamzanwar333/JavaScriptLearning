console.log("1)");
function hobby() {
  console.log("My hobby is Swimming");
}
hobby();
console.log("------------------------");

function favPlace() {
  console.log("My Fav place is Leh-Ladakh");
}
favPlace();
console.log("------------------------");

console.log("2)");
function personalDetails(firstName, lastName, collegeName) {
  console.log(firstName, lastName, collegeName);
}
personalDetails("Shubham", "Zanwar", "Annasaheb Magar College");
console.log("--------------------------------------");

console.log("3)");
function swapValues(val1, val2) {
  console.log("Before Swapping:", val1, val2);
  var temp = val1;
  val1 = val2;
  val2 = temp;
  console.log("After Swapping:", val1, val2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("--------------------------------------");

console.log("4)");
function addThreeValues(val1, val2, val3) {
  console.log("After Adding: ", val1 + val2 + val3);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
