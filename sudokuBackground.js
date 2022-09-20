function validSolution(board) {
	let bool = true;
	const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	//containsZero
	board.forEach((line) => {
		if (line.indexOf(0) !== -1) {
			bool = false;
		}
	});

	//row check

	board.forEach((line) => {
		for (const number of numberArray) {
			if (line.indexOf(number) === -1) {
				bool = false;
			}
		}
	});

	//column check
	for (let i = 0; i < 9; i++) {
		for (let j = 1; j < 9; j++) {
			if (board[0][i] === board[j][i]) {
				bool = false;
			}
		}
	}

	//square check

	for (let i = 0; i < 9; i += 3) {
		for (let j = 0; j < 9; j += 3) {
			let array = [];

			for (let k = 0; k < 3; k++) {
				for (let l = 0; l < 3; l++) {
					array.push(board[k + i][l + j]);
				}
			}
			array.sort();

			if (JSON.stringify(array) !== JSON.stringify(numberArray)) {
				bool = false;
			}
		}
	}

	return bool;
}

module.exports = validSolution;
