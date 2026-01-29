/**
 * Determine if a 9x9 Sudoku board is valid.
 */
function getElseSet(n: number, i: number, arr: Map<number, any>[]) {
	if (arr[i].get(n) !== undefined) {
		throw Error
	} else {
		arr[i].set(n, true)
		return
	}
}

export function isValidSudoku(board: string[][]): boolean {
	const cols = Array.from({ length: 9 }, () => new Map())
	const rows = Array.from({ length: 9 }, () => new Map())
	const boxes = Array.from({ length: 9 }, () => new Map())

	for (const [row, rowItems] of board.entries()) {
		for (const [col, cell] of rowItems.entries()) {
			// Boxes are 3 wide, so we divide by 3 to get relative index
			// We count the row as 3 (0 based)
			// And then the column adds to that (1 based)
			const box = Math.floor(row / 3) * 3 + Math.floor(col / 3)

			const n = parseInt(cell)

			if (cell !== '.' && !isNaN(n)) {
				try {
					getElseSet(n, col, cols)
					getElseSet(n, row, rows)
					getElseSet(n, box, boxes)
				} catch {
					return false
				}
			}
		}
	}

	return true
}
