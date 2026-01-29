export function twoSum(nums: number[], target: number): number[] {
	const numbers = new Map<number, number>();

	for (const [index, value] of nums.entries()) {
		const complement = target - value;

		const c = numbers.get(complement);

		if (c !== undefined) {
			return [c, index];
		}

		numbers.set(value, index);
	}

	return [-1, -1];
}
