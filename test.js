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
function br() { return _end('br') }
function label(s, f) { return _enclose('label', s, [_param('for', f)]) }
function radio(id, nm, vl, oc) { return _beginv('input', [_param('id', id), _param('name', nm), _param('value', vl), _param('onclick', oc), _param('type', 'radio')]) }
function radiol(id, nm, vl, oc, s) { return radio(id, nm, vl, oc) + label(s, id) }

function create(data) {
	// data = [name, desc, cnt, cntans, [name, [ans, d1, d2, ...], name2]]
	str = ''
	str += p('Варианты ответов (если 4 варианта):')
	str += ol([
		li('Это очень похоже на меня'),
		li('Это немного похоже на меня'),
		li('Это не слишком похоже на меня'),
		li('Совсем не похоже на меня')
	])
	str += p('Варианты ответов (если 5 вариантов):')
	str += ol([
		li('Левый вариант очень похож на меня'),
		li('Левый вариант немного похож на меня'),
		li('Оба варианта одинаково схожи со мной'),
		li('Правый вариант немного похож на меня'),
		li('Правый вариант очень похож на меня'),
	])
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
						radio_text += ' (L)'
					}
					if (k == type - 1) {
						radio_text += ' (R)'
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

