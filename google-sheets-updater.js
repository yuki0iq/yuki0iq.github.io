function get_cell_names() {
	const offset_rows = 2;
	const cols = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

	let cells = [];  // list of cells to increment; one for each answered question

	for (let i = 0; i < question_sets.length; i += 1) {
		let question_set = new Map(question_sets[i]);
		let questions = question_set.get('questions');
		for (let j = 0; j < questions.length; j += 1) {
			let v_sub = $('input[name=i' + i + '-' + j + ']:checked');
			if (v_sub.length != 0) {
				eval(v_sub[0].value);
				let k = parseInt(v_sub[0].id.substr(1 + v_sub[0].name.length));
				let question = new Map(questions[j]);
				let _id = question.get('_id') + offset_rows;
				let _rev = question.get('_rev') || 0;
				if (_rev) k = question_set.get('cnt_q') - 1 - k;
				cell = cols[k] + _id;
				cells.push(cell);
			}
		}
	}

	return cells;
}

function send() {
	console.log('TODO');

	let cell_names = get_cell_names();
	console.log(cell_names);

	// TODO authorize to google sheets
	const API_KEY = 'AIzaSyAJSLa7fH8JM715HVmhTRCPvnBNl9YaXrs';
	// ...
}
