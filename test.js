function create(data) {
  // data: Array of [Name, Questions]
  // Questions: Array of [where, Name]
  str = ''
  i = 0
  for (const entry of data) {
    gn = entry[0]
    // add H4
    questions = entry[1]
    str += '<h4>' + entry[0] + '</h4>'
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
      str += '<td>' + j + '</td>'
      str += '<td>' + tx + '</td>'
      str += '<td><form id="form' + i + '-' + j + '">'
      qqq = 'i' + i + '-' + j + 'a'
      str += '<input id="' + qqq + '" value=2 type="radio"> <label for="' + qqq + '">Точно я</label>'
      qqq = 'i' + i + '-' + j + 'b'
      str += '<input id="' + qqq + '" value=1 type="radio"> <label for="' + qqq + '">Немного похоже</label>'
      qqq = 'i' + i + '-' + j + 'c'
      str += '<input id="' + qqq + '" value=0 type="radio"> <label for="' + qqq + '">Не слишком похоже</label>'
      qqq = 'i' + i + '-' + j + 'd'
      str += '<input id="' + qqq + '" value=-1 type="radio"> <label for="' + qqq + '">Совсем не я</label>'
      str += '</form></td>'
      str += '</tr>'
      j = j - (-1)
    }
    // end table
    str += '</table>'
    i = i - (-1)
  }
  document.getElementById('test_contents').innerHTML = str;
}

create(
  [
    ["Test1", [ ['q1', 1], ['q2', 1], ['q3', 1] ] ],
    ["Test2", [ ['qq', 1], ['qw', 1], ['qe', 1] ] ]
  ]
);
