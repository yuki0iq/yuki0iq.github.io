question_sets = [
  ['Тест Агасфера', '', 5, 1, [
    ['Ты говоришь', [['E', 2, 1, 0, -1, -2], ['I', -2, -1, 0, 1, 2]]],
    ['Ты умеешь думать', [['N', 2, 1, 0, -1, -2], ['S', -2, -1, 0, 1, 2]]],
    ['Ты убил человека', [['T', 2, 1, 0, -1, -2], ['F', -2, -1, 0, 1, 2]]],
    ['Ты моешься', [['J', 2, 1, 0, -1, -2], ['P', -2, -1, 0, 1, 2]]]
    ]],
]

for (i = 0; i < question_sets.length; i += 1) {
  shuffle(question_sets[i][4])
}
create(question_sets)

function recalc() {
  str = ''
  
  E = 0, I = 0, N = 0, S = 0, T = 0, F = 0, J = 0, P = 0
  for (i = 0; i < question_sets.length; i += 1) {
    for (j = 0; j < question_sets[i][4].length; j += 1) {
      i_n = 'i' + i + '-' + j
      v_sub = $('input[name=' + i_n + ']:checked')
      if (v_sub.length != 0) {
        eval(v_sub[0].value)
      }
    }
  }
  
  names = new Map()
  names.set('INTJ', 'Strateg')
  names.set('INTP', 'Ucheny')
  names.set('ENTJ', 'Komandir')
  names.set('ENTP', 'Polemist')
  names.set('INFJ', 'Aktivist')
  names.set('INFP', 'Posrednik')
  names.set('ENFJ', 'Trener')
  names.set('ENFP', 'Borec')
  names.set('ISTJ', 'Administrator')
  names.set('ISFJ', 'Zashitnik')
  names.set('ESTJ', 'Menedjer')
  names.set('ESTP', 'Konsul')
  names.set('ISTP', 'Virtuoz')
  names.set('ISFP', 'Artist')
  names.set('ESTP', 'Delec')
  names.set('ESFP', 'Razvlekatel')

  str2 = ''
  if (I - E > 0) { str2 += 'I' } else { str2 += 'E' }
  if (N - S > 0) { str2 += 'N' } else { str2 += 'S' }
  if (F - T > 0) { str2 += 'F' } else { str2 += 'T' }
  if (J - P > 0) { str2 += 'J' } else { str2 += 'P' }

  str += 'Твой тип: <b>' + str2 + '-'
  if (E * E + N * N + F * F + P * P == 16) { str += 'A' } else { str += 'T' }
  str += '</b> ' + names.get(str2)
  
  document.getElementById('res').innerHTML = str
}

recalc();  // Initial recalc
