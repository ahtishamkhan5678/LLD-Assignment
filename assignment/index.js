

class IPLticket{
    constructor(Age,Gender,category){
        this._Age= Age
        this.Gender= Gender
        this.category= category

    }
    get Age(){
        return this._Age

    }

    set Age(value){
        this._Age=value


    }
}
// VVIP 

class VVIP extends IPLticket{
    constructor(Gender,category){
        super("VVIP",Gender,category)
    }
}

// Vip

class Vip extends IPLticket{
    constructor(Gender,category){
        super("Vip",Gender,category)
    }
}

// General

class General extends IPLticket{
    constructor(Gender,category){
        super("General",Gender,category)
    }
}

// let c1= new VVIP("Dl-1234","black")
// console.log(c1)
// parking Spot/ Slot
class Slot{    
    constructor(Age,number){
        this.number= number
        this.Age= Age
        this._isBooked= false  
    }
    get isBooked(){
        return this._isBooked

    }
    set isBooked(value){
        this._isBooked=value
    }
}

// Sitting floor

class SittingFloor{
    constructor(floorNumber,maxSpots){
        this.floorNumber= floorNumber
        this._sittingslot= [];

        for(let i=0; i<maxSpots; i++){
            if(i===0){
                this.sittingslot.push(new Slot("VVIP",i))
            }
            else if(i===1){
                this.sittingslot.push(new Slot("Vip",i))
            }
            else{
                this.sittingslot.push(new Slot("General",i))
            }
        }

    }
    get sittingslot(){
        return this.sittingslot

    }
    set sittingslot(value){
        this.sittingslot=value


    }

}
// Parking lot or the building

class ParkingLot {
    constructor(number) {
      this._floors = [];
      this._numberOfFloors = number;
  
      for (let i = 0; i < number; i++) {
        this._floors.push(new SittingFloor(i, 3));
      }
    }
  
    get numberOfFloors() {
      return this._numberOfFloors;
    }
  
    get floors() {
      return this._floors;
    }
  
    parkIPLticket(IPLticket) {
      let slot = this.findSlot(IPLticket.Age);
  
      if (slot) {
        this.bookSlot(slot);
        let ticket = new Ticket(slot.floorNumber, slot.slot.number);
        console.log("Tiket: ", ticket);
    } else {
        console.log("No slots");
        return false;
      }
    }
  
    findSlot(Age) {
      for (let i = 0; i < this._numberOfFloors; i++) {
        for (let slot of this._floors[i].sittingslot) {
          if (slot.Age === Age && !slot.isBooked) {
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
  
  let b1 = new Vip("DL-1234", "Red");
  
  let pl1 = new ParkingLot(3);
  
  pl1.parkIPLticket(b1);
  
