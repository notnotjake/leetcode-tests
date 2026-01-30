function isAlphanumeric(c: string) {
	return /[a-zA-Z0-9]/.test(c)
}

export function isPalindrome(s: string): boolean {
	let left = 0
	let right = s.length - 1

	while (left < right) {
		// Skip non-alphanumeric chars
		while (left < right && !isAlphanumeric(s[left])) {
			left += 1
		}
		while (right > left && !isAlphanumeric(s[right])) {
			right -= 1
		}

		if (s[left].toLowerCase() !== s[right].toLowerCase()) {
			return false
		}

		left += 1
		right -= 1
	}

	return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
