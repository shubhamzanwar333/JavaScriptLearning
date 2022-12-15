        console.log("\n");
var stringHandsOn = function () {

    var str = "     Hey you are doing good, keep it up     ";
     console.log(`1)The given string is:  ${str}`);

     console.log("\n");

      var beforeLength = str.length;
     console.log(`2)The length of the given string is: ${beforeLength}`);

     console.log("\n");

     var trim = str.trim();
     console.log(`3)After removing extra spaces : ${trim}`);

     console.log("\n");

     var afterLength = trim.length;
     console.log(`4)Count of Extra spaces that removed is: ${beforeLength-afterLength}`);

     console.log("\n");

     console.log(`5)The first character of string is ${trim.charAt(0)} and the last character is ${trim.charAt(trim.length-1)}`);

     console.log("\n");
     var wordsInSentence = trim.split(" ");
     console.log(`6) Total words in the string are:  ${wordsInSentence.length}`);

     console.log("\n");

     console.log(`7) Index of word "good" is: ${trim.indexOf("good")}`);

     console.log("\n");

     console.log(`8) (Using substr) Substring starting from index 22 is : ${trim.substr(22,trim.length-1)}`);
     console.log(`8) (Using Slice) Substring starting from index 22 is : ${trim.slice(22, trim.length-1)}`);

     console.log("\n");

     console.log(`9) Is string ending up with "up" : ${str.endsWith("up")}`);

     console.log("\n");
     
     console.log(`10) Is string starting up with "Hey" : ${trim.startsWith("Hey")}`);

}
stringHandsOn();