a1 = ['E1', 2, 1, 0, -1]
a2 = ['E2', 2, 1, 0, -1]
a3 = ['E3', 2, 1, 0, -1]
a4 = ['E4', 2, 1, 0, -1]
a5 = ['E5', 2, 1, 0, -1]
a6 = ['E6', 2, 1, 0, -1]
a7 = ['E7', 2, 1, 0, -1]
a8 = ['E8', 2, 1, 0, -1]
a9 = ['E9', 2, 1, 0, -1]

question_sets = [
  ['Основное желание', '', 4, [
    ['В своей жизни больше всего я стремлюсь к целостности, перфекционичности', [a1]],
    ['Честность и объективность чрезвычайно важны для меня', [a1]],
    ['В своей погоне за идеалами временами я перегибаю палку и становлюсь ужасным перфекционистом', [a1]],
    ['В своей жизни больше всего я стремлюсь к чувству любви', [a2]],
    ['Мой образ любящего и заботливого человека очень важен для меня', [a2]],
    ['Иногда моё желание чувствовать себя любимым перерастает в острую необходимость быть необходимым', [a2]],
    ['В своей жизни больше всего я желаю быть ценным, признанным и желанным', [a3]],
    ['Мой образ успешного человека очень важен для меня', [a3]],
    ['Иногда моё желание казаться успешным превращается в погоню за статусом', [a3]],
    ['В своей жизни больше всего я желаю найти себя и свою значимость, создать личную индивидуальность из собственных переживаний', [a4]],
    ['Мои личные чувства очень важны для меня, так как они формируют мою личность', [a4]],
    ['Иногда моё желание быть собой превращается в потакание своим желаниям', [a4]],
    ['В своей жизни больше всего я желаю быть компетентным', [a5]],
    ['Мои внутренние ресурсы очень важны для меня', [a5]],
    ['Иногда моё желание быть способным и знающим превращается в накапливание бесполезных знаний', [a5]],
    ['В своей жизни больше всего я желаю быть в безопасности, найти поддержку', [a6]],
    ['Быть преданным и верным другим людям очень важно для меня', [a6]],
    ['Иногда моё желание безопасности превращается в чрезмерную привязанность к моим собственным убеждениям', [a6]],
    ['В своей жизни больше всего я желаю быть свободным, удовлетворённым и довольным от того, что все мои потребности удовлетворены', [a7]],
    ['Всегда оставаться в движении очень важно для меня', [a7]],
    ['Иногда моё желание быть счастливым превращается в маниакальное бегство от жизни', [a7]],
    ['В своей жизни больше всего я желаю защитить себя, контролируя свою собственную жизнь и судьбу', [a8]],
    ['Быть сильным и непоколебимым очень важно для меня', [a8]],
    ['Иногда моё желание контролировать свою жизнь превращается в постоянные конфронтации с окружающими', [a8]],
    ['В своей жизни больше всего я желаю сохранить внутреннюю стабильность и душевное спокойствие', [a9]],
    ['Гармония в обществе окружающих меня людей очень важна для меня', [a9]],
    ['Иногда моё желание быть в мире превращается в упрямую небрежность', [a9]]]],
  ['Основные страхи и подсознательные детские желания', '', 4, [
    ['В своей жизни больше всего я боюсь быть плохим, коррумпированным, порочным или дефектным', [a1]],
    ['Нехорошо делать ошибки', [a1]],
    ['В детстве мне приходилось быть очень серьезным и брать на себя взрослую ответственность, играть роль "Героя семьи"', [a1]],
    ['В своей жизни больше всего я боюсь быть ненужным, недостойным любви', [a2]],
    ['Нехорошо ставить свои нужды выше нужд других людей', [a2]],
    ['В детстве я чувствовал, что это моя работа - заботиться о других членах семьи', [a2]],
    ['В своей жизни больше всего я боюсь быть никчёмным и не иметь ценности помимо своих достижений', [a3]],
    ['Нехорошо иметь собственные чувства и индивидуальность', [a3]],
    ['В детстве меня не хвалили за то, какой я есть, и больше внимания уделяли моим достижениям', [a3]],
    ['В своей жизни больше всего я боюсь не иметь индивидуальности и личной (для себя) ценности', [a4]],
    ['Нехорошо быть слишком эффективным или слишком счастливым', [a4]],
    ['В детстве я не находил отражения своих качеств и талантов в родителях. Временами у меня возникали мысли, что они - не мои настоящие родители', [a4]],
    ['В своей жизни больше всего я боюсь быть бесполезным, неспособным или некомпетентным', [a5]],
    ['Нехорошо чувствовать себя комфортно в этом мире', [a5]],
    ['В детстве я чувствовал, что для того, чтобы оставаться в безопасности, мне необходимо отдалиться от семьи в свой собственный мир', [a5]],
    ['В своей жизни больше всего я боюсь остаться без поддержки и руководства, быть не в состоянии выжить без поддержки', [a6]],
    ['Нехорошо себе доверять', [a6]],
    ['В детстве члены семьи не поддерживали моё стремление к независимости, что заставляло меня держаться настороже', [a6]],
    ['В своей жизни больше всего я боюсь попасть в капкан боли и лишений', [a7]],
    ['Нехорошо зависеть от кого-либо в чем-либо', [a7]],
    ['В детстве при возникновении какой-либо проблемы я мгновенно пытался отвлечься на игры', [a7]],
    ['В своей жизни больше всего я боюсь, что другие люди причинят мне вред или будут меня контролировать, нарушат мои права', [a8]],
    ['Нехорошо быть уязвимым и доверять кому-либо', [a8]],
    ['В детстве я часто страдал от чувства отвергнутости и предательства; Из-за своей напористости и рисковости часто делал что-то такое, за что меня наказывали и, чувствуя себя отвергнутым, защищался', [a8]],
    ['В своей жизни больше всего я боюсь потери и отделения, "уничтожения"', [a9]],
    ['Нехорошо отстаивать свои права', [a9]],
    ['В детстве мне приходилось очень часто "исчезать", чтобы не причинять никому беспокойств', [a9]]
    ]],
  ['Манипулирование людьми', '', 4, [
    ['Поправляя других - настаивая, чтобы другие разделяли мои собственные стандарты', [a1]],
    ['Выясняя нужды и желания других - создавая тем самым у них ощущение зависимости', [a2]],
    ['Очаровывая других и принимая тот образ, который "сработает"', [a3]],
    ['Становясь "человеком настроения" и заставляя других "ходить на цыпочках"', [a4]],
    ['Оставаясь поглощённым своими мыслями и эмоционально отстраняясь от других', [a5]],
    ['Жалуясь и проверяя других людей на преданность', [a6]],
    ['Отвлекая внимание других и настаивая, чтобы выполняли мои требования', [a7]],
    ['Доминируя над другими и требуя, чтобы делали, как я говорю', [a8]],
    ['"Отключаясь" и пассивно-агрессивно сопротивляясь другим', [a9]]
    ]],
  ['Красные флаги', 'Красный флаг - это дополнительная боязнь, которая появляется у каждого типа в стрессовом состоянии. По сути, ещё один страх, присущий каждому из типов', 4, [
    ['Мои идеалы на самом деле неправильные и контрпродуктивные', [a1]],
    ['Я отталкиваю от себя друзей или любимых людей', [a2]],
    ['Я проигрываю и все мои претензии пусты и обманчивы', [a3]],
    ['Я разрушаю свою жизнь и растрачиваю возможности', [a4]],
    ['Мне никогда не найти своего места в этом мире и с этими людьми', [a5]],
    ['Своими действиями я причинил вред собственной безопасности', [a6]],
    ['Мои действия причиняют мне лишь одни боль и несчастье', [a7]],
    ['Все оборачиваются против меня и могут мне отомстить', [a8]],
    ['Когда-нибудь действительность заставит меня иметь дело с моими проблемами', [a9]]
    ]],
  ['Общие вопросы', '', 4, [
    ['Я сфокусирован на необходимости быть правильным, организованным и здравомыслящим; на стандартах, улучшении себя и на знании правил', [a1]],
    ['Я управляю своими чувствами путём подавления и отрицания: мои чувства превращаются в деятельность, в желание сделать всё идеально', [a1]],
    ['Я хочу работать в рамках системы и раздражаюсь, когда люди нарушают правила', [a1]],
    ['Я сфокусирован на позитивном представлении о себе, на своих добрых намерениях. "Я хороший, заботливый человек"', [a2]],
    ['Я не хочу видеть свою собственную нуждаемость, разочарование и гнев', [a2]],
    ['Я уделяю чрезмерное внимание нуждам других людей; игнорирую собственные нужды', [a2]],
    ['Я фокусируюсь на необходимости быть эффективным, способным и выдающимся. Фокусируюсь на целях, на том, что надо быть прагматичным и знать, как себя преподнести', [a3]],
    ['Я управляю своими чувствами путём подавления и обращения внимания на стоящие передо мной задачи, на том, чтобы оставаться активным. Достижения нейтрализуют болезненные чувства', [a3]],
    ['Я хочу быть и в рамках системы, и вне её - адаптировать правила и находить короткие пути решения проблемы', [a3]],
    ['Я ищу кого-то, кто бы меня понял и поддержал мою жизнь и мечты. Мне нужно, чтобы меня увидели', [a4]],
    ['Я боюсь, что меня покинут, что никто обо мне не позаботится: что у меня не будет достаточно поддержки для того, чтобы найти себя и стать собой', [a4]],
    ['Я общаюсь с другими, стараясь поддерживать к себе интерес и в то же время не раскрывая многого о себе, играя в некую игру, чтобы заинтересовать сторонников', [a4]],
    ['Я сфокусирован на необходимости иметь полную информацию обо всём, иметь чёткое представление о вещах и на объективных фактах. Во мне есть потребность быть несколько отстранённым', [a5]],
    ['Я управляю своими чувствами путём отделения и абстрагирования от них; я остаюсь занятым и интеллектуальным, как будто эти чувства возникли у кого-то другого', [a5]],
    ['Я отрицаю систему и предпочитаю работать самостоятельно, вне этой системы. Я очень нетерпелив к правилам и процедурам', [a5]],
    ['Я ищу одинаково как независимость, так и поддержку. Мне нужен человек, на которого можно положиться, но также мне необходимо быть "сильным"', [a6]],
    ['Я боюсь остаться покинутым и без поддержки, но также стать слишком зависимым от других', [a6]],
    ['Я всегда стараюсь быть преданным и тем, на кого можно положиться, оставаясь при этом независимым; я и вовлекаюсь в отношения, и в то же время отчуждаюсь и дистанцируюсь', [a6]],
    ['Я фокусируюсь на позитивном опыте, хороших впечатлениях, деятельности, возбуждении и веселье', [a7]],
    ['Я не хочу видеть свою боль и пустоту; свою роль в причинении страданий себе и другим', [a7]],
    ['Я уделяю чрезмерное внимание своим собственным нуждам и быстро устаю от нужд других людей', [a7]],
    ['Я ищу независимости и возможности полагаться на самого себя. Мне нужно как можно меньше зависеть от других, быть самим себе хозяином', [a8]],
    ['Боюсь близости, боюсь стать слишком уязвимым, доверившись кому-то', [a8]],
    ['Стараюсь всегда держать оборону, не позволяя другим людям подходить ко мне слишком близко. Делаю себя жёстче, чтобы защититься от своей боли и от того, что мне нужны другие люди', [a8]],
    ['Я сфокусирован на положительных качествах других людей и всего, что меня окружает. Возможно, я слишком всё идеализирую', [a9]],
    ['Я не хочу видеть проблем с любимыми людьми или со всем тем, что меня окружает', [a9]],
    ['Я чувствую себя переполненным своими собственными нуждами и нуждами других людей. Я не хочу иметь дело ни с тем, ни с другим', [a9]]
    ]],
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
  
  str += '<h3>Исходный результат</h3>'
  str += '<table>'
  str += '<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>Группа</th></tr>'
  // get vans
  g1 = 0, g2 = 0, g3 = 0, g4 = 0, g5 = 0, g6 = 0, g7 = 0, g8 = 0, g9 = 0
  for (i = 0; i < question_sets.length; i += 1) {
    E1 = 0, E2 = 0, E3 = 0, E4 = 0, E5 = 0, E6 = 0, E7 = 0, E8 = 0, E9 = 0
    for (j = 0; j < question_sets[i][3].length; j += 1) {
      i_n = 'i' + i + '-' + j
      v_sub = $('input[name=' + i_n + ']:checked')
      if (v_sub.length != 0) {  // selected
        eval(v_sub[0].value)
        console.log(v_sub[0].value)
      }
    }
    g1 += E1, g2 += E2, g3 += E3, g4 += E4, g5 += E5, g6 += E6, g7 += E7, g8 += E8, g9 += E9
    mx = Math.max(E1, E2, E3, E4, E5, E6, E7, E8, E9)
    str += '<tr>'
    str += out(E1, mx)
    str += out(E2, mx)
    str += out(E3, mx)
    str += out(E4, mx)
    str += out(E5, mx)
    str += out(E6, mx)
    str += out(E7, mx)
    str += out(E8, mx)
    str += out(E9, mx)
    str += '<td>' + question_sets[i][0] + '</td>'
    str += '</tr>'
  }
  E1 = g1, E2 = g2, E3 = g3, E4 = g4, E5 = g5, E6 = g6, E7 = g7, E8 = g8, E9 = g9
  mx = Math.max(E1, E2, E3, E4, E5, E6, E7, E8, E9)
  str += '<tr>'
  str += out(E1, mx)
  str += out(E2, mx)
  str += out(E3, mx)
  str += out(E4, mx)
  str += out(E5, mx)
  str += out(E6, mx)
  str += out(E7, mx)
  str += out(E8, mx)
  str += out(E9, mx)
  str += '<td>ИТОГ</td>'
  str += '</tr>'
  str += '</table>'
  
  A234 = [E2, E3, E4]
  _V234 = Math.max(...A234)
  _T234 = 2 + A234.indexOf(_V234)

  A567 = [E5, E6, E7]
  _V567 = Math.max(...A567)
  _T567 = 5 + A567.indexOf(_V567)

  A891 = [E8, E9, E1]
  _V891 = Math.max(...A891)
  _T891 = 8 + A891.indexOf(_V891)
  if (_T891 == 10) {
    _T891 = 1
  }

  Aall = [E1, E2, E3, E4, E5, E6, E7, E8, E9]
  _Vall = mx
  _Tall = 1 + Aall.indexOf(_Vall)

  str += '<h3>Триады без учёта крыльев</h3>'
  str += '<table>'
  str += '<tr><th>Триада</th><th>Тип</th><th>Значение</th></tr>'
  str += '<tr><td>Сердце</td><td>' + _T234 + '</td><td>счёт ' + _V234 + '</td></tr>'
  str += '<tr><td>Голова</td><td>' + _T567 + '</td><td>счёт ' + _V567 + '</td></tr>'
  str += '<tr><td>Тело  </td><td>' + _T891 + '</td><td>счёт ' + _V891 + '</tr></tr>'
  str += '</table>'
  str += 'Наиболее вероятный эннеатип: <b>' + _Tall + '</b>'
  
  tritype = []
  for (i of [2, 3, 4]) {
    for (j of [5, 6, 7]) {
      for (k of [8, 9, 1]) {
        tritype.push([5*vans[i] + 3*vans[j] + 1*vans[k], i.toString() + j.toString() + k.toString()])  //ijk
        tritype.push([5*vans[i] + 3*vans[k] + 1*vans[j], i.toString() + k.toString() + j.toString()])  //ikj
        tritype.push([5*vans[j] + 3*vans[i] + 1*vans[k], j.toString() + i.toString() + k.toString()])  //jik
        tritype.push([5*vans[j] + 3*vans[k] + 1*vans[i], j.toString() + k.toString() + i.toString()])  //jki
        tritype.push([5*vans[k] + 3*vans[i] + 1*vans[j], k.toString() + i.toString() + j.toString()])  //kij
        tritype.push([5*vans[k] + 3*vans[j] + 1*vans[i], k.toString() + j.toString() + i.toString()])  //kji
      }
    }
  }
  tritype.sort(function(a,b) { if (a[0] - b[0] != 0) return a[0] - b[0]; return a[1] < b[1];})
  str += '<h3>Тритип без учёта крыльев</h3>'
  str += 'Чем больше число, тем больше вероятность'
  str += '<table>'
  for (k = 0; k < 18; k += 1) {
    str += '<tr>'
    for (j = 0; j < 9; j += 1) {
      i = 9 * k + j
      str += '<td>'
      str += tritype[i][1]
      str += ', счёт '
      str += tritype[i][0]
      str += '</td>
    }
    str += '</tr>'
  }
  str += '</table>'
  str += 'Наиболее вероятный тритип: <b>' + tritype[18 * 9 - 1][1] + '</b>'
  
  E1w2 = 3*E1 + E2
  E1w9 = 3*E1 + E9
  E2w1 = 3*E2 + E1
  E2w3 = 3*E2 + E3
  E3w2 = 3*E3 + E2
  E3w4 = 3*E3 + E4
  E4w3 = 3*E4 + E3
  E4w5 = 3*E4 + E5
  E5w4 = 3*E5 + E4
  E5w6 = 3*E5 + E6
  E6w5 = 3*E6 + E5
  E6w7 = 3*E6 + E7
  E7w6 = 3*E7 + E6
  E7w8 = 3*E7 + E8
  E8w7 = 3*E8 + E7
  E8w9 = 3*E8 + E9
  E9w1 = 3*E9 + E1
  E9w8 = 3*E9 + E8
  wings = [
    [E1w2, '1w2'],
    [E1w9, '1w9'],
    [E2w1, '2w1'],
    [E2w3, '2w3'],
    [E3w2, '3w2'],
    [E3w4, '3w4'],
    [E4w3, '4w3'],
    [E4w5, '4w5'],
    [E5w4, '5w4'],
    [E5w6, '5w6'],
    [E6w5, '6w5'],
    [E6w7, '6w7'],
    [E7w6, '7w6'],
    [E7w8, '7w8'],
    [E8w7, '8w7'],
    [E8w9, '8w9'],
    [E9w1, '9w1'],
    [E9w8, '9w8']
  ]
  wings.sort(function(a,b) { if (a[0] - b[0] != 0) return a[0] - b[0]; return a[1] < b[1];})
  str += '<h3>Эннеатип по крыльям</h3>'
  str += 'Чем больше число, тем больше вероятность'
  str += '<table>'
  for (k = 0; k < 2; k += 1) {
    str += '<tr>'
    for (j = 0; j < 9; j += 1) {
      i = 9 * k + j
      str += '<td>'
      str += wings[i][1]
      str += ', счёт '
      str += wings[i][0]
      str += '</td>'
    }
    str += '</tr>'
  }
  str += '</table>'
  str += 'Наиболее вероятный эннеатип: <b>' + wings[17][1] + '</b>'
  
  tritypew = []
  for (i of [[E2w1, '2w1'], [E2w3, '2w3'], [E3w2, '3w2'], [E3w4, '3w4'], [E4w3, '4w3'], [E4w5, '4w5']]) {
    for (j of [[E5w4, '5w4'], [E5w6, '5w6'], [E6w5, '6w5'], [E6w7, '6w7'], [E7w6, '7w6'], [E7w8, '7w8']]) {
      for (k of [[E8w7, '8w7'], [E8w9, '8w9'], [E9w1, '9w1'], [E9w8, '9w8'], [E1w2, '1w2'], [E1w9, '1w9']]) {
        tritypew.push([5*i[0] + 3*j[0] + 1*k[0], i[1] + '-' + j[1] + '-' + k[1]])  //ijk
        tritypew.push([5*i[0] + 3*k[0] + 1*j[0], i[1] + '-' + k[1] + '-' + j[1]])  //ikj
        tritypew.push([5*j[0] + 3*i[0] + 1*k[0], j[1] + '-' + i[1] + '-' + k[1]])  //jik
        tritypew.push([5*j[0] + 3*k[0] + 1*i[0], j[1] + '-' + k[1] + '-' + i[1]])  //jki
        tritypew.push([5*k[0] + 3*i[0] + 1*j[0], k[1] + '-' + i[1] + '-' + j[1]])  //kij
        tritypew.push([5*k[0] + 3*j[0] + 1*i[0], k[1] + '-' + j[1] + '-' + i[1]])  //kji
      }
    }
  }
  tritypew.sort(function(a,b) { if (a[0] - b[0] != 0) return a[0] - b[0]; return a[1] < b[1];})
  str += '<h3>Тритип по крыльям</h3>'
  str += 'Топ-9 вариантов. Чем больше число, тем больше вероятность'
  str += '<table>'
  str += '<tr><th>Тип</th><th>Счёт</th></tr>'
  for (i = 1296 - 9; i < 1296; i += 1) {
    str += '<tr><td>'
    str += tritypew[i][1]
    str += '</td><td>'
    str += tritypew[i][0]
    str += '</td>'
  }
  str += '</table>'
  str += 'Наиболее вероятный тритип: <b>' + tritypew[1295][1] + '</b>'
  
  document.getElementById('res').innerHTML = str
}

recalc();  // Initial recalc
