// Function Expression
var fullName : (first:string, last:string) => string;

fullName = function fullName(first:string, last:string) {
  return first + " " + last;
}

console.log(fullName('Kyle', 'Hatch'));

// Immediately Invoked Version
(function(first:string, last:string) {
  console.log(first + " " + last)
})('Kyle', 'Hatch');