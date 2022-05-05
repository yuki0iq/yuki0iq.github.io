function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function rjust(s, v) {
  nn = s.length
  for (iii = 0; iii < (v - nn); iii += 1) {
    s = ' ' + s
  }
  return s
}

question_sets = [
  ['Ne против Ni', '', [
    [1, 'Я делюсь информацией'],
    [0, 'Я собираю информацию'],
    [1, 'Мои идеи разнообразны'],
    [0, 'Мои идеи - углубленное рассмотрение одной идеи'],
    [1, 'Я знаю немного о многом'],
    [0, 'Я знаю много о малом'],
    [1, 'У меня в основном нет плана, в приоритете скорость реагирования'],
    [0, 'У меня в основном есть план, в приоритете анализирование'],
    [1, 'Я не могу точно передать свою мысль'],
    [0, 'Я не могу вообще передать свою мысль - мне сложно начать'],
    [1, 'Я постоянно отвлекаюсь'],
    [0, 'У меня есть склонности к некропостингу'],
    [1, 'В разговоре перескоки между темами - обычное дело'],
    [0, 'Я обычно не отхожу от темы, но, бывает, не рассказываю полностью, думая, что и так понятно']
    ]],
  ['Se против Si', '', [
    [2, 'Я больше наблюдаю, чем реагирую'],
    [3, 'Я больше реагирую, чем наблюдаю'],
    [2, 'План моего будущего построен на опыте прошлого'],
    [3, 'У меня нет плана будущего, я живу в настоящем'],
    [2, 'Я учусь на своих ошибках'],
    [3, 'Я забываю о своих неудачах'],
    [2, 'В основном я делаю всё одинаково, могу документировать свои действия'],
    [3, 'Я забываю, какие действия были выполнены, и не стану записывать последовательность'],
    [2, 'Сначала думай, а потом действуй'],
    [3, 'Типичные богатыри: сначала бьют, а потом спрашивают'],
    [2, 'Лучше получить более сильное удовольствие, но потом'],
    [3, 'Не откладывай на завтра то, что может принести удовольствие уже сегодня'],
    [2, 'Я буду повторять те действия, которые уже принесли мне радость'],
    [3, 'Я ищу новые методы получения удовольствия']
    ]],
  ['Fe против Fi', '', [
    [4, 'Мои ценности - это мои ценности'],
    [5, 'Я полностью разделяю ценности, принятые в обществе'],
    [4, 'Я составляю мнение, ставя в приоритет себя, а не группу'],
    [5, 'Я составляю мнение, ставя в приоритет группу, а не себя'],
    [4, 'Я осознаю себя больше, чем других'],
    [5, 'Я понимаю кого угодно лучше, чем себя'],
    [4, 'Я больше сопереживаю, чем сочувствую, и делаю это исходя из своего опыта'],
    [5, 'Я больше сочувствую, чем сопереживаю, и могу сделать это в любой момент'],
    [4, 'Я - уникальный человек'],
    [5, 'Я хочу вписаться в общество'],
    [4, 'За мной следят'],
    [5, 'Я - невидимка'],
    [4, 'Я стараюсь не подстраиваться под людей'],
    [5, 'Отдельная маска на каждого человека/группу - это я']
    ]],
  ['Te против Ti', '', [
    [7, 'Я навожу порядок вокруг'],
    [6, 'Я навожу порядок в себе, могу быть неряшливым человеком'],
    [7, 'Я беру на себя ответственность и отвожу приказы. Строгий и контролирующий лидер'],
    [6, 'В контроле не заинтересован. Сдержанный и менее жёсткий лидер'],
    [7, 'Несдержан, делюсь фактами, быстро делюсь мнением'],
    [6, 'Редко, но резко вкидываю мнения, после которых ощущаю чувство вины'],
    [7, 'Больше напряжён, чем расслаблен'],
    [6, 'Больше расслаблен, чем напряжён'],
    [7, 'Важен результат'],
    [6, 'Важен процесс'],
    [7, 'Есть уверенность в суждениях. Использую язык фактов, черно-белый мир'],
    [6, 'Неуверенность в мнении. Использую язык выводов, всё можно поменять'],
    [7, 'Факт есть факт'],
    [6, 'Факт можно поменять']
    ]]
]

for (i = 0; i < question_sets.length; i += 1) {
  //shuffle(question_sets[i][2])
}
create(question_sets)
console.log(question_sets)

// temp
function recalc() {
  str = ''
  
  str += '[Ni ] [Ne ] [Si ] [Se ] [Fi ] [Fe ] [Ti ] [Te ] Группа\n'
  // get vans
  vans = [0, 0, 0, 0, 0, 0, 0, 0]
  for (i = 0; i < question_sets.length; i += 1) {
    ans = [0, 0, 0, 0, 0, 0, 0, 0]
    for (j = 0; j < question_sets[i][2].length; j += 1) {
      i_n = 'i' + i + '-' + j
      f_n = '#form' + i + '-' + j
      v_sub = $('input[name=' + i_n + ']:checked', f_n)
      if (v_sub.length == 0) {  // Not selected
        v_sub = 0
      } else {
        v_sub = -v_sub[0].value
      }
      vans[question_sets[i][2][j][0]] -= v_sub  // yeah, the shit..
      ans[question_sets[i][2][j][0]] -= v_sub
    }
    mx = 0
    for (j = 0; j < 8; j += 1) {
      if (ans[j] > mx) {
        mx = ans[j]
      }
    }
    for (j = 0; j < 8; j += 1) {
      str += rjust(ans[j].toString(), 4)
      if (ans[j] == mx) {
        str += '!'
      } else {
        str += ' '
      }
      str += ' '
    }
    str += question_sets[i][0]
    str += '\n'
  }
  str += '[Ni ] [Ne ] [Si ] [Se ] [Fi ] [Fe ] [Ti ] [Te ] Группа\n'
  mx = 0
  for (j = 0; j < 8; j += 1) {
    if (vans[j] > mx) {
      mx = vans[j]
    }
  }
  for (j = 0; j < 8; j += 1) {
    str += rjust(vans[j].toString(), 4)
    if (vans[j] == mx) {
      str += '!'
    } else {
      str += ' '
    }
    str += ' '
  }
  str += 'ИТОГ'
  str += '\n'
  str += '\n'
  
  /*
funcs = {}
fn = ['Ni', 'Ne', 'Si', 'Se', 'Fi', 'Fe', 'Ti', 'Te']
for i in range(8):
    funcs[fn[i]] = vans[i]
  */
  func = new Map()
  fn = ['Ni', 'Ne', 'Si', 'Se', 'Fi', 'Fe', 'Ti', 'Te']
  for (i = 0; i < 8; i += 1) {
    func.set(fn[i], vans[i])
  }
  
  console.log(func)
  Fi = func.get('Fi'), Fe = func.get('Fe'), Ti = func.get('Ti'), Te = func.get('Te')
  Ni = func.get('Ni'), Ne = func.get('Ne'), Si = func.get('Si'), Se = func.get('Se')
  
  /*
letf = {}
func_to_letter = {
    'Fi': {'I', 'F', 'P'},
    'Fe': {'E', 'F', 'J'},
    'Ti': {'I', 'T', 'P'},
    'Te': {'E', 'T', 'J'},
    'Ni': {'I', 'N', 'J'},
    'Ne': {'E', 'N', 'P'},
    'Si': {'I', 'S', 'J'},
    'Se': {'E', 'S', 'P'} }
for func, c in funcs.items():
    for let in func_to_letter[func]:
        letf[let] = letf.get(let, 0) + c
print()
print('Тип по буквам')
print('I {0} -- {1} E  | '.format(str(letf['I']).rjust(2), str(letf['E']).rjust(2)), 'E' if letf['E'] >= letf['I'] else 'I')
print('N {0} -- {1} S  | '.format(str(letf['N']).rjust(2), str(letf['S']).rjust(2)), 'S' if letf['S'] >= letf['N'] else 'N')
print('F {0} -- {1} T  | '.format(str(letf['F']).rjust(2), str(letf['T']).rjust(2)), 'T' if letf['T'] >= letf['F'] else 'F')
print('J {0} -- {1} P  | '.format(str(letf['J']).rjust(2), str(letf['P']).rjust(2)), 'P' if letf['P'] >= letf['J'] else 'J')
  */
  I = Fi + Ti + Ni + Si
  E = Fe + Te + Ne + Se
  N = Ni + Ne
  S = Si + Se
  F = Fi + Fe
  T = Ti + Te
  J = Fe + Te + Ni + Si
  P = Fi + Ti + Ne + Se
  str += 'Тип по буквам\n'
  str += 'I ' + rjust(I.toString(), 2) + ' -- ' + rjust(E.toString(), 2) + ' E  | '
  if (I > E) {
    str += 'I\n'
  } else {
    str += 'E\n'
  }
  str += 'N ' + rjust(N.toString(), 2) + ' -- ' + rjust(S.toString(), 2) + ' S  | '
  if (N > S) {
    str += 'N\n'
  } else {
    str += 'S\n'
  }
  str += 'F ' + rjust(F.toString(), 2) + ' -- ' + rjust(T.toString(), 2) + ' T  | '
  if (F > T) {
    str += 'F\n'
  } else {
    str += 'T\n'
  }
  str += 'J ' + rjust(J.toString(), 2) + ' -- ' + rjust(P.toString(), 2) + ' P  | '
  if (J > P) {
    str += 'J\n'
  } else {
    str += 'P\n'
  }
  str += '\n'

  /*
mbti = {}
func_to_mbti = {
    'Fi': [('INFP', 7), ('ISFP', 7), ('ENFP', 5), ('ESFP', 5), ('INTJ', 3), ('ISTJ', 3), ('ENTJ', 1), ('ESTJ', 1)],
    'Fe': [('ENFJ', 7), ('ESFJ', 7), ('INFJ', 5), ('ISFJ', 5), ('ENTP', 3), ('ESTP', 3), ('INTP', 1), ('ISTP', 1)],
    'Ti': [('INTP', 7), ('ISTP', 7), ('ENTP', 5), ('ESTP', 5), ('INFJ', 3), ('ISFJ', 3), ('ENFJ', 1), ('ESFJ', 1)],
    'Te': [('ENTJ', 7), ('ESTJ', 7), ('INTJ', 5), ('ISTJ', 5), ('ENFP', 3), ('ESFP', 3), ('INFP', 1), ('ISFP', 1)],
    'Ni': [('INFJ', 7), ('INTJ', 7), ('ENFJ', 5), ('ENTJ', 5), ('ISFP', 3), ('ISTP', 3), ('ESFP', 1), ('ESTP', 1)],
    'Ne': [('ENFP', 7), ('ENTP', 7), ('INFP', 5), ('INTP', 5), ('ESFJ', 3), ('ESTJ', 3), ('ISFJ', 1), ('ISTJ', 1)],
    'Si': [('ISFJ', 7), ('ISTJ', 7), ('ESFJ', 5), ('ESTJ', 5), ('INFP', 3), ('INTP', 3), ('ENFP', 1), ('ENTP', 1)],
    'Se': [('ESFP', 7), ('ESTP', 7), ('ISFP', 5), ('ISTP', 5), ('ENFJ', 3), ('ENTJ', 3), ('INFJ', 1), ('INTJ', 1)]
}
for func, c in funcs.items():
    for ty, m in func_to_mbti[func]:
        mbti[ty] = mbti.get(ty, 0) + c * m
mbti = sorted([(x[1], x[0]) for x in mbti.items()])

print()
print('Тип по когнитивным функциям - формула mistypeinvestigator')
print('\n'.join(map(lambda x: str(x[0]) + ': ' + str(x[1]), mbti)))
  */
  
  // 7a + 5b + 3c + 1d
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
  mbti.sort()
  str += 'Тип по когнитивкам, формула mistypeinvestigator\n'
  for (i = 0; i < 16; i += 1) {
    str += mbti[i][1]
    str += ': '
    str += mbti[i][0]
    if (i == 0) {
      str += ' - наименее вероятный тип'
    }
    if (i == 15) {
      str += ' - наиболее вероятный тип'
    }
    str += '\n'
  }
  
  document.getElementById('res').innerHTML = '<pre>' + str + '</pre>'
}

recalc();  // Initial recalc
