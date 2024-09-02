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

  class ElectricCar extends Car {
    batteryLife: number;

    constructor(make: string, batteryLife: number) {
      super(make);
      this.batteryLife = batteryLife;
    }

    charge(chargeAmount: number): void {
      this.batteryLife += chargeAmount;
      console.log('El coche se esta cargando...');
    }

  }

  let myCar = new Car("Toyota");
  myCar.drive();
}