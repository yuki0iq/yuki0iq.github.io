function create(data) {
  // data: Array of [Name, QuickInfo, Questions]
  // Questions: Array of [where, Name]
  for (entry of data) {
    entry[1].sort(() => Math.random() - 0.5)
  }
  
  str = ''
  i = 0
  for (const entry of data) {
    gn = entry[0]
    // add H4
    questions = entry[2]
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
      tx = question[0]
      // add row
      str += '<tr>'
      str += '<td>' + (1+j) + '</td>'
      str += '<td>' + tx + '</td>'
      str += '<td><form id="form' + i + '-' + j + '"><table>'
      qn = 'i' + i + '-' + j
      qqq = qn + 'a'
      str += '<td><input id="' + qqq + '" name="' + qn + '"value=2 type="radio" onclick="recalc()"> <label for="' + qqq + '">Точно я</label></td>'
      qqq = qn + 'b'
      str += '<td><input id="' + qqq + '" name="' + qn + '" value=1 type="radio" onclick="recalc()"> <label for="' + qqq + '">Немного похоже</label></td>'
      qqq = qn + 'c'
      str += '<td><input id="' + qqq + '" name="' + qn + '" value=0 type="radio" onclick="recalc()"> <label for="' + qqq + '">Не слишком похоже</label></td>'
      qqq = qn + 'd'
      str += '<td><input id="' + qqq + '" name="' + qn + '" value=-1 type="radio" onclick="recalc()"> <label for="' + qqq + '">Совсем не я</label></td>'
      str += '</table></form></td>'
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
    ["Test1", 'This is first question set, be careful!', [ ['q1', 1], ['q2', 1], ['q3', 1] ] ],
    ["Test2", '', [ ['qq', 1], ['qw', 1], ['qe', 1] ] ]
  ]
);

// temp
function recalc() {
  alert("yes.");
}
