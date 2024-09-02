namespace MyNameSpace {

  class Car {
    private make: string;

    constructor(make: string) {
      this.make = make;
    }
  
    drive(): void {
      console.log(`Driving a ${this.make}`);
    }
  
    getMake(): string {
      return this.make;
    }

  }

  let myCar = new Car("Toyota");
  myCar.drive();
}