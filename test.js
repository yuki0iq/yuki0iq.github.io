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
  // data: Array of [Name, QuickInfo, Type(0|1), Questions]
  // Questions: Array of [where, Name, (whereno)]
  str = 'Варианты ответов (если 4 варианта):</br>'
  str += '<ol>'
  str += '<li>Это очень похоже на меня</li>'
  str += '<li>Это немного похоже на меня</li>'
  str += '<li>Это не слишком похоже на меня</li>'
  str += '<li>Совсем не похоже на меня</li>'
  str += '</ol></br>'
  str += 'Варианты ответов (если 5 вариантов):</br>'
  str += '<ol>'
  str += '<li>Очень похоже на меня</li>'
  str += '<li>Немного похоже на меня</li>'
  str += '<li>Не могу выбрать</li>'
  str += '<li>Не слишком похоже на меня</li>'
  str += '<li>Совсем не похоже на меня</li>'
  str += '</ol>Для того, чтобы пропустить вопрос, не отвечай ничего или отвечай 3'
  i = 0
  for (const entry of data) {
    gn = entry[0]
    // add H4
    type = (enrty[2] - 1) - (-1)
    questions = entry[3]
    str += '<h3>' + entry[0] + '</h3>'
    if (entry[1] != '') {
      str += entry[1] + '</br>'
    }
    // begin table
    str += '<table><tr>'
    str += '<th>No</th>'
    str += '<th>Вопрос</th>'
    str += '<th>Ответ</th>'
    str += '</tr>'
    j = 0
    for (const question of questions) {
      tx = question[1]
      // add row
      str += '<tr>'
      str += '<td>' + (1+j) + '</td>'
      str += '<td>' + tx + '</td>'
      str += '<td><form id="form' + i + '-' + j + '"><table>'
      qn = 'i' + i + '-' + j
      qqq = qn + 'a'
      str += '<td><input id="' + qqq + '" name="' + qn + '"value=2 type="radio" onclick="recalc()"> <label for="' + qqq + '">1 (Да)</label></td>'
      qqq = qn + 'b'
      str += '<td><input id="' + qqq + '" name="' + qn + '" value=1 type="radio" onclick="recalc()"> <label for="' + qqq + '">2</label></td>'
      qqq = qn + 'c'
      str += '<td><input id="' + qqq + '" name="' + qn + '" value=0 type="radio" onclick="recalc()"> <label for="' + qqq + '">3</label></td>'
      qqq = qn + 'd'
      str += '<td><input id="' + qqq + '" name="' + qn + '" value=-1 type="radio" onclick="recalc()"> <label for="' + qqq + '">4'
      if (type == 1) {
        qqq = qn + 'e'
        str += '</label></td>'
        str += '<td><input id="' + qqq + '" name="' + qn + '" value=-2 type="radio" onclick="recalc()"> <label for="' + qqq + '">5'
      }
      str += ' (Нет)</label></td></table></form></td>'
      str += '</tr>'
      j = j - (-1)
    }
    // end table
    str += '</table>'
    i = i - (-1)
  }
  document.getElementById('test_contents').innerHTML = str;
}

