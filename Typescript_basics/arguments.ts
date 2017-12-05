// function printAddress(street:string, streetTwo?:string, state = 'UT') {
//   console.log(street);
//   if (streetTwo) {
//     console.log(streetTwo);
//   }
//   console.log(state);
// }

// printAddress('123 Any St');
// printAddress('123 Any St', 'Suite 540');
// printAddress('123 Any St', 'Suite 540', 'UT');

function lineupCard(team:string, ...players:string[]) {
  console.log('Team: ' + team);
  for (let i of players) {
    console.log(i);
  }
}

lineupCard('Team Liquid', 'Miracle', 'MATUMBAMAN', 'MinD_ContRoL', 'KuroKy', 'Heen');