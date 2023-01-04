console.log(`-----------------------------------------------------------------------------------------------------------`);
const car = {
    carName : "Creta SX",
    company : "Hyundai",
    launchYear : 2017
}

const carEngine = {
    enginePower : "1499CC",
    maxpower : "113 BHP"
}

 const newCarEngine = Object.assign(car,carEngine);
 console.log(`Merging car and carEngine objects using Object.assign: `);
 console.log(newCarEngine);
 console.log(``);
 console.log(`Merging car and carEngine objects using spread operator `);
 const myCarEngine = {... car, ...carEngine};
 console.log(myCarEngine);
 console.log(`-----------------------------------------------------------------------------------------------------------`);