/* Create a `myName` variable and assign it a String value */

var myName = 'this is a string value';

/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */

 var person = {
     name: 'this is a string value',
     age: 21
 };

/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */

 var canDrive = (person.age >= 16);
 console.log(canDrive);

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */

 function greet(name){
     console.log('Hello, my name is ' + name);
 }
 greet('Rian');

/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */

 var dataTypes = ['this is a string', 0, true, {type: 'object'}, ['array'], null, undefined];
 console.log(dataTypes);

/* Create a `dog` object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */

 var dog = {
    barkFunction: (function(){console.log("Bark!")}),
    name: 'Spot'
 }
 console.log(dog);
 dog.barkFunction();