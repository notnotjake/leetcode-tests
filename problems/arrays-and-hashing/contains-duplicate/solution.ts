export function containsDuplicate(nums: number[]): boolean {
	const elementsSet = new Set(nums)

	return elementsSet.size !== nums.length
}
