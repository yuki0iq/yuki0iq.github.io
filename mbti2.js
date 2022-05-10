function RA(an) {
  n = an.length - 1
  ans = [an[0]]
  for (ij = n; ij > 0; ij -= 1) {
    ans.push(an[ij])
  }
  return ans
}

// Cognitive functions
aNi = ['Ni', 2, 1, 0, 0, -1]
aNe = ['Ne', 2, 1, 0, 0, -1]
aSi = ['Si', 2, 1, 0, 0, -1]
aSe = ['Se', 2, 1, 0, 0, -1]
aFi = ['Fi', 2, 1, 0, 0, -1]
aFe = ['Fe', 2, 1, 0, 0, -1]
aTi = ['Ti', 2, 1, 0, 0, -1]
aTe = ['Te', 2, 1, 0, 0, -1]
// Axes
aNiSe = ['NiSe', 2, 1, 0, 0, -1]
aNeSi = ['NeSi', 2, 1, 0, 0, -1]
aFiTe = ['FiTe', 2, 1, 0, 0, -1]
aFeTi = ['FeTi', 2, 1, 0, 0, -1]
// Preference
aNiP = ['NiP', 2, 1, 0, -1]
aNeP = ['NeP', 2, 1, 0, -1]
aSiP = ['SiP', 2, 1, 0, -1]
aSeP = ['SeP', 2, 1, 0, -1]
aFiP = ['FiP', 2, 1, 0, -1]
aFeP = ['FeP', 2, 1, 0, -1]
aTiP = ['TiP', 2, 1, 0, -1]
aTeP = ['TeP', 2, 1, 0, -1]
// AntiMistype
aNiM = ['NiM', -2, -1, 0, 1]
aNeM = ['NeM', -2, -1, 0, 1]
aSiM = ['SiM', -2, -1, 0, 1]
aSeM = ['SeM', -2, -1, 0, 1]
aFiM = ['FiM', -2, -1, 0, 1]
aFeM = ['FeM', -2, -1, 0, 1]
aTiM = ['TiM', -2, -1, 0, 1]
aTeM = ['TeM', -2, -1, 0, 1]
// usage
aNiU = ['NiU', 2, 1, 0, -1]
aNeU = ['NeU', 2, 1, 0, -1]
aSiU = ['SiU', 2, 1, 0, -1]
aSeU = ['SeU', 2, 1, 0, -1]
aFiU = ['FiU', 2, 1, 0, -1]
aFeU = ['FeU', 2, 1, 0, -1]
aTiU = ['TiU', 2, 1, 0, -1]
aTeU = ['TeU', 2, 1, 0, -1]
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
  ['Ne против Ni', '', 5, 2, [
    ['Я делюсь информацией', [aNe, RA(aNi)], 'Я собираю информацию'],
    ['Мои идеи разнообразны', [aNe, RA(aNi)], 'Мои идеи - углубленное рассмотрение одной идеи'],
    ['Я знаю немного о многом', [aNe, RA(aNi)], 'Я знаю много о малом'],
    ['У меня в основном нет плана, в приоритете скорость реагирования', [aNe, RA(aNi)], 'У меня в основном есть план, в приоритете анализирование'],
    ['Я не могу точно передать свою мысль', [aNe, RA(aNi)], 'Я не могу вообще передать свою мысль - мне сложно начать'],
    ['Я постоянно отвлекаюсь', [aNe, RA(aNi)], 'У меня есть склонности к некропостингу (отвечать на очень старые сообщения, про которые все забыли)'],
    ['В разговоре перескоки между темами - обычное дело', [aNe, RA(aNi)], 'Я обычно не отхожу от темы, но, бывает, не рассказываю полностью, думая, что и так понятно']
    ]],
  ['Se против Si', '', 5, 2, [
    ['Я больше наблюдаю, чем реагирую', [aSi, RA(aSe)], 'Я больше реагирую, чем наблюдаю'],
    ['План моего будущего построен на опыте прошлого', [aSi, RA(aSe)], 'У меня нет плана будущего, я живу в настоящем'],
    ['Я учусь на своих ошибках', [aSi, RA(aSe)], 'Я забываю о своих неудачах'],
    ['В основном я делаю всё одинаково, могу документировать свои действия', [aSi, RA(aSe)], 'Я забываю, какие действия были выполнены, и не стану записывать последовательность'],
    ['Сначала думай, а потом действуй', [aSi, RA(aSe)], 'Типичные богатыри: сначала бьют, а потом спрашивают'],
    ['Лучше получить более сильное удовольствие, но потом', [aSi, RA(aSe)], 'Не откладывай на завтра то, что может принести удовольствие уже сегодня'],
    ['Я буду повторять те действия, которые уже принесли мне радость', [aSi, RA(aSe)], 'Я ищу новые методы получения удовольствия']
    ]],
  ['Fe против Fi', '', 5, 2, [
    ['Мои ценности - это мои ценности', [aFi, RA(aFe)], 'Я полностью разделяю ценности, принятые в обществе'],
    ['Я составляю мнение, ставя в приоритет себя, а не группу', [aFi, RA(aFe)], 'Я составляю мнение, ставя в приоритет группу, а не себя'],
    ['Я осознаю себя больше, чем других', [aFi, RA(aFe)], 'Я понимаю кого угодно лучше, чем себя'],
    ['Я больше сопереживаю, чем сочувствую, и делаю это исходя из своего опыта', [aFi, RA(aFe)], 'Я больше сочувствую, чем сопереживаю, и могу сделать это в любой момент'],
    ['Я - уникальный человек', [aFi, RA(aFe)], 'Я хочу вписаться в общество'],
    ['За мной следят', [aFi, RA(aFe)], 'Я - невидимка'],
    ['Я стараюсь не подстраиваться под людей', [aFi, RA(aFe)], 'Отдельная маска на каждого человека/группу - это я']
    ]],
  ['Te против Ti', '', 5, 2, [
    ['Я навожу порядок вокруг', [aTe, RA(aTi)], 'Я навожу порядок в себе, могу быть неряшливым человеком'],
    ['Я беру на себя ответственность и отвожу приказы. Строгий и контролирующий лидер', [aTe, RA(aTi)], 'В контроле не заинтересован. Сдержанный и менее жёсткий лидер'],
    ['Несдержан, делюсь фактами, быстро делюсь мнением', [aTe, RA(aTi)], 'Редко, но резко вкидываю мнения, после которых ощущаю чувство вины'],
    ['Больше напряжён, чем расслаблен', [aTe, RA(aTi)], 'Больше расслаблен, чем напряжён'],
    ['Важен результат', [aTe, RA(aTi)], 'Важен процесс'],
    ['Есть уверенность в суждениях. Использую язык фактов, черно-белый мир', [aTe, RA(aTi)], 'Неуверенность в мнении. Использую язык выводов, всё можно поменять'],
    ['Факт есть факт', [aTe, RA(aTi)], 'Факт можно поменять']
    ]],
  ['Когнитивные оси - часть 1', 'Fi/Te против Fe/Ti', 5, 2, [
    ['Я считаю, что все люди "сделаны из одного теста"', [aFeTi, RA(aFiTe)], 'Я считаю, что каждый человек индивидуален и уникален'],
    ['В коллективном обсуждении в первую очередь я выясню, какое у кого мнение и как мы можем его скомпоновать', [aFeTi, RA(aFiTe)], 'В коллективном обсуждении в первую очередь я выясню, кто что хочет и как мы можем добиться нужных результатов'],
    ['Люди делают что-то потому, что это имеет для них логический смысл', [aFeTi, RA(aFiTe)], 'Люди делают что-то потому, что они этого хотят'],
    ['Мир кажется очень живым, а я в нём - маленький вкладчик в этот мир', [aFeTi, RA(aFiTe)], 'Мир очень безличный и жёсткий, а я - уязвимый и хрупкий набор потребностей, который должен выживать, чтобы привнести что-то в этот мир']
    ]],
  ['Когнитивные оси - часть 2', 'Ni/Se против Ne/Si', 5, 2, [
    ['Мои наблюдения основаны на одной точке зрения, которая даёт наибольшую отдачу по отношению к текущей ситуации', [aNiSe, RA(aNeSi)], 'Мои наблюдения основаны на нескольких перспективах'],
    ['У меня есть тенденция чрезмерно фиксироваться на каких-то объектах, темах или мыслях', [aNiSe, RA(aNeSi)], 'Я не слишком привязан к рассматриваемым мною объектам, темам и мыслям, зато обладаю неплохой широтой обзора'],
    ['Важно сфокусироваться на одном и принимать решения, приносящие пользу здесь и сейчас', [aNiSe, RA(aNeSi)], 'Важно быть осторожным и иногда даже дотошным, чтобы внести свой вклад в систему, которая может быть и не так полезна здесь и сейчас, но безусловно будет таковой в будущем'],
    ['Я стремлюсь представить или обнаружить один путь решения проблемы, построенный на моих различных впечатлениях о вещах', [aNiSe, RA(aNeSi)], 'Я стремлюсь обнаружить, сопоставить или понять истинную природу вещей, составляя объединяющие элементы между различными творческими взглядами на вещи']
    ]],
  ['Когнитивные оси - часть 3', 'Предпочтения функций по каждой оси', 4, 1, [
    ['Часто рассматриваю последствия и непредвиденные обстоятельства', [aNiP]],
    ['Исследую более глубокий смысл', [aNiP]],
    ['Наслаждаюсь рутиной и планированием', [aSiP]],
    ['Отдаю приоритет полному плану', [aSiP]],
    ['Небрежно отношусь к деталям', [aNeP]],
    ['Нереалистичен и непрактичен', [aNeP]],
    ['Счастлив жить жизнью по прихотям и побуждениям', [aSeP]],
    ['Наслаждаюсь простым разговором', [aSeP]],
    ['Опасаюсь критики', [aFeP]],
    ['Не хочу быть отвергнутым другими', [aFeP]],
    ['Могу работать, даже если несчастлив', [aTeP]],
    ['Ценю людей только за полезность', [aTeP]],
    ['Собственные желания имеют наибольший приоритет', [aFiP]],
    ['Мне бывает сложно объяснить свои ценности', [aFiP]],
    ['Одиночка', [aTiP]],
    ['Мне бывает сложно объяснить ход мыслей', [aTiP]]
    ]],
  ['Метод исключения', '', 4, 1, [
    ['Я не тактилен', [aSeM]],
    ['Избегаю рискованного поведения', [aSeM]],
    ['Игнорирую конкретные доказательства', [aSeM]],
    ['Нет новых идей', [aNeM]],
    ['Отказываюсь от новых возможностей', [aNeM]],
    ['Не могу мыслить или мечтать масштабно', [aNeM]],
    ['Не люблю авторитет', [aSiM]],
    ['Отвергаю прошлое обучение или опыт', [aSiM]],
    ['Соблюдение процедур - проблема', [aSiM]],
    ['Не размышляю о вариантах будущего', [aNiM]],
    ['Не думаю о призвании или цели', [aNiM]],
    ['Не нужна структура', [aNiM]],
    ['Противоречия не интересуют', [aTiM]],
    ['Легко запутываюсь', [aTiM]],
    ['Полагаюсь на порядок и структуру', [aTiM]],
    ['Нечеткое моральное суждение', [aFiM]],
    ['Осторожен к эмоционльной интенсивности', [aFiM]],
    ['Чувства предвзяты и ненадёжны', [aFiM]],
    ['Не являюсь ни лидером, ни планировщиком', [aTeM]],
    ['Медленнен и нерешителен', [aTeM]],
    ['Задумываюсь о вреде от фактов', [aTeM]],
    ['Не знаю о социальных проблемах', [aFeM]],
    ['Ставлю логику в приоритет чувствам других', [aFeM]],
    ['Решаю проблемы знаниями, а не общением', [aFeM]]
    ]],
  ['Проявления когнитивных функций - часть 1', 'Что может тебя удерживать в хорошем настроении?', 4, 1, [
    ['Безопасность и уверенность в жизни', [aSiU]],
    ['Цель и надежда на будущее', [aNiU]],
    ['Жизнь полна веселья', [aSeU]],
    ['Есть много хороших возможностей', [aNeU]],
    ['Разобраться - не проблема', [aTiU]],
    ['Есть четкое понимание желаний и ценностей', [aFiU]],
    ['Можно добиться желаемого', [aTeU]],
    ['Можно добавить доброты', [aFeU]]
    ]],
  ['Проявления когнитивных функций - часть 2', 'Что стоит за твоей ленью?', 4, 1, [
    ['Неохота покидать зону комфорта', [aSiU]],
    ['Нет значимой цели', [aNiU]],
    ['Хочешь только веселиться', [aSeU]],
    ['Легко отвлекаешья на всё', [aNeU]],
    ['Не видишь выгоды', [aTiU]],
    ['Не в настроении делать', [aFiU]],
    ['Хорошо и так, как есть', [aTeU]],
    ['Не станут хвалить', [aFeU]]
    ]],
  ['Проявления когнитивных функций - часть 3', 'В чём причина отсутствия настоящих друзей?', 4, 1, [
    ['Знакомство с новыми людьми выматывает', [aSiU]],
    ['Сложно выйти из своей головы', [aNiU]],
    ['Люди сбивают тебя с толку', [aSeU]],
    ['Люди сдерживают тебя', [aNeU]],
    ['В дружбе нет смысла', [aTiU]],
    ['Никто не оценит тебя', [aFiU]],
    ['Каждый сам за себя', [aTeU]],
    ['Не хочешь стыда и осуждения', [aFeU]]
    ]],
  ['Лупы', 'Лупы - это стрессовое использование первой и третьей функций с игнорированием второй и четвертой', 4, 1, [
    ]],
  ['Грипы', 'Грипы - это стрессовое использование только четвертой функции', 4, 1, [
    ]]
]

for (i = 0; i < question_sets.length; i += 1) {
  shuffle(question_sets[i][4])
}
for (i = 0; i < question_sets.length; i += 1) {
  if (question_sets[i][3] == 2) {
    for (j = 0; j < question_sets[i][4].length; j += 1) {
      if (Math.random() > 0.5) {
        [question_sets[i][4][j][0], question_sets[i][4][j][2]] = [question_sets[i][4][j][2], question_sets[i][4][j][0]]
        for (k = 0; k < question_sets[i][4][j][1].length; k += 1) {
          question_sets[i][4][j][1][k] = RA(question_sets[i][4][j][1][k])
        }
      }
    }
  }
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
  NiM = 0, NeM = 0, SiM = 0, SeM = 0, FiM = 0, FeM = 0, TiM = 0, TeM = 0
  NiU = 0, NeU = 0, SiU = 0, SeU = 0, FiU = 0, FeU = 0, TiU = 0, TeU = 0
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
    for (j = 0; j < question_sets[i][4].length; j += 1) {
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
  str += '<tr>' + ou(NiM) + ou(NeM) + ou(SiM) + ou(SeM) + ou(FiM) + ou(FeM) + ou(TiM) + ou(TeM) + ou('Метод исключения') + '</tr>'
  str += '<tr>' + ou(NiU) + ou(NeU) + ou(SiU) + ou(SeU) + ou(FiU) + ou(FeU) + ou(TiU) + ou(TeU) + ou('Использование') + '</tr>'
  str += '</table>'
  str += 'Когнитивные оси'
  str += '<table>'
  str += '<tr> <th>NiSe</th> <th>NeSi</th> <th>FiTe</th> <th>FeTi</th>'
  str += '<tr>' + ou(NiSe) + ou(NeSi) + ou(FiTe) + ou(FeTi) + '</tr>'
  str += '</table>'
  str += 'Лупы и грипы'
  str += '<table>'
  str += '<tr> <th>Тип</th>'
      + ou('NiFe') + ou('NiTe') + ou('NeFi') + ou('NeTi')
      + ou('SiFe') + ou('SiTe') + ou('SeFi') + ou('SeTi')
      + ou('FiNe') + ou('FiSe') + ou('FeNi') + ou('FeSi')
      + ou('TiNe') + ou('TiSe') + ou('TeNi') + ou('TeSi')
      + '</tr>'
  str += '<tr> <th>Луп</th>'
      + ou(lNiFe ) + ou(lNiTe ) + ou(lNeFi ) + ou(lNeTi )
      + ou(lSiFe ) + ou(lSiTe ) + ou(lSeFi ) + ou(lSeTi )
      + ou(lFiNe ) + ou(lFiSe ) + ou(lFeNi ) + ou(lFeSi )
      + ou(lTiNe ) + ou(lTiSe ) + ou(lTeNi ) + ou(lTeSi )
      + '</tr>'
  str += '<tr> <th>Грип</th>'
      + ou(gNiFe ) + ou(gNiTe ) + ou(gNeFi ) + ou(gNeTi )
      + ou(gSiFe ) + ou(gSiTe ) + ou(gSeFi ) + ou(gSeTi )
      + ou(gFiNe ) + ou(gFiSe ) + ou(gFeNi ) + ou(gFeSi )
      + ou(gTiNe ) + ou(gTiSe ) + ou(gTeNi ) + ou(gTeSi )
      + '</tr>'
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
    + FiP + TiP + NiP + SiP
    + FiM + TiM + NiM + SiM
    + FiU + TiU + NiU + SiU
    + lNiFe + lNiTe + lSiFe + lSiTe + lFiNe + lFiSe + lTiNe + lTiSe
    + gNiFe + gNiTe + gSiFe + gSiTe + gFiNe + gFiSe + gTiNe + gTiSe
  E = Fe + Te + Ne + Se
    + FeP + TeP + NeP + SeP
    + FeM + TeM + NeM + SeM
    + FeU + TeU + NeU + SeU
    + lNeFi + lNeTi + lSeFi + lSeTi + lFeNi + lFeSi + lTeNi + lTeSi
    + gNeFi + gNeTi + gSeFi + gSeTi + gFeNi + gFeSi + gTeNi + gTeSi
  N = Ni + Ne + NiP + NeP + NiM + NeM + NiU + NeU
    + lNiFe + lNiTe + lNeFi + lNeTi + lFeNi + lTeNi + lFiNe + lTiNe
    + gNiFe + gNiTe + gNeFi + gNeTi + gFeNi + gTeNi + gFiNe + gTiNe
  S = Si + Se + SiP + SeP + SiM + SeM + SiU + SeU
    + lSiFe + lSiTe + lSeFi + lSeTi + lFeSi + lTeSi + lFiSe + lTiSe
    + gSiFe + gSiTe + gSeFi + gSeTi + gFeSi + gTeSi + gFiSe + gTiSe
  F = Fi + Fe + FiP + FeP + FiM + FeM + FiU + FeU
    + lNiFe + lNeFi + lSiFe + lSeFi + lFiNe + lFiSe + lFeNi + lFeSi
    + gNiFe + gNeFi + gSiFe + gSeFi + gFiNe + gFiSe + gFeNi + gFeSi
  T = Ti + Te + TiP + TeP + TiM + TeM + TiU + TeU
    + lNiTe + lNeTi + lSiTe + lSeTi + lTiNe + lTiSe + lTeNi + lTeSi
    + gNiTe + gNeTi + gSiTe + gSeTi + gTiNe + gTiSe + gTeNi + gTeSi
  J = Fe + Te + Ni + Si
    + FeP + TeP + NiP + SiP
    + FeM + TeM + NiM + SiM
    + FeU + TeU + NiU + SiU
    + lNiFe + lNiTe + lSiFe + lSiTe + lFeNi + lFeSi + lTeNi + lTeSi
    + gNiFe + gNiTe + gSiFe + gSiTe + gFeNi + gFeSi + gTeNi + gTeSi
  P = Fi + Ti + Ne + Se
    + FiP + TiP + NeP + SeP
    + FiM + TiM + NeM + SeM
    + FiU + TiU + NeU + SeU
    + lNeFi + lNeTi + lSeFi + lSeTi + lFiNe + lFiSe + lTiNe + lTiSe
    + gNeFi + gNeTi + gSeFi + gSeTi + gFiNe + gFiSe + gTiNe + gTiSe
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

  // 7dom + 5aux + 3ter + 1inf + 6domax + 4auxax + 6domp + 4auxp + 5loop + 5grip + 6ndom + 4naux + 7udom + 5uaux
  mbti = [
    [7*Ni + 5*Fe + 3*Ti + 1*Se + 6*NiSe + 4*FeTi + 6*NiP + 4*FeP + 5*lNiFe + 5*gNiFe + 6*NiM + 4*FeM + 7*NiU + 5*FeU, 'INFJ'],
    [7*Ni + 5*Te + 3*Fi + 1*Se + 6*NiSe + 4*FiTe + 6*NiP + 4*TeP + 5*lNiTe + 5*gNiTe + 6*NiM + 4*TeM + 7*NiU + 5*TeU, 'INTJ'],
    [7*Fi + 5*Ne + 3*Si + 1*Te + 6*FiTe + 4*NeSi + 6*FiP + 4*NeP + 5*lFiNe + 5*gFiNe + 6*FiM + 4*NeM + 7*FiU + 5*NeU, 'INFP'],
    [7*Ti + 5*Ne + 3*Si + 1*Fe + 6*FeTi + 4*NeSi + 6*TiP + 4*NeP + 5*lTiNe + 5*gTiNe + 6*TiM + 4*NeM + 7*TiU + 5*NeU, 'INTP'],
    [7*Si + 5*Fe + 3*Ti + 1*Ne + 6*NeSi + 4*FeTi + 6*SiP + 4*FeP + 5*lSiFe + 5*gSiFe + 6*SiM + 4*FeM + 7*SiU + 5*FeU, 'ISFJ'],
    [7*Si + 5*Te + 3*Fi + 1*Ne + 6*NeSi + 4*FiTe + 6*SiP + 4*TeP + 5*lSiTe + 5*gSiTe + 6*SiM + 4*TeM + 7*SiU + 5*TeU, 'ISTJ'],
    [7*Fi + 5*Se + 3*Ni + 1*Te + 6*FiTe + 4*NiSe + 6*FiP + 4*SeP + 5*lFiSe + 5*gFiSe + 6*FiM + 4*SeM + 7*FiU + 5*SeU, 'ISFP'],
    [7*Ti + 5*Se + 3*Ni + 1*Fe + 6*FeTi + 4*NiSe + 6*TiP + 4*SeP + 5*lTiSe + 5*gTiSe + 6*TiM + 4*SeM + 7*TiU + 5*SeU, 'ISTP'],
    [7*Fe + 5*Ni + 3*Se + 1*Ti + 6*FeTi + 4*NiSe + 6*FeP + 4*NiP + 5*lFeNi + 5*gFeNi + 6*FeM + 4*NiM + 7*FeU + 5*NiU, 'ENFJ'],
    [7*Te + 5*Ni + 3*Se + 1*Fi + 6*FiTe + 4*NiSe + 6*TeP + 4*NiP + 5*lTeNi + 5*gTeNi + 6*TeM + 4*NiM + 7*TeU + 5*NiU, 'ENTJ'],
    [7*Ne + 5*Fi + 3*Te + 1*Si + 6*NeSi + 4*FiTe + 6*NeP + 4*FiP + 5*lNeFi + 5*gNeFi + 6*NeM + 4*FiM + 7*NeU + 5*FiU, 'ENFP'],
    [7*Ne + 5*Ti + 3*Fe + 1*Si + 6*NeSi + 4*FeTi + 6*NeP + 4*TiP + 5*lNeTi + 5*gNeTi + 6*NeM + 4*TiM + 7*NeU + 5*TiU, 'ENTP'],
    [7*Fe + 5*Si + 3*Ne + 1*Ti + 6*FeTi + 4*NeSi + 6*FeP + 4*SiP + 5*lFeSi + 5*gFeSi + 6*FeM + 4*SiM + 7*FeU + 5*SiU, 'ESFJ'],
    [7*Te + 5*Si + 3*Ne + 1*Fi + 6*FiTe + 4*NeSi + 6*TeP + 4*SiP + 5*lTeSi + 5*gTeSi + 6*TeM + 4*SiM + 7*TeU + 5*SiU, 'ESTJ'],
    [7*Se + 5*Fi + 3*Te + 1*Ni + 6*NiSe + 4*FiTe + 6*SeP + 4*FiP + 5*lSeFi + 5*gSeFi + 6*SeM + 4*FiM + 7*SeU + 5*FiU, 'ESFP'],
    [7*Se + 5*Ti + 3*Fe + 1*Ni + 6*NiSe + 4*FeTi + 6*SeP + 4*TiP + 5*lSeTi + 5*gSeTi + 6*SeM + 4*TiM + 7*SeU + 5*TiU, 'ESTP'],
  ]
  mbti.sort(function(a,b) { if (a[0] - b[0] != 0) return a[0] - b[0]; return a[1] < b[1];})
  str += '<h3>Тип по когнитивкам</h3> Модифицированная формула mistypeinvestigator. Самый вероятный тип имеет наибольшее число и находится с правого края таблицы'
  str += '<table>'
  str += '<tr>'
  for (i = 0; i < 16; i += 1) { str += ou(mbti[i][1]) }
  str += '</tr>'
  str += '<tr>'
  for (i = 0; i < 16; i += 1) { str += ou(mbti[i][0]) }
  str += '</tr>'
  str += '</table>'
  str += 'Наиболее вероятный тип по когнитивным функциям: <b>' + mbti[15][1] + '</b>. Возможный разброс баллов от -268 до 446'
  
  document.getElementById('res').innerHTML = str
}

recalc();  // Initial recalc
