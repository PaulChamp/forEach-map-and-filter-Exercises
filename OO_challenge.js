//part one
class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "BEEEP";
    }
    toString(){
        return `The vehcile is a ${this.make} ${this.model} from ${this.year}`
    }
}

//part 2
class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

//part 3
class Motorcylce extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine() {
        return "Vroom!";
    }
}

//part 4
class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "only vehicles allowed";
        }
        if(this.vehicles.length >= this.capacity){
            return "garage full";
        }
        this.vehicles.push(newVehicle);
        return "vehicle added";
    }
}