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
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var i = players_1[_a];
        console.log(i);
    }
}
lineupCard('Team Liquid', 'Miracle', 'MATUMBAMAN', 'MinD_ContRoL', 'KuroKy', 'Heen');
//# sourceMappingURL=arguments.js.map