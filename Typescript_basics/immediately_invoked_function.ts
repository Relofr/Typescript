var names : string[] = ['Miracle', 'GH', 'Heen', 'Mind_Control', 'Matumbaman'];
var counter : number = 0;

(function() {
  for (let i in names) {
    counter++;
  }
})();

console.log(counter);