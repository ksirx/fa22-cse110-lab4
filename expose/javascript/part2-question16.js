/*Part 2 Q16*/
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(let car in statistics) {                        // iterates through all cars
    if(statistics[car] % 2 != 0 || car[0] == 'r') { // finds those with odd number properties
        console.log(statistics[car]);               // prints the data for those cars
    }
}