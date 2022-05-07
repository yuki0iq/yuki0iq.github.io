question_sets = [
  ['Тест Агасфера', '', 1, [
    [4, 'Ты говоришь'],
    [1, 'Ты умеешь думать'],
    [6, 'Ты убил человека'],
    [3, 'Ты моешься'],
    ]],
]

for (i = 0; i < question_sets.length; i += 1) {
  shuffle(question_sets[i][3])
}
create(question_sets)

function recalc() {
  str = ''
  
  // get vans
  vans = [0, 0, 0, 0]
  for (i = 0; i < question_sets.length; i += 1) {
    for (j = 0; j < question_sets[i][3].length; j += 1) {
      i_n = 'i' + i + '-' + j
      f_n = '#form' + i + '-' + j
      v_sub = $('input[name=' + i_n + ']:checked', f_n)
      if (v_sub.length == 0) {  // Not selected
        v_sub = 0
      } else {
        v_sub = -v_sub[0].value
      }
      wh = question_sets[i][3][j][0]
      console.log(wh, v_sub)
      if (wh == 4 || wh == 5 || wh == 6 || wh == 7) {
        wh -= 4
        v_sub = -v_sub
      }
      vans[wh] -= v_sub  // yeah, the shit..
    }
  }
  str += '[I>E] [N>S] [F>T] [J>P]\n'
  mx = 0
  for (j = 0; j < 4; j += 1) {
    if (vans[j] > mx) {
      mx = vans[j]
    }
  }
  for (j = 0; j < 4; j += 1) {
    str += rjust(vans[j].toString(), 4)
    if (vans[j] == mx) {
      str += '!'
    } else {
      str += ' '
    }
    str += ' '
  }
  str += '\n'
  str += '\n'
  
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

  str += 'Твой тип: '
  str2 = ''
  if (vans[0] > 0) { str2 += 'I' } else { str2 += 'E' }
  if (vans[1] > 0) { str2 += 'N' } else { str2 += 'S' }
  if (vans[2] > 0) { str2 += 'F' } else { str2 += 'T' }
  if (vans[3] > 0) { str2 += 'J' } else { str2 += 'P' }
  str += str2
  str += ' '
  str += names.get(str2)
  str += '\n'
  
  document.getElementById('res').innerHTML = '<pre>' + str + '</pre>'
}

recalc();  // Initial recalc
