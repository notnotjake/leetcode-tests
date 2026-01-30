export function isPalindrome(s: string): boolean {
	const norm = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
	const l = norm.length

	const left = norm.slice(0, Math.ceil(l / 2))
	const right = norm
		.slice(l / 2)
		.split('')
		.reverse()
		.join('')

	if (left === right) {
		return true
	} else {
		return false
	}
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
