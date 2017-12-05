console.log(fullName('Kyle', 'Hatch'));
console.log(otherFullName('Kyle', 'Hatch'));
console.log(thirdFullName('Kyle', 'Hatch'));
function fullName(first, last) {
    return first + " " + last;
}
// Function Expressions
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
//# sourceMappingURL=declarations_vs_expressions.js.map