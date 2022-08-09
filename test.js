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



tr_helper = "" +
	"GET = function(arr, key) { return (new Map(arr)).get(key) || arr[0][1] || '' }\n"+
	"TRANS = function(arr) { return GET(arr, lang) }\n"+
	"TR = function(key) { return TRANS(GET(txt, key)) }\n"

function create2(data, lang, test_ver, authors_test, authors_tr, qc) {
	str = ''

	eval(tr_helper)
	authors_tr = GET(authors_tr, lang)
	txt = [
		['help', [
			['ru',
				p('Версия теста ' + test_ver) +
				p('Авторы теста: ' + authors_test) +
				(authors_tr == '' ? '' : p('Авторы перевода: ' + authors_tr)) +
				p('Этот тест содержит ' + qc + ' вопросов. Тест может быть удобнее проходить с ландшафтной (горизонтальной) ориентацией экрана. Результат автоматически пересчитывается при изменении ответа - можно проходить тест не полностью. При перезагрузке страницы или смене языка введённые ответы пропадают!') +
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
				p('This test is ' + test_ver) +
				p('Test created by ' + authors_test) +
				(authors_tr == '' ? '' : p('Translated by ' + authors_tr)) +
				p('This test has ' + qc + ' questions. Landscape screen orientation may be better for taking this test. Result is recalculated automatically giving you ability to take only a part of this test. Reloading the page or changing its language leads to answers loss!') +
				p('Answer options (when 4):' + ol([
					li('This is really me'),
					li('This looks like me'),
					li('This doesn\'t look like me'),
					li('This is definitely not me')
				])) +
				p('Answer options (when 5):' + ol([
					li('Left is really me'),
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
		['number', [['ru', 'No'], ['en', 'No']]],
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
		cols = [td(TR('number')), td(TR('question'))]
		for (k = 0; k < cnt_answers; k += 1) { cols.push(td(1+k)) }
		if (cnt_questions == 2) { cols.push(td(TR('question'))) }
		rows.push(tr(cols))

		j = 0
		for (const question of questions) {
			question_left = TRANS(GET(question, 'le'))
			question_res = GET(question, 'res')

			cols = [td(1+j), td(question_left)]
			for (k = 0; k < cnt_answers; k += 1) {
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
						radio_text += ' (' + TR('yes') + ')'
					}
					if (k == cnt_answers - 1) {
						radio_text += ' (' + TR('no') + ')'
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

randomize_questions2 = "" +
	"for (i = 0; i < question_sets.length; i += 1) {\n" +
	"	question_set = new Map(question_sets[i])\n" +
	"	questions = question_set.get('questions')\n" +
	"	shuffle(questions)\n" +
	"	if (2 == question_set.get('cnt_q')) {\n" +
	"		for (j = 0; j < questions.length; j += 1) {\n" +
	"			if (Math.random() > 0.5) {\n" +
	"				question = new Map(questions[j])\n" +
	"				left = question.get('le')\n" +
	"				right = question.get('ri')\n" +
	"				res = question.get('res')\n" +
	"				for (k = 0; k < res.length; k += 1) {\n" +
	"					res[k] = RA(res[k])\n" +
	"				}\n" +
	"				question.set('le', right)\n" +
	"				question.set('ri', left)\n" +
	"				question.set('res', res)\n" +
	"				questions[j] = [...question]\n" +
	"			}\n" +
	"		}\n" +
	"	}\n" +
	"	question_set.set('questions', questions)\n" +
	"	question_sets[i] = [...question_set]\n" +
	"}"
pull_results2 = "" +
	"for (i = 0; i < question_sets.length; i += 1) {\n" +
	"	question_set = new Map(question_sets[i])\n" +
	"	questions = question_set.get('questions')\n" +
	"	for (j = 0; j < questions.length; j += 1) {\n" +
	"		v_sub = $('input[name=i' + i + '-' + j + ']:checked')\n" +
	"		if (v_sub.length != 0) {\n" +
	"			eval(v_sub[0].value)\n" +
	"		}\n" +
	"	}\n" +
	"}"

// https://stackoverflow.com/a/26889118
get_lang = "" +
	"let lang = window.navigator.languages ? window.navigator.languages[0] : null;\n" +
	"lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;\n" +
	"let shortLang = lang;\n" +
	"if (shortLang.indexOf('-') !== -1) shortLang = shortLang.split('-')[0];\n" +
	"if (shortLang.indexOf('_') !== -1) shortLang = shortLang.split('_')[0];\n" +
	"langsel = $('select[id=lang]')[0]\n" +
	"res_lang = (langsel.value ? $('option[name=lang]:selected')[0].value : undefined) || shortLang || default_lang\n" +
	"langsel.value = 1\n" +
	"if ($('option[name=lang]:selected')[0]) $('option[name=lang]:selected')[0].selected = false\n" +
	"$('option[value=' + res_lang + ']')[0].selected = true\n" +
	"res_lang"
