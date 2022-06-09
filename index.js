// LLD :- Low level design
// High level design

// Road :- Head of village (LLD)
// NH :- NItitin Gatkari (HLD)

class Vehicle{
    constructor(type,regNumber,color){
        this._type= type
        this.regNumber= regNumber
        this.color= color

    }
    get type(){
        return this._type

    }

    set type(value){
        this._type=value


    }
}
// Car 

class Car extends Vehicle{
    constructor(regNumber,color){
        super("car",regNumber,color)
    }
}

// Bike

class Bike extends Vehicle{
    constructor(regNumber,color){
        super("bike",regNumber,color)
    }
}

// Truck

class Truck extends Vehicle{
    constructor(regNumber,color){
        super("truck",regNumber,color)
    }
}

// let c1= new Car("Dl-1234","black")
// console.log(c1)
// parking Spot/ Slot
class Slot{    
    constructor(type,number){
        this.number= number
        this.type= type
        this._isBooked= false  
    }
    get isBooked(){
        return this._isBooked

    }
    set isBooked(value){
        this._isBooked=value
    }
}

// individual floor

class ParkingFloor{
    constructor(floorNumber,maxSpots){
        this.floorNumber= floorNumber
        this._parkingSpots= [];

        for(let i=0; i<maxSpots; i++){
            if(i===0){
                this._parkingSpots.push(new Slot("car",i))
            }
            else if(i===1){
                this._parkingSpots.push(new Slot("bike",i))
            }
            else{
                this._parkingSpots.push(new Slot("truck",i))
            }
        }

    }
    get parkingSpots(){
        return this._parkingSpots

    }
    set parkingSpots(value){
        this._parkingSpots=value


    }

}
// Parking lot or the building

class ParkingLot {
    constructor(number) {
      this._floors = [];
      this._numberOfFloors = number;
  
      for (let i = 0; i < number; i++) {
        this._floors.push(new ParkingFloor(i, 3));
      }
    }
  
    get numberOfFloors() {
      return this._numberOfFloors;
    }
  
    get floors() {
      return this._floors;
    }
  
    parkVehicle(vehicle) {
      let slot = this.findSlot(vehicle.type);
  
      if (slot) {
        this.bookSlot(slot);
        let ticket = new Ticket(slot.floorNumber, slot.slot.number);
        console.log("Tiket: ", ticket);
    } else {
        console.log("No slots");
        return false;
      }
    }
  
    findSlot(type) {
      for (let i = 0; i < this._numberOfFloors; i++) {
        for (let slot of this._floors[i]._parkingSpots) {
          if (slot.type === type && !slot.isBooked) {
            return { floorNumber: i, slot: slot };
          }
        }
      }
  
      return false;
    }
  
    bookSlot(slot) {
      slot.slot.isBooked = true;
      console.log("Slot is Booked");
      return true;
    }
  }
// Ticket

  class Ticket {
    constructor(floorNumber, slotNumber) {
      this.floorNumber = floorNumber;
      this.slotNumber = slotNumber;
      this.issuedAt = new Date();
    }
  }
  
  let b1 = new Bike("DL-1234", "Red");
  
  let pl1 = new ParkingLot(3);
  
  pl1.parkVehicle(b1);
  
