console.log("1)");
var square = function (num) {
    console.log("The square of ",num , "is", num*num);
}
square(5);
square(6);
square(25);
square(100);
console.log("--------------------------------");

console.log("2)");
console.log("The type Of square is : " +typeof square);
console.log("--------------------------------");

console.log("3)");
var rectangle = function(length, breadth) {
    var area = length * breadth;
    console.log("Area of Rectangle is: ", area, "Sq.Units");
}
rectangle(499,917);
console.log("------------------------------------");

console.log("4)");
var swapValues = function(val1,val2) {
    console.log("Before Swapping: ", val1, val2);
    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("After Swapping: ", val1, val2);
}
swapValues("Virat", "Anushka");
swapValues(1000,2000);
console.log("------------------------------------");

console.log("5)");
var str = function(value) {
    var length = value.length;
    console.log("String is: " ,value);
    console.log("Total number of available characters in the string is ", value.length);
    console.log("Character at index 6 is ", value.charAt(6));
    console.log("Character at index 11 is ", value.charAt(11));
    console.log("The last character in the string is ", value.charAt(value.length-1));
    console.log("The First character in the string is ", value.charAt(0));
    console.log("Square of length of given String is ", value.length*value.length);

}
str("JS the most popular language");


