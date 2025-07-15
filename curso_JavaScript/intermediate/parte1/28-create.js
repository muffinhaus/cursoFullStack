class Car{
    
}

const car =  new Car()

console.log(car instanceof(Car))

//create

const anotherCar =  Object.create(Car.prototype);
