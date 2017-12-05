// Function Expression
var fullName;
fullName = function fullName(first, last) {
    return first + " " + last;
};
console.log(fullName('Kyle', 'Hatch'));
// Immediately Invoked Version
(function (first, last) {
    console.log(first + " " + last);
})('Kyle', 'Hatch');
//# sourceMappingURL=immediately_invoked_function_arguments.js.map