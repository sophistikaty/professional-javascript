// You may write JavaScript here...

console.log('Ready to dive.');

function printName (first, last) {
	console.log(arguments);
	console.log(last);
}



// function goBoom () {
// 	console.log('BOOM');
// }

// goBoom();

// function add (a,b) {
// 	return a + b;
// }

// var sum = add (10, 5);
// console.log(sum);

// // Invoke vs. Reference

// console.log(add); // This references the function

// console.log (add(10,10)); // This invokes.

// // Declaration vs. Assignment

// beepD();

// function beepD () {
// 	// declaration
// 	console.log('declaration');
// }

// // beepA(); //console returns error because the function isn't assigned to the variable until after this line.

// var beepA = function () {
// 	// assignment
// 	console.log('Assignemnt');

// }

// // First Class-Functions

// // 1) assign functions to variables...

// var jane = function () {

// }

// console.log (typeof jane);

// // 2) store functions within data structures

// var car = {
// 	color: 'yellow',
// 	doors: '3',
// 	honk: function () {
// 		console.log('beep beep');
// 	}
// };

// car.honk();

// // 3) Functions can be passed as arguments to other functions

// function addEventListener (eventName, callbackFunction) {
// 	console.log(callbackFunction)
// }

// addEventListener('click', function() {
// 	//do stuff when click happens...

// });

// // 4) Functions may return other functions

// function makeBeeper() {
// 	return function() {
// 		//.....
// 	};
// }

// var assign = function() {}


function highFive() {
	console.log(this);
	console.log('Hello my name is: ', this.name);
}

// 1) Function invocation Pattern:
//we didn't provide a specific context.
//so, the funciton defaults to using global scope.

highFive();

// there are 4 'patterns of invocation'/ ways to invoke a function

// 2) the Call Invocation pattern

var puppy = {name: 'fido'};
highFive.call(puppy);

// 3) Method invocation pattern

var user = {
	name: 'bigvader23',
	highFive: highFive
};

user.highFive()

// fourth type "is so close to proto-typal inheritance
// that it doesn't actually make sense to go over-that without
//going into proto-types, so we'll leave it here.













