// Please, create and add correct interface for the person
interface PersonFirstName {
    firstName: string;
};

function greet(person: PersonFirstName) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: PersonFirstName) {
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

interface PersonClass {
    firstName: string;
    lastName: string;
    greet(lastName: string): void;
};

class Person implements PersonClass {
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
