export function isPalindrome(s: string): boolean {
	// only letters and numbers, normalized to lowercase
	const norm = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

	if (norm.length < 2) {
		return true // "" and " " are always true
	}

	for (let i = 0; i * 2 < norm.length; i++) {
		const left = norm.at(i) // iterate over each char from left to right
		const right = norm.at(norm.length - i - 1) // iterate from right to left

		if (left !== right) {
			return false
		}
	}

	return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
