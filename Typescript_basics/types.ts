// Boolean true/false
let paidAccount : boolean = true;

// Number
let age : number = 33;
var taxRate : number = 8;

// String
var fullName : string = "Kyle Hatch";

// Array
var ages : number[] = [1, 2, 3, 4, 5];

// Tuple
let player : [number, string, number, number];
player = [3, 'Kyle', 10, 5];

// Enum
enum ApprovalStatus {Approve, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiData : any[] = [1, 3, 4, 'Kyle', 3, 5, true, false];

// Void
function printOut(msg: string) : void {
  console.log(msg);
}