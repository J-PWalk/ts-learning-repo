class Car {
    make: string;
    model: string;
    year: number;
    
    constructor (make: string, model:string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    getFullDescription(): string {
        return `${this.make} ${this.model}, Year: ${this.year}`;
    }
    
}
const myCar = new Car("Toyota", "Camry", 2022);