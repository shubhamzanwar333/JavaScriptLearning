// console.log(`------------------------------------------------------------------------------`);
// console.log(`1) Define a class Vehicle with properties and constructor. `);
// class Vehicle {
//     constructor(type,modelYear,engine,color){
//         this.type = type;
//         this.modelYear = modelYear;
//         this.engine = engine;
//         this.color = color;
//     }
// }
// let myCar = new Vehicle("4 wheeler", 2012, "Petrol", "Red");
// let myBike = new Vehicle("2 wheeler", 2014, "Petrol", "Black");
// let myLuna = new Vehicle("2 wheeler", 2018, "Petrol", "Black");
// let mytruck = new Vehicle("10 Tyre", 2011, "Diesel", "Blue");
// let myTractor = new Vehicle("4 wheeler", 2015, "Diesel", "Yellow");

// console.log(myCar);
// console.log(myBike);
// console.log(myLuna);
// console.log(mytruck);
// console.log(myTractor);
// console.log(`------------------------------------------------------------------------------`);

// console.log(`2) Define a class College With properties,constructor and member function in it.`);
// console.log(``);
// class College {
//     constructor(name,address,university,type){
//         this.name=name;
//         this.address=address;
//         this.university=university;
//         this.type=type;
//     }
//     showdetails(){
//         console.log(this.name,",", this.address,",", this.university,",", this.type);
//     }
// }
// let modernCollege = new College ("Modern College", "Ch.Shivaji Nagar", "Pune University", "Private");
// let coepCollege = new College ("COEP College", "Ch.Shivaji Nagar", "Pune University", "Government");
// let garwareCollege = new College ("Garware College", "Erandwane", "Pune University", "Private");
// let bharatiVidyapeeth = new College ("Bharati Vidyapeeth", "Kothrud", "Bharati University", "Private");

// modernCollege.showdetails();
// coepCollege.showdetails();
// garwareCollege.showdetails();
// bharatiVidyapeeth.showdetails();
// console.log(`------------------------------------------------------------------------------`);

// console.log(`Traverse the complete given object using for in loop.`);

// function TraverseObject(value) {
//     for (const key in value) {
//         if (Object.hasOwnProperty.call(value, key)) {
//             const element = value[key];
//             console.log(element);
//         }
//     }
// }
// TraverseObject("modernCollege");

// let fibonicii = [];
// for (let index = 1; index <=7; index++) {
    
//     fibonicii = fibonicii + index;
       
// }
// console.log(fibonicii);



let isPrime = true ;
     let primeNumber = function(num) {

        if (num<=0){
            console.log(`${num} is Invalid number. Please provide number greater than 0.`);
            
        }
        else if(num == 1){
            console.log(`${num} is nor prime number nor composite number`);
        }
        else if(num>1){
            for (let index = num; index > 1; index--) {
                if(num%2==0) {
                    isPrime = false ;
                    break;
                } 
            }
        }
        if (isPrime) {
            console.log(`${num} is a prime number`);
        } else {
            console.log(`${num} is a not a prime number`);
        }
    }
    primeNumber(5);







// }
// if(isPrime) {
//     console.log(`Number is a prime number`);
// }
// else {
//     console.log(`Number is not a prime number`);
// }
// }