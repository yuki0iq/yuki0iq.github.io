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

function ljust(s, v) {
  nn = s.length
  for (iii = 0; iii < (v - nn); iii += 1) {
    s = s + ' '
  }
  return s
}

function create(data) {
  // data = [name, desc, cnt, cntans, [name, [ans, d1, d2, ...], name2]]
  str = 'Варианты ответов (если 4 варианта):</br>'
  str += '<ol>'
  str += '<li>Это очень похоже на меня</li>'
  str += '<li>Это немного похоже на меня</li>'
  str += '<li>Это не слишком похоже на меня</li>'
  str += '<li>Совсем не похоже на меня</li>'
  str += '</ol>'
  str += 'Варианты ответов (если 5 вариантов):</br>'
  str += '<ol>'
  str += '<li>Левый вариант очень похож на меня</li>'
  str += '<li>Левый вариант немного похож на меня</li>'
  str += '<li>Оба варианта одинаково схожи со мной</li>'
  str += '<li>Правый вариант немного похож на меня</li>'
  str += '<li>Правый вариант очень похож на меня</li>'
  str += '</ol>'
  str += 'В остальных случаях 1 - наибольшее сходство, большая цифра - наименьшее сходство. Для того, чтобы пропустить вопрос, не отвечай ничего или отвечай 3'
  i = 0
  for (const entry of data) {
    gn = entry[0]
    // add H4
    type = (entry[2] - 1) - (-1)
    cntq = entry[3]
    questions = entry[4]
    str += '<h3>' + entry[0] + '</h3>'
    if (entry[1] != '') {
      str += entry[1] + '</br>'
    }
    // begin table
    str += '<table><tr>'
    str += '<th>No</th>'
    str += '<th>Вопрос</th>'
    // <==== Add columns?
    for (k = 0; k < type; k -= -1) {
      str += '<th>' + (1+k) + '</th>'
    }
    if (cntq == 2) {
      str += '<th>Вопрос</th>'
    }
    str += '</tr>'
    j = 0
    for (const question of questions) {
      tx = question[0]
      // add row
      str += '<tr>'
      str += '<td>' + (1+j) + '</td>'
      str += '<td>' + tx + '</td>'
      for (k = 0; k < type; k -= -1) {
        qn = 'i' + i + '-' + j
        qqq = qn + '-' + k
        resval = ''
        for (kek = 0; kek < question[1].length; kek -= -1) {
          answerval = question[1][kek]
          ansname = answerval[0]
          ansdelta = answerval[k - (-1)]
          resval += ansname + ' += ' + ansdelta + '; '
        }

        str += '<td>'
        str += '<input id="' + qqq + '" name="' + qn + '" value="'
        str += resval
        str += '" type="radio" onclick="recalc()">'
        qw = ''
        if (cntq == 1) {
          if (k == 0) {
            qw = ' (Да)'
          }
          if (k == type - 1) {
            qw = ' (Нет)'
          }
        } else {
          if (k == 0) {
            qw = ' (L)'
          }
          if (k == type - 1) {
            qw = ' (R)'
          }
        }
        str += '<label for="' + qqq + '">' + (1 + k) + qw + '</label>'
        str += '</td>'
      }
      if (cntq == 2) {
        str += '<td>' + question[2] + '</td>'
      }
      str += '</tr>'
      j = j - (-1)
    }
    // end table
    str += '</table>'
    i = i - (-1)
  }
  document.getElementById('test_contents').innerHTML = str;
}

