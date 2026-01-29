export function groupAnagrams(strs: string[]): string[][] {
	const groups = new Map<string, string[]>();

	for (const str of strs) {
		// Sort the string so they all match
		const key = str.split("").sort().join("");

		// Create if new
		if (!groups.has(key)) {
			groups.set(key, []);
		}

		// Set key to include the string
		groups.get(key)!.push(str);
	}

	return [...groups.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
