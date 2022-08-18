function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function rjust(s, v) {
	for (let i = 0; i < (v - s.length); i += 1) s = ' ' + s;
	return s;
}

function ljust(s, v) {
	for (let i = 0; i < (v - s.length); i += 1) s = s + ' ';
	return s;
}

function RA(an) {
	let ans = [an[0]];
	for (let i = an.length - 1; i > 0; i -= 1) ans.push(an[i]);
	return ans;
}

function _begin(s, arg='') { return '<' + s + ' ' + arg + '>'; }
function _beginv(s, arg=[]) { return _begin(s, arg.join('')); }
function _end(s) { return _begin('/' + s); }
function _enclose(s, v, arg=[]) { return _beginv(s, arg) + v + _end(s); }
function _table(s) { return _enclose('table', s); }
function _tr(s) { return _enclose('tr', s); }
function _ol(s) { return _enclose('ol', s); }
function _param(k, v) { return k + '="' + v + '" '; }

function table(s) { return _table(s.join('')); }
function tr(s) { return _tr(s.join('')); }
function th(s) { return _enclose('th', s); }
function td(s) { return _enclose('td', s); }
function h3(s) { return _enclose('h3', s); }
function bold(s) { return _enclose('b', s); }
function link(ref, s) { return _enclose('a', s, [_param('href', ref)]); }
function ol(s) { return _ol(s.join('')); }
function li(s) { return _enclose('li', s); }
function p(s) { return _enclose('p', s); }
function br() { return _begin('br'); }
function label(s, f) { return _enclose('label', s, [_param('for', f)]); }
function radio(id, nm, vl, oc) { return _beginv('input', [_param('id', id), _param('name', nm), _param('value', vl), _param('onclick', oc), _param('type', 'radio')]); }
function radiol(id, nm, vl, oc, s) { return radio(id, nm, vl, oc) + label(s, id); }
function button(s, oc) { return _enclose('button', s, [_param('onclick', oc)]) }

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



function GET(arr, key) {
	if (typeof arr == typeof '1') return arr;
	if (typeof key == typeof '1') return (new Map(arr)).get(key) || arr[0][1] || '';
	let res = undefined;
	let map = new Map(arr);
	for (const k of key) res = res || map.get(k);
	return res || arr[0][1] || '';
}

tr_helper = "" +
	"TRANS = function(arr) { return GET(arr, lang) }\n"+
	"TR = function(key) { return TRANS(GET(txt, key)) }\n";

function create2(data, lang, test_ver, authors_test, authors_tr, qc, sheet) {
	let str = '';

	eval(tr_helper);
	let old_lang = lang;
	lang = lang[0];
	authors_tr = TRANS(authors_tr);
	lang = old_lang;
	let txt = [
		['help', [
			['ru',
				p('Версия теста ' + test_ver) +
				p('Авторы теста: ' + authors_test) +
				(authors_tr == '' ? '' : p('Авторы перевода: ' + authors_tr)) +
				p('Этот тест содержит ' + qc + ' вопросов. Тест может быть удобнее проходить с ландшафтной (горизонтальной) ориентацией экрана. '
					+ (sheet == ''
						? 'Результат автоматически пересчитывается при изменении ответа - можно проходить тест не полностью.'
						: 'Для получения результата нужно нажать на кнопку, тест нужно проходить полностью.')
					+ ' При перезагрузке страницы или смене языка введённые ответы пропадают!') +
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
				p('This test has ' + qc + ' questions. Landscape screen orientation may be better for taking this test. '
					+ (sheet == ''
						? 'Result is recalculated automatically giving you ability to take only a part of this test. '
						: 'You should press the button to get test result. All questions must be answered.')
					+ 'Reloading the page or changing its language leads to answers loss!') +
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
			['uk',
				p('Версія тесту ' + test_ver) +
				p('Автори тесту: ' + authors_test) +
				(authors_tr == '' ? '' : p('Автори перекладу: ' + authors_tr)) +
				p('У цьому тесті ' + qc + ' питань. Тест може бути зручніше проходити з ландшафтної (горизонтальної) орієнтації екрану. Результат автоматично перераховується при зміні відповіді - можна проходити тест не повністю. При перезавантаженні сторінки чи зміні мови введені відповіді зникають ') +
				p('Варіанти відповідей (якщо 4 варіанта):' + ol([
					li('Це дуже схоже на мене'),
					li('Це трохи схоже на мене'),
					li('Це не дуже схоже на мене'),
					li('Це зовсім на мене не схоже ')
				])) +
				p('Варіанти відповідей (якщо 5 варіантів):' + ol([
					li('Лівий варіант дуже схожий на мене'),
					li('Лівий варіант трохи схожий на мене'),
					li('Обидва варіанти однаково схожі'),
					li('Правий варіант трохи схожий на мене'),
					li('Правий варіант дуже схожий на мене'),
				])) +
				p('В інших випадках "1" - найбільша подібність; найбільша цифра - найменша подібність. Для того, щоб пропустити питання, не відповідайте нічого або натискайте "3"')
			],
		]],
		['question', [['ru', 'Вопрос'], ['en', 'Question'], ['uk', 'Питання']]],
		['yes', [['ru', 'Да'], ['en', 'Yes'], ['uk', 'Так']]],
		['no', [['ru', 'Нет'], ['en', 'No'], ['uk', 'Ні']]],
		['number', [['ru', 'No'], ['en', 'No'], ['uk', 'No']]],
		['calc', [['ru', 'Получить результат'], ['en', 'Get result']]],
	];

	str += TRANS(GET(txt, 'help'));

	let i = 0;
	for (const entry of data) {
		let group_name = TRANS(GET(entry, 'name'));
		let group_desc = TRANS(GET(entry, 'desc'));
		let cnt_answers = parseInt(GET(entry, 'cnt_a'));
		let cnt_questions = parseInt(GET(entry, 'cnt_q'));
		let questions = GET(entry, 'questions');

		str += h3(group_name);
		if (entry[1] != '') str += p(group_desc);

		let rows = [];
		let cols = [td(TR('number')), td(TR('question'))];
		for (let k = 0; k < cnt_answers; k += 1) cols.push(td(1+k));
		if (cnt_questions == 2) cols.push(td(TR('question')));
		rows.push(tr(cols));

		let j = 0;
		for (const question of questions) {
			let question_left = TRANS(GET(question, 'le'));
			let question_res = GET(question, 'res');

			let cols = [td(1+j), td(question_left)];
			for (let k = 0; k < cnt_answers; k += 1) {
				let radio_name = 'i' + i + '-' + j;
				let radio_id = radio_name + '-' + k;
				let val = '';
				for (const ans_updater of question_res) {
					let ans_name = ans_updater[0];
					let ans_delta = ans_updater[parseInt(k) + 1];
					val += ans_name + ' += ' + ans_delta + '; ';
				}

				let radio_text = (1+k).toString();
				if (cnt_questions == 1) {
					if (k == 0) radio_text += ' (' + TR('yes') + ')';
					if (k == cnt_answers - 1) radio_text += ' (' + TR('no') + ')';
				}

				cols.push(td(radiol(radio_id, radio_name, val, '_state = 1; upd()', radio_text)));
			}
			if (cnt_questions == 2) {
				let question_right = TRANS(GET(question, 'ri'));
				cols.push(td(question_right));
			}

			rows.push(tr(cols));
			j += 1;
		}

		str += table(rows);
		i += 1;
	}

	if (sheet != '') {
		// add "done" button
		str += button(TR('calc'), 'recalc()')
	}

	document.getElementById('test_contents').innerHTML = str;
}

function assign_ids() {
	let q = 0;
	for (let i = 0; i < question_sets.length; i += 1) {
		let question_set = new Map(question_sets[i]);
		let questions = question_set.get('questions');
		for (let j = 0; j < questions.length; j += 1) {
			let question = new Map(questions[j]);
			question.set('_id', q);
			q += 1;
			questions[j] = [...question];
		}
		question_set.set('questions', questions);
		question_sets[i] = [...question_set];
	}
	return q;
}

function shuffle_questions() {
	for (let i = 0; i < question_sets.length; i += 1) {
		let question_set = new Map(question_sets[i]);
		let questions = question_set.get('questions');
		shuffle(questions);
		if (2 == question_set.get('cnt_q')) {
			for (let j = 0; j < questions.length; j += 1) {
				if (Math.random() > 0.5) {
					let question = new Map(questions[j]);
					let left = question.get('le');
					let right = question.get('ri');
					let res = question.get('res');
					let _rev = question.get('_rev') || 0;
					for (let k = 0; k < res.length; k += 1) res[k] = RA(res[k]);
					question.set('le', right);
					question.set('ri', left);
					question.set('res', res);
					question.set('_rev', 1 - rev);
					questions[j] = [...question];
				}
			}
		}
		question_set.set('questions', questions);
		question_sets[i] = [...question_set];
	}
}

function pull_results2() {
	for (let i = 0; i < question_sets.length; i += 1) {
		let question_set = new Map(question_sets[i]);
		let questions = question_set.get('questions');
		for (let j = 0; j < questions.length; j += 1) {
			let v_sub = $('input[name=i' + i + '-' + j + ']:checked');
			if (v_sub.length != 0) {
				eval(v_sub[0].value);
				cnt += 1;
			}
		}
	}
}

function get_lang() {
	let lang_array = [];
	if ($('select[id=lang]')[0].name == 1) lang_array.push($('option[name=lang]:selected')[0].value);
	if (window.navigator.languages) lang_array = lang_array.concat(window.navigator.languages);
	if (window.navigator.language) lang_array.push(window.navigator.language);
	if (window.navigator.browserLanguage) lang_array.push(window.navigator.browserLanguage);
	if (window.navigator.userLanguage) lang_array.push(window.navigator.userLanguage);
	if (typeof default_lang != 'undefined') lang_array.push(default_lang);
	let lang_arr = [];
	for (let i = 0; i < lang_array.length; i += 1) {
		let lang_name = lang_array[i];
		if ($('option[value="' + lang_name + '"]')[0]) lang_arr.push(lang_name);
		if (lang_name.indexOf('-') !== -1) lang_name = lang_name.split('-')[0];
		if (lang_name.indexOf('_') !== -1) lang_name = lang_name.split('_')[0];
		if ($('option[value="' + lang_name + '"]')[0]) lang_arr.push(lang_name);
	}
	for (const oklang of $('option[name=lang]')) {
		lang_arr.push(oklang.value);
	}
	$('select[id=lang]')[0].name = 1;
	$('option[value="' + lang_arr[0] + '"]')[0].selected = true;
	return lang_arr;
}
