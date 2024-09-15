// Exercise 1
// Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for..of
console.log('Exercise 1: ') 
const greeter = (myArray, counter) => {
    var greeText = 'Hello ';
    for (var i = 0; i < myArray.length; i++)
    {
        console.log(greeText + myArray[i]);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

console.log();

// Exercise 2
// Using destructuring assignment syntax and the spread operator, write a function will capitalize the first letter of a string. 
console.log('Exercise 2: ')

function capitalizeFirstLetter(str) {
    const [first, ...rest] = str;  
    return first.toUpperCase() + rest.join('');
  }
  
console.log(capitalizeFirstLetter("fooBar"));  
console.log(capitalizeFirstLetter("nodeJs")); 

console.log();
// Exercise 3
// Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array.. 
console.log('Exercise 3: ')
const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map(capitalizeFirstLetter);
console.log(capitalizedColors); 

console.log();
// Exercise 4
// Using array.proto.reduce create calculate the sum and product of a given array. 
console.log('Exercise 4: ')
function calculateSumAndProduct(arr) 
{
    return arr.reduce((acc, num) => {
      acc.sum += num;        
      acc.product *= num;     
      return acc;
    }, { sum: 0, product: 1 });  
}

const numbers = [1, 2, 3, 4];
const result = calculateSumAndProduct(numbers);

console.log(result);


console.log();
// Exercise 6
// Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives from Car Class. The parameters for the Car class is the model and year. The parameters for the subclass is the model, year and balance. • Use the super key word in the Sedan subclass to set the model and name in base Car constructor. 
console.log('Exercise 6: ')
class Car{
    constructor(model, year)
    {
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return "Model: " + this.model + ", year: " + this.year;
    }

    getModel() {
        return this.model;
    }

    getYear() {
        return this.year;
    }
}

class Sedan extends Car{
    constructor(model, year, power)
    {
        super(model, year);
        this.power = power;
    }

    getInfo() {
        return super.getDetails() + ", power: " + this.power;
    }

}
const car1 = new Car('Ponatic FireBird', '1976');
console.log(car1.getDetails());

const mySedan = new Sedan("Toyota Camry", 2020, 20000);
console.log(mySedan.getInfo());