
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `${this.name} is ${this.age} year(s) old. `
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getGreeting() {
        let description = super.getGreeting();

        if(this.hasMajor()){
            description = description += `Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let description = super.getGreeting();

        if(this.hasHomeLocation()) {
            description = description += `His hometown is ${this.homeLocation}.`
        }
        return description;
    }
}

const me = new Traveler('Van de Castro', 20, 'Philly');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());