// Boolean true/false
var paidAccount = true;
// Number
var age = 33;
var taxRate = 8;
// String
var fullName = "Kyle Hatch";
// Array
var ages = [1, 2, 3, 4, 5];
// Tuple
var player;
player = [3, 'Kyle', 10, 5];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approve"] = 0] = "Approve";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any
var apiData = [1, 3, 4, 'Kyle', 3, 5, true, false];
// Void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=types.js.map