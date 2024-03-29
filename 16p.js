test_ver = '[ag16p v220819.05]';
default_lang = 'ru';
question_count = '4';
authors_test = link('https://vk.com/itsapartywithmbti', 'тусовка mbti') + ' - yuki0iq, Агасфер';
authors_tr = [
	['ru', ''],
	['en', 'yuki0iq'],
];
sheet = '1'

question_sets = [
	[
		['name', [
			['ru', 'Тест Агасфера'],
			['en', 'Agasfer test'],
		]],
		['desc', [
			['ru', ''],
			['en', ''],
		]],
		['cnt_a', 2],
		['cnt_q', 1],
		['questions', [
			[
				['res', [['E', 1, -1]]],
				['le', [
					['ru', 'Ты говоришь'],
					['en', 'You talk'],
				]],
			],
			[
				['res', [['N', 1, -1]]],
				['le', [
					['ru', 'Ты умеешь думать'],
					['en', 'You can think'],
				]],
			],
			[
				['res', [['T', 1, -1]]],
				['le', [
					['ru', 'Ты убил человека'],
					['en', 'You have killed a person'],
				]],
			],
			[
				['res', [['J', 1, -1]]],
				['le', [
					['ru', 'Ты моешься'],
					['en', 'You bathe'],
				]],
			],
		]],
	],
];
let total_cnt = assign_ids();
shuffle_questions();


function upd() {}

function recalc() {
	let str = '';

	let lang = get_lang();

	cnt = 0, E = 0, N = 0, T = 0, J = 0;
	pull_results2();

	eval(tr_helper);
	let txt = [
		['INTJ', [
			['ru', 'Стратег'],
			['en', 'Architect'],
		]],
		['INTP', [
			['ru', 'Учёный'],
			['en', 'Logician'],
		]],
		['ENTJ', [
			['ru', 'Командир'],
			['en', 'Commander'],
		]],
		['ENTP', [
			['ru', 'Полемист'],
			['en', 'Debater'],
		]],
		['INFJ', [
			['ru', 'Активист'],
			['en', 'Advocate'],
		]],
		['INFP', [
			['ru', 'Посредник'],
			['en', 'Mediator'],
		]],
		['ENFJ', [
			['ru', 'Тренер'],
			['en', 'Protagonist'],
		]],
		['ENFP', [
			['ru', 'Борец'],
			['en', 'Campaigner'],
		]],
		['ISTJ', [
			['ru', 'Администратор'],
			['en', 'Logistician'],
		]],
		['ISFJ', [
			['ru', 'Защитник'],
			['en', 'Defender'],
		]],
		['ESTJ', [
			['ru', 'Менеджер'],
			['en', 'Executive'],
		]],
		['ESFJ', [
			['ru', 'Консул'],
			['en', 'Consul'],
		]],
		['ISTP', [
			['ru', 'Виртуоз'],
			['en', 'Virtuoso'],
		]],
		['ISFP', [
			['ru', 'Артист'],
			['en', 'Adventurer'],
		]],
		['ESTP', [
			['ru', 'Делец'],
			['en', 'Enterpreneur'],
		]],
		['ESFP', [
			['ru', 'Развлекатель'],
			['en', 'Entertainer'],
		]],
		['ans', [
			['ru', 'Тип: '],
			['en', 'Best fit type is '],
		]],
		['fail', [
			['ru', 'Не все вопросы отвечены!'],
			['en', 'Some questions were not answered'],
		]],
	];

	if (cnt != total_cnt) {
		str = TR('fail');
	} else {
		if (_state == 1) {
			_state = 0;
		}

		str2 = ''
		if (E < 0) { str2 += 'I' } else { str2 += 'E' }
		if (N > 0) { str2 += 'N' } else { str2 += 'S' }
		if (T < 0) { str2 += 'F' } else { str2 += 'T' }
		if (J > 0) { str2 += 'J' } else { str2 += 'P' }

		str += p(TR('ans') + bold(str2) + ' ' + TR(str2));
	}

	document.getElementById('res').innerHTML = str;
}

function chlang() {
	let lang = get_lang();
	create2(question_sets, lang, test_ver, authors_test, authors_tr, question_count, sheet);
	recalc();  // Initial recalc
}

chlang();  // Initial set lang + recalc
