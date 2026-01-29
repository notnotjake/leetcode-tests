export function isAnagram(s: string, t: string): boolean {
	// Early return if strings are not equal length
	if (s.length !== t.length) {
		return false
	}

	const counts = new Map<string, number>()

	for (const char of s) {
		counts.set(char, (counts.get(char) ?? 0) + 1)
	}

	for (const char of t) {
		counts.set(char, (counts.get(char) ?? 0) - 1)
	}

	for (const count of counts.values()) {
		if (count !== 0) return false
	}

	return true
}
