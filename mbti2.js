// Cognitive functions
aNi = ['Ni', 2, 1, 0, -1]
aNe = ['Ne', 2, 1, 0, -1]
aSi = ['Si', 2, 1, 0, -1]
aSe = ['Se', 2, 1, 0, -1]
aFi = ['Fi', 2, 1, 0, -1]
aFe = ['Fe', 2, 1, 0, -1]
aTi = ['Ti', 2, 1, 0, -1]
aTe = ['Te', 2, 1, 0, -1]
// Preference
aNiSeT = ['NiSe', 3, 2, 1, 0, -1]
aNeSiT = ['NeSi', 3, 2, 1, 0, -1]
aFiTeT = ['FiTe', 3, 2, 1, 0, -1]
aFeTiT = ['FeTi', 3, 2, 1, 0, -1]
aNiSeF = ['NiSe', -1, 0, 1, 2, 3]
aNeSiF = ['NeSi', -1, 0, 1, 2, 3]
aFiTeF = ['FiTe', -1, 0, 1, 2, 3]
aFeTiF = ['FeTi', -1, 0, 1, 2, 3]
// Secondary preference
aNiP = ['NiP', 2, 1, 0, -1]
aNeP = ['NeP', 2, 1, 0, -1]
aSiP = ['SiP', 2, 1, 0, -1]
aSeP = ['SeP', 2, 1, 0, -1]
aFiP = ['FiP', 2, 1, 0, -1]
aFeP = ['FeP', 2, 1, 0, -1]
aTiP = ['TiP', 2, 1, 0, -1]
aTeP = ['TeP', 2, 1, 0, -1]
// loops
alNiFe = ['lNiFe', 2, 1, 0, -1]
alNiTe = ['lNiTe', 2, 1, 0, -1]
alNeFi = ['lNeFi', 2, 1, 0, -1]
alNeTi = ['lNeTi', 2, 1, 0, -1]
alSiFe = ['lSiFe', 2, 1, 0, -1]
alSiTe = ['lSiTe', 2, 1, 0, -1]
alSeFi = ['lSeFi', 2, 1, 0, -1]
alSeTi = ['lSeTi', 2, 1, 0, -1]
alFiNe = ['lFiNe', 2, 1, 0, -1]
alFiSe = ['lFiSe', 2, 1, 0, -1]
alFeNi = ['lFeNi', 2, 1, 0, -1]
alFeSi = ['lFeSi', 2, 1, 0, -1]
alTiNe = ['lTiNe', 2, 1, 0, -1]
alTiSe = ['lTiSe', 2, 1, 0, -1]
alTeNi = ['lTeNi', 2, 1, 0, -1]
alTeSi = ['lTeSi', 2, 1, 0, -1]
// grips
agNiFe = ['gNiFe', 2, 1, 0, -1]
agNiTe = ['gNiTe', 2, 1, 0, -1]
agNeFi = ['gNeFi', 2, 1, 0, -1]
agNeTi = ['gNeTi', 2, 1, 0, -1]
agSiFe = ['gSiFe', 2, 1, 0, -1]
agSiTe = ['gSiTe', 2, 1, 0, -1]
agSeFi = ['gSeFi', 2, 1, 0, -1]
agSeTi = ['gSeTi', 2, 1, 0, -1]
agFiNe = ['gFiNe', 2, 1, 0, -1]
agFiSe = ['gFiSe', 2, 1, 0, -1]
agFeNi = ['gFeNi', 2, 1, 0, -1]
agFeSi = ['gFeSi', 2, 1, 0, -1]
agTiNe = ['gTiNe', 2, 1, 0, -1]
agTiSe = ['gTiSe', 2, 1, 0, -1]
agTeNi = ['gTeNi', 2, 1, 0, -1]
agTeSi = ['gTeSi', 2, 1, 0, -1]

question_sets = [
  ['Ne против Ni', '', 4, [
    ['Я делюсь информацией', [aNe]],
    ['Я собираю информацию', [aNi]],
    ['Мои идеи разнообразны', [aNe]],
    ['Мои идеи - углубленное рассмотрение одной идеи', [aNi]],
    ['Я знаю немного о многом', [aNe]],
    ['Я знаю много о малом', [aNi]],
    ['У меня в основном нет плана, в приоритете скорость реагирования', [aNe]],
    ['У меня в основном есть план, в приоритете анализирование', [aNi]],
    ['Я не могу точно передать свою мысль', [aNe]],
    ['Я не могу вообще передать свою мысль - мне сложно начать', [aNi]],
    ['Я постоянно отвлекаюсь', [aNe]],
    ['У меня есть склонности к некропостингу', [aNi]],
    ['В разговоре перескоки между темами - обычное дело', [aNe]],
    ['Я обычно не отхожу от темы, но, бывает, не рассказываю полностью, думая, что и так понятно', [aNi]]
    ]],
  ['Se против Si', '', 4, [
    ['Я больше наблюдаю, чем реагирую', [aSi]],
    ['Я больше реагирую, чем наблюдаю', [aSe]],
    ['План моего будущего построен на опыте прошлого', [aSi]],
    ['У меня нет плана будущего, я живу в настоящем', [aSe]],
    ['Я учусь на своих ошибках', [aSi]],
    ['Я забываю о своих неудачах', [aSe]],
    ['В основном я делаю всё одинаково, могу документировать свои действия', [aSi]],
    ['Я забываю, какие действия были выполнены, и не стану записывать последовательность', [aSe]],
    ['Сначала думай, а потом действуй', [aSi]],
    ['Типичные богатыри: сначала бьют, а потом спрашивают', [aSe]],
    ['Лучше получить более сильное удовольствие, но потом', [aSi]],
    ['Не откладывай на завтра то, что может принести удовольствие уже сегодня', [aSe]],
    ['Я буду повторять те действия, которые уже принесли мне радость', [aSi]],
    ['Я ищу новые методы получения удовольствия', [aSe]]
    ]],
  ['Fe против Fi', '', 4, [
    ['Мои ценности - это мои ценности', [aFi]],
    ['Я полностью разделяю ценности, принятые в обществе', [aFe]],
    ['Я составляю мнение, ставя в приоритет себя, а не группу', [aFi]],
    ['Я составляю мнение, ставя в приоритет группу, а не себя', [aFe]],
    ['Я осознаю себя больше, чем других', [aFi]],
    ['Я понимаю кого угодно лучше, чем себя', [aFe]],
    ['Я больше сопереживаю, чем сочувствую, и делаю это исходя из своего опыта', [aFi]],
    ['Я больше сочувствую, чем сопереживаю, и могу сделать это в любой момент', [aFe]],
    ['Я - уникальный человек', [aFi]],
    ['Я хочу вписаться в общество', [aFe]],
    ['За мной следят', [aFi]],
    ['Я - невидимка', [aFe]],
    ['Я стараюсь не подстраиваться под людей', [aFi]],
    ['Отдельная маска на каждого человека/группу - это я', [aFe]]
    ]],
  ['Te против Ti', '', 4, [
    ['Я навожу порядок вокруг', [aTe]],
    ['Я навожу порядок в себе, могу быть неряшливым человеком', [aTi]],
    ['Я беру на себя ответственность и отвожу приказы. Строгий и контролирующий лидер', [aTe]],
    ['В контроле не заинтересован. Сдержанный и менее жёсткий лидер', [aTi]],
    ['Несдержан, делюсь фактами, быстро делюсь мнением', [aTe]],
    ['Редко, но резко вкидываю мнения, после которых ощущаю чувство вины', [aTi]],
    ['Больше напряжён, чем расслаблен', [aTe]],
    ['Больше расслаблен, чем напряжён', [aTi]],
    ['Важен результат', [aTe]],
    ['Важен процесс', [aTi]],
    ['Есть уверенность в суждениях. Использую язык фактов, черно-белый мир', [aTe]],
    ['Неуверенность в мнении. Использую язык выводов, всё можно поменять', [aTi]],
    ['Факт есть факт', [aTe]],
    ['Факт можно поменять', [aTi]]
    ]]
]

for (i = 0; i < question_sets.length; i += 1) {
  shuffle(question_sets[i][3])
}
create(question_sets)

function recalc() {
  str = ''

  out = function(val, mx) {
    return '<td>' + val.toString() + (val == mx ? '!' : '') + '</td>'
  }
  ou = function(val) {
    return '<td>' + val + '</td>'
  }

  str += '<h3>Исходный результат</h3>'

  Ni = 0, Ne = 0, Si = 0, Se = 0, Fi = 0, Fe = 0, Ti = 0, Te = 0
  NiSe = 0, NeSi = 0, FiTe = 0, FeTi = 0
  NiP = 0, NeP = 0, SiP = 0, SeP = 0, FiP = 0, FeP = 0, TiP = 0, TeP = 0
  lNiFe = 0, lNiTe = 0, lNeFi = 0, lNeTi = 0
  lSiFe = 0, lSiTe = 0, lSeFi = 0, lSeTi = 0
  lFiNe = 0, lFiSe = 0, lFeNi = 0, lFeSi = 0
  lTiNe = 0, lTiSe = 0, lTeNi = 0, lTeSi = 0
  gNiFe = 0, gNiTe = 0, gNeFi = 0, gNeTi = 0
  gSiFe = 0, gSiTe = 0, gSeFi = 0, gSeTi = 0
  gFiNe = 0, gFiSe = 0, gFeNi = 0, gFeSi = 0
  gTiNe = 0, gTiSe = 0, gTeNi = 0, gTeSi = 0

  // <==== Rebuild table
  for (i = 0; i < question_sets.length; i += 1) {
    for (j = 0; j < question_sets[i][3].length; j += 1) {
      i_n = 'i' + i + '-' + j
      v_sub = $('input[name=' + i_n + ']:checked')
      if (v_sub.length != 0) {  // selected
        eval(v_sub[0].value)
        console.log(v_sub[0].value)
      }
    }
  }
  str += 'Когнитивные функции'
  str += '<table>'
  str += '<tr> <th>Ni</th> <th>Ne</th> <th>Si</th> <th>Se</th> <th>Fi</th> <th>Fe</th> <th>Ti</th> <th>Te</th> <th>Группа</th> </tr>'
  str += '<tr>' + ou(Ni)  + ou(Ne)  + ou(Si)  + ou(Se)  + ou(Fi)  + ou(Fe)  + ou(Ti)  + ou(Te)  + ou('Ne vs Ni; Se vs Si; Fe vs Fi; Te vs Ti') + '</tr>'
  str += '<tr>' + ou(NiP) + ou(NeP) + ou(SiP) + ou(SeP) + ou(FiP) + ou(FeP) + ou(TiP) + ou(TeP) + ou('Превосходство по осям') + '</tr>'
  str += '</table>'
  str += 'Когнитивные оси'
  str += '<table>'
  str += '<tr> <th>NiSe</th> <th>NeSi</th> <th>FiTe</th> <th>FeTi</th>'
  str += '<tr>' + ou(NiSe) + ou(NeSi) + ou(FiTe) + ou(FeTi) + '</tr>'
  str += '</table>'
  str += 'Лупы и грипы'
  str += '<table>'
  str += '<tr> <th>Тип</th> <th>Луп</th> <th>Грип</th> </tr>'
  str += '<tr>' + ou('NiFe') + ou(lNiFe) + ou(gNiFe) + '</tr>'
  str += '<tr>' + ou('NiTe') + ou(lNiTe) + ou(gNiTe) + '</tr>'
  str += '<tr>' + ou('NeFi') + ou(lNeFi) + ou(gNeFi) + '</tr>'
  str += '<tr>' + ou('NeTi') + ou(lNeTi) + ou(gNeTi) + '</tr>'
  str += '<tr>' + ou('SiFe') + ou(lSiFe) + ou(gSiFe) + '</tr>'
  str += '<tr>' + ou('SiTe') + ou(lSiTe) + ou(gSiTe) + '</tr>'
  str += '<tr>' + ou('SeFi') + ou(lSeFi) + ou(gSeFi) + '</tr>'
  str += '<tr>' + ou('SeTi') + ou(lSeTi) + ou(gSeTi) + '</tr>'
  str += '<tr>' + ou('FiNe') + ou(lFiNe) + ou(gFiNe) + '</tr>'
  str += '<tr>' + ou('FiSe') + ou(lFiSe) + ou(gFiSe) + '</tr>'
  str += '<tr>' + ou('FeNi') + ou(lFeNi) + ou(gFeNi) + '</tr>'
  str += '<tr>' + ou('FeSi') + ou(lFeSi) + ou(gFeSi) + '</tr>'
  str += '<tr>' + ou('TiNe') + ou(lTiNe) + ou(gTiNe) + '</tr>'
  str += '<tr>' + ou('TiSe') + ou(lTiSe) + ou(gTiSe) + '</tr>'
  str += '<tr>' + ou('TeNi') + ou(lTeNi) + ou(gTeNi) + '</tr>'
  str += '<tr>' + ou('TeSi') + ou(lTeSi) + ou(gTeSi) + '</tr>'
  str += '</table>'

  names = new Map()
  names.set('INTJ', 'Стратег')
  names.set('INTP', 'Учёный')
  names.set('ENTJ', 'Командир')
  names.set('ENTP', 'Полемист')
  names.set('INFJ', 'Активист')
  names.set('INFP', 'Посредник')
  names.set('ENFJ', 'Тренер')
  names.set('ENFP', 'Борец')
  names.set('ISTJ', 'Администратор')
  names.set('ISFJ', 'Защитник')
  names.set('ESTJ', 'Менеджер')
  names.set('ESTP', 'Консул')
  names.set('ISTP', 'Виртуоз')
  names.set('ISFP', 'Артист')
  names.set('ESTP', 'Делец')
  names.set('ESFP', 'Развлекатель')

  I = Fi + Ti + Ni + Si
  E = Fe + Te + Ne + Se
  N = Ni + Ne
  S = Si + Se
  F = Fi + Fe
  T = Ti + Te
  J = Fe + Te + Ni + Si
  P = Fi + Ti + Ne + Se
  str += '<h3>Тип по буквам</h3>'
  str2 = ''
  if (I > E) { str2 += 'I' } else { str2 += 'E' }
  if (N > S) { str2 += 'N' } else { str2 += 'S' }
  if (F > T) { str2 += 'F' } else { str2 += 'T' }
  if (J > P) { str2 += 'J' } else { str2 += 'P' }
  str += '<table>'
  str += '<tr><td>I</td><td>' + I + '</td><td>' + (I > E ? '>' : '<') + '</td><td>' + E + '</td><td>E</td></tr>'
  str += '<tr><td>N</td><td>' + N + '</td><td>' + (N > S ? '>' : '<') + '</td><td>' + S + '</td><td>S</td></tr>'
  str += '<tr><td>F</td><td>' + F + '</td><td>' + (F > T ? '>' : '<') + '</td><td>' + T + '</td><td>T</td></tr>'
  str += '<tr><td>J</td><td>' + J + '</td><td>' + (J > P ? '>' : '<') + '</td><td>' + P + '</td><td>P</td></tr>'
  str += '</table>'
  str += 'Наиболее вероятный тип по буквам: <b>' + str2 + '</b> (' + names.get(str2) + ')'

  // 7dom + 5aux + 3ter + 1inf + 7dominf + 5auxter + 6dom>inf + 4aux>ter + 5loop + 5grip
  mbti = [
    [7*Ni + 5*Fe + 3*Ti + 1*Se, 'INFJ'],
    [7*Ni + 5*Te + 3*Fi + 1*Se, 'INTJ'],
    [7*Fi + 5*Ne + 3*Si + 1*Te, 'INFP'],
    [7*Ti + 5*Ne + 3*Si + 1*Fe, 'INTP'],
    [7*Si + 5*Fe + 3*Ti + 1*Ne, 'ISFJ'],
    [7*Si + 5*Te + 3*Fi + 1*Ne, 'ISTJ'],
    [7*Fi + 5*Se + 3*Ni + 1*Te, 'ISFP'],
    [7*Ti + 5*Se + 3*Ni + 1*Fe, 'ISTP'],
    [5*Ni + 7*Fe + 1*Ti + 3*Se, 'ENFJ'],
    [5*Ni + 7*Te + 1*Fi + 3*Se, 'ENTJ'],
    [5*Fi + 7*Ne + 1*Si + 3*Te, 'ENFP'],
    [5*Ti + 7*Ne + 1*Si + 3*Fe, 'ENTP'],
    [5*Si + 7*Fe + 1*Ti + 3*Ne, 'ESFJ'],
    [5*Si + 7*Te + 1*Fi + 3*Ne, 'ESTJ'],
    [5*Fi + 7*Se + 1*Ni + 3*Te, 'ESFP'],
    [5*Ti + 7*Se + 1*Ni + 3*Fe, 'ESTP'],
  ]
  mbti.sort(function(a,b) { if (a[0] - b[0] != 0) return a[0] - b[0]; return a[1] < b[1];})
  str += '<h3>Тип по когнитивкам</h3> Модифицированная формула mistypeinvestigator. Самый вероятный тип имеет наибольшее число (как на сакинорве)'
  str += '<table>'
  str += '<tr><th>Тип</th><th>Счёт</th>'
  for (i = 0; i < 16; i += 1) {
    str += '<tr><td>' + mbti[i][1] + '</td><td>' + mbti[i][0] + '</td></tr>'
  }
  str += '</table>'
  str += 'Наиболее вероятный тип по когнитивным функциям: <b>' + mbti[15][1] + '</b>. Возможный разброс баллов от XXX до XXX'
  
  document.getElementById('res').innerHTML = str
}

recalc();  // Initial recalc
