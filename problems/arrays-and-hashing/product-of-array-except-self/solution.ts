export function productExceptSelf(nums: number[]): number[] {
	const forwardPass: (number | null)[] = Array.from(
		{ length: nums.length },
		() => null,
	);
	const backwardPass: (number | null)[] = Array.from(
		{ length: nums.length },
		() => null,
	);

	// Construct partial product arrays
	nums.forEach((n, i) => {
		forwardPass[i + 1] = n * (forwardPass[i] ?? 1);

		const backwardIndex = nums.length - i - 1;
		backwardPass[backwardIndex - 1] =
			nums[backwardIndex] * (backwardPass[backwardIndex] ?? 1);
	});

	let answer: number[] = [];

	// Assemble answer by multiplying both directional passes from index
	nums.forEach((n, i) => {
		const v = (forwardPass[i] ?? 1) * (backwardPass[i] ?? 1);

		answer.push(v === 0 ? 0 : v); // Ensure we dont use '-0'
	});

	return answer;
}

productExceptSelf([-1, 1, 0, -3, 3]);
