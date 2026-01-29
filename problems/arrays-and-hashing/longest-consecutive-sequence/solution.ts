/**
 * Given an unsorted array of integers, return the length of the
 * longest consecutive elements sequence.
 *
 * Must run in O(n) time.
 */
export function longestConsecutive(nums: number[]): number {
	let maxLength = 0;

	// Create set for nums for fast lookup by value (instead of by index)
	const list = new Set(nums);

	// Construct arrry of only the starts (where prev value doesnt exist)
	const starts = nums.filter((n) => !list.has(n - 1));

	// Loop over the starts to find the longest run
	for (const n of starts) {
		let length = 1;

		// Keep increasing length while we can find the next number in set
		while (list.has(n + length)) {
			length += 1;
		}

		// Update max length if this is longest
		maxLength = Math.max(maxLength, length);
	}

	return maxLength;
}

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1, 13, 11]);
