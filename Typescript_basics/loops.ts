var x : number = 0;

while (x < 10) {
  console.log(x);
  x++;
}

let players : number[] = [1, 2, 3, 4, 5];

// For / In
console.log("For/In");
for (let i in players) {
  console.log(i);
}

// For / Of
console.log("For/Of");
for (let i of players) {
  console.log(players);
}
