namespace MyNameSpace {
  class Car {
    make: string;

    constructor(make: string) {
      this.make = make;
    }
  
    drive(): void {
      console.log(`Driving a ${this.make}`);
    }
  
  }

  let myCar = new Car("Toyota");
  myCar.drive();
}