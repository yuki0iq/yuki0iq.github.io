function shuffle(array) {
	for (let iij = array.length - 1; iij > 0; iij--) {
		let jij = Math.floor(Math.random() * (iij + 1));
		[array[iij], array[jij]] = [array[jij], array[iij]];
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

function RA(an) {
	n = an.length - 1
	ans = [an[0]]
	for (ij = n; ij > 0; ij -= 1) {
		ans.push(an[ij])
	}
	return ans
}

function _begin(s, arg='') { return '<' + s + ' ' + arg + '>' }
function _beginv(s, arg=[]) { return _begin(s, arg.join('')) }
function _end(s) { return _begin('/' + s) }
function _enclose(s, v, arg=[]) { return _beginv(s, arg) + v + _end(s) }
function _table(s) { return _enclose('table', s) }
function _tr(s) { return _enclose('tr', s) }
function _ol(s) { return _enclose('ol', s) }
function _param(k, v) { return k + '="' + v + '" ' }

function table(s) { return _table(s.join('')) }
function tr(s) { return _tr(s.join('')) }
function th(s) { return _enclose('th', s) }
function td(s) { return _enclose('td', s) }
function h3(s) { return _enclose('h3', s) }
function bold(s) { return _enclose('b', s) }
function link(ref, s) { return _enclose('a', s, [_param('href', ref)]) }
function ol(s) { return _ol(s.join('')) }
function li(s) { return _enclose('li', s) }
function p(s) { return _enclose('p', s) }
function br() { return _begin('br') }
function label(s, f) { return _enclose('label', s, [_param('for', f)]) }
function radio(id, nm, vl, oc) { return _beginv('input', [_param('id', id), _param('name', nm), _param('value', vl), _param('onclick', oc), _param('type', 'radio')]) }
function radiol(id, nm, vl, oc, s) { return radio(id, nm, vl, oc) + label(s, id) }

function create(data) {
	// data = [name, desc, cnt, cntans, [name, [ans, d1, d2, ...], name2]]
	str = ''
	str += p('Тест может быть удобнее проходить с ландшафтной (горизонтальной) ориентацией экрана')
	str += p('Результат автоматически пересчитывается при изменении ответа - можно проходить тест не полностью')
	str += p('При перезагрузке страницы введённые ответы пропадают!')
	str += p('Варианты ответов (если 4 варианта):' + ol([
		li('Это очень похоже на меня'),
		li('Это немного похоже на меня'),
		li('Это не слишком похоже на меня'),
		li('Совсем не похоже на меня')
	]))
	str += p('Варианты ответов (если 5 вариантов):' + ol([
		li('Левый вариант очень похож на меня'),
		li('Левый вариант немного похож на меня'),
		li('Оба варианта одинаково схожи со мной'),
		li('Правый вариант немного похож на меня'),
		li('Правый вариант очень похож на меня'),
	]))
	str += p('В остальных случаях 1 - наибольшее сходство, большая цифра - наименьшее сходство. Для того, чтобы пропустить вопрос, не отвечай ничего или отвечай 3')

	i = 0
	for (const entry of data) {
		gname = entry[0]
		gdesc = entry[1]
		type = (entry[2] - 1) - (-1)
		cntq = entry[3]
		questions = entry[4]

		str += h3(gname)
		if (entry[1] != '') { str += p(gdesc) }

		rows = []
		cols = [td('No'), td('Вопрос')]
		for (k = 0; k < type; k += 1) { cols.push(td(1+k)) }
		if (cntq == 2) { cols.push(td('Вопрос')) }
		rows.push(tr(cols))

		j = 0
		for (const question of questions) {
			tx = question[0]
			tx2 = (cntq == 2 ? question[2] : '')

			cols = [td(1+j), td(tx)]
			for (k = 0; k < type; k += 1) {
				radio_name = 'i' + i + '-' + j
				radio_id = radio_name + '-' + k
				val = ''
				for (kek = 0; kek < question[1].length; kek += 1) {
					answerval = question[1][kek]
					ansname = answerval[0]
					ansdelta = answerval[k - (-1)]
					val += ansname + ' += ' + ansdelta + '; '
				}

				radio_text = (1+k).toString()
				if (cntq == 1) {
					if (k == 0) {
						radio_text += ' (Да)'
					}
					if (k == type - 1) {
						radio_text += ' (Нет)'
					}
				} else {
					if (k == 0) {
						//radio_text += ' (L)'
					}
					if (k == type - 1) {
						//radio_text += ' (R)'
					}
				}

				cols.push(td(radiol(radio_id, radio_name, val, 'recalc()', radio_text)))
			}
			if (cntq == 2) { cols.push(td(tx2)) }

			rows.push(tr(cols))

			j = j - (-1)
		}
		str += table(rows)

		i = i - (-1)
	}

	document.getElementById('test_contents').innerHTML = str;
}

randomize_questions = "for (i = 0; i < question_sets.length; i += 1) shuffle(question_sets[i][4])\n" +
	"for (i = 0; i < question_sets.length; i += 1) if (question_sets[i][3] == 2) for (j = 0; j < question_sets[i][4].length; j += 1) if (Math.random() > 0.5) {" +
		"[question_sets[i][4][j][0], question_sets[i][4][j][2]] = [question_sets[i][4][j][2], question_sets[i][4][j][0]];" +
		"for (k = 0; k < question_sets[i][4][j][1].length; k += 1) question_sets[i][4][j][1][k] = RA(question_sets[i][4][j][1][k]) }"
create_question_sets = "eval(randomize_questions); create(question_sets)"

pull_results = "for (i = 0; i < question_sets.length; i += 1) for (j = 0; j < question_sets[i][4].length; j += 1)" +
	"{ v_sub = $('input[name=i' + i + '-' + j + ']:checked'); if (v_sub.length != 0) eval(v_sub[0].value) }"



function create2(data, lang, qc) {
	str = ''

	GET = function(arr, key) { return (new Map(arr)).get(key) || arr[0][1] || '' }
	TRANS = function(arr) { return GET(arr, lang) }

	txt = [
		['help', [
			['ru',
				p('Этот тест содержит ' + qc + ' вопросов') +
				p('Тест может быть удобнее проходить с ландшафтной (горизонтальной) ориентацией экрана') +
				p('Результат автоматически пересчитывается при изменении ответа - можно проходить тест не полностью') +
				p('При перезагрузке страницы введённые ответы пропадают!') +
				p('Варианты ответов (если 4 варианта):' + ol([
					li('Это очень похоже на меня'),
					li('Это немного похоже на меня'),
					li('Это не слишком похоже на меня'),
					li('Совсем не похоже на меня')
				])) +
				p('Варианты ответов (если 5 вариантов):' + ol([
					li('Левый вариант очень похож на меня'),
					li('Левый вариант немного похож на меня'),
					li('Оба варианта одинаково схожи со мной'),
					li('Правый вариант немного похож на меня'),
					li('Правый вариант очень похож на меня'),
				])) +
				p('В остальных случаях 1 - наибольшее сходство, большая цифра - наименьшее сходство. Для того, чтобы пропустить вопрос, не отвечай ничего или отвечай 3')
			],
			['en',
				p('This test has ' + qc + ' questions') +
				p('Landscaoe screen orientation may be better for taking this test') +
				p('Result is recalculated automatically giving you ability to take only a part of this test') +
				p('Reloading the page leads to answers loss!') +
				p('Answer options (when 4):' + ol([
					li('This is really me'),
					li('This looks like me'),
					li('This doesn\'t look like me'),
					li('This is definitely not me')
				])) +
				p('Answer options (when 5):' + ol([
					li('Left if really me'),
					li('Left is kinda me'),
					li('Left is same as right'),
					li('Right is kinda me'),
					li('Right is really me'),
				])) +
				p('To skip question don\'t answer or press 3')
			],
		]],
		['question', [['ru', 'Вопрос'], ['en', 'Question']]],
		['yes', [['ru', 'Да'], ['en', 'Yes']]],
		['no', [['ru', 'Нет'], ['en', 'No']]],
		['num', [['ru', 'No'], ['en', 'No']]],
	]

	str += TRANS(GET(txt, 'help'))

	i = 0
	for (const entry of data) {
		group_name = TRANS(GET(entry, 'name'))
		group_desc = TRANS(GET(entry, 'desc'))
		cnt_answers = parseInt(GET(entry, 'cnt_a'))
		cnt_questions = parseInt(GET(entry, 'cnt_q'))
		questions = GET(entry, 'questions')

		str += h3(group_name)
		if (entry[1] != '') { str += p(group_desc) }

		rows = []
		cols = [td(TRANS(GET(txt, 'number'))), td(TRANS(GET(txt, 'question')))]
		for (k = 0; k < cnt_questions; k += 1) { cols.push(td(1+k)) }
		if (cntq == 2) { cols.push(td(TRANS(GET(txt, 'questions')))) }
		rows.push(tr(cols))

		j = 0
		for (const question of questions) {
			question_left = TRANS(GET(question, 'le'))
			question_res = GET(question, 'res')

			cols = [td(1+j), td(question_left)]
			for (k = 0; k < cnt_questions; k += 1) {
				radio_name = 'i' + i + '-' + j
				radio_id = radio_name + '-' + k
				val = ''
				for (const ans_updater of question_res) {
					ans_name = ans_updater[0]
					ans_delta = ans_updater[parseInt(k) + 1]
					val += ans_name + ' += ' + ans_delta + '; '
				}

				radio_text = (1+k).toString()
				if (cnt_questions == 1) {
					if (k == 0) {
						radio_text += ' (' + TRANS(GET(txt, 'yes')) + ')'
					}
					if (k == cnt_answers - 1) {
						radio_text += ' (' + TRANS(GET(txt, 'no')) + ')'
					}
				}

				cols.push(td(radiol(radio_id, radio_name, val, 'recalc()', radio_text)))
			}
			if (cnt_questions == 2) {
				question_right = TRANS(GET(question, 'ri'))
				cols.push(td(question_right))
			}

			rows.push(tr(cols))

			j -= (-1)
		}
		str += table(rows)

		i -= (-1)
	}

	document.getElementById('test_contents').innerHTML = str;
}

randomize_questions2 = ""
pull_results2 = ""
