// Exercise 1
class Car {
    readonly name: string;
    acceleration: number = 0;
    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Toooooooooot!");
    };

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
abstract class BaseObject {
    protected constructor (protected width: number = 0, protected length: number = 0) {
    }
};

class Rectangle extends BaseObject {
    constructor () {
        super(5,2);
    };
    calcSize(): number{
        return this.width * this.length;
    };
};

const rectangle = new Rectangle();
console.log(rectangle.calcSize());

// Exercise 3
class Person {
    private _firstName:string =  "";

    public get firstName():string {
        return this._firstName;
    };
    public set firstName(value: string) {
        if(value.length > 3){
            this._firstName = value;
        }
        else {
            this._firstName = "";
        };
    };
}

const person = new Person();
console.log(person.firstName);
person.firstName = "John";
console.log(person.firstName);
person.firstName = "Doe";
console.log(person.firstName);
