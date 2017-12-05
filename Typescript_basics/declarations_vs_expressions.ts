function fullName(first:string, last:string) : string {
  return first + " " + last;
}

// Function Expressions

var otherFullName : (first:string, last:string) => string;

otherFullName = function (first: string, last: string) {
  return first + " " + last;
}

var thirdFullName: (first: string, last: string) => string = function (first: string, last: string) {
  return first + " " + last;
}

console.log(fullName('Kyle', 'Hatch'));
console.log(otherFullName('Kyle', 'Hatch'));
console.log(thirdFullName('Kyle', 'Hatch'));
