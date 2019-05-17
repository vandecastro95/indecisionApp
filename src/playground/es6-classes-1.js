
// take name and age ( default to 0)

 class Person {
   constructor(name = 'Anonymous', age = 0){
     this.name = name;
      this.age = age;
   }
   getGreeting() {
     return `Hi, I am ${this.name}!`;
   }
   getDescription() {
     return `${this.name} is ${this.age} year(s) old.`
   }
 }

 class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    return description;

    if(this.hasMajor()){
      description += ` Their major is ${this.major}`;
    }
  }
 }

 //traveler extends person class
 //add support for home location
 //over ride get greeting

 class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hashomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting(){

    let greeting = super.getGreeting();
    if(this.hashomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting;
  }
 }

 const me = new Traveler('Andrew Mead', 24, 'computer science');
 const other = new Traveler();
 console.log(me)
 console.log(other)
 console.log(me.getGreeting())