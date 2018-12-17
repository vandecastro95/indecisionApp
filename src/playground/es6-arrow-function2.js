//arguments object - no longer bound with arrow functions

const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));
//this keyword - no longer bound

const user = {
  name: "Van",
  cities: ["austin", "iligan", "manila"],
  printPLacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);

    return cityMessages;
    // this.cities.forEach((city) => {
    //     console.log(this.name + ' has lived in ' + city)
    // })
  }
};

console.log(user.printPLacesLived());

const multiplier = {
    numbers: [1 , 2 , 3 , 4, 5],
    multiplyBy: 2,

    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());