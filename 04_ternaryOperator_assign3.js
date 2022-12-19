console.log(`\n`);
console.log(`1)`);
var interview = function (gradScore,hscScore,sscScore,candidateName) {

    var result = (gradScore>=70 || hscScore>=80 || sscScore>90 ) ? `Congrats ${candidateName} you are eligible for TCS interview.`
                : `Unfortunately ${candidateName} you are not eligible for TCS interview.`;
    console.log(`${result}`);

}
interview(80,86,90,"Shubham");
interview(70,65,55,"Nikhil");
interview(60,79,88,"Sanjana");
