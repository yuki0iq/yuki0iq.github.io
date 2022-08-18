function get_cell_names() {
	const offset_rows = 2;
	const offset_cols = 2;

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
				let _id = question.get('_id');
				let _rev = question.get('_rev') || 0;
				if (_rev) k = question_set.get('cnt_q') - 1 - k;
				cell = [_id + offset_rows, k + offset_cols];
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

	// step 1. batch get
	// step 2. increment
	// step 3. basch update
}
