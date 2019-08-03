// Please, create and add correct interface for the person

function greet(person) {
    console.log("Hello, " + person.firstName);
}

function changeName(person) {
    person.firstName = "Anna";
}

const person = {
    firstName: "John",
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

changeName(person);
greet(person);
person.greet("Anything");

class Person {
    firstName: string;
    lastName: string;

    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson = new Person();
myPerson.firstName = "Doe";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);
