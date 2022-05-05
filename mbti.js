function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

question_sets = [
  ['Temp', 'This is a rofl', [['Ni',0],['Ne',1],['Si',2],['Se',3],['Fi',4],['Fe',5],['Ti',6],['Te',7]]],
]

for (i = 0; i < question_sets.length; i += 1) {
  shuffle(question_sets[i][2])
}
create(question_sets)
console.log(question_sets)

// temp
function recalc() {
  alert("yes.");
}

recalc();  // Initial recalc
