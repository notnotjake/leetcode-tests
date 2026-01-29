// O(n) time, O(1) extra space solution
export function productExceptSelf(nums: number[]): number[] {
  const answer: number[] = new Array(nums.length);

  // First pass: build prefix products directly into answer
  // answer[i] = product of all elements to the LEFT of i
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  // Second pass: multiply by suffix products as we go (backwards)
  // No need to store the whole suffix array - just keep a running product
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}
