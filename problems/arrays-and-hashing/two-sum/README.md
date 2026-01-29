# Two Sum

## Problem

Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.

You may assume that every input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.

## Examples

**Example 1:**

```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] == 2 + 7 == 9
```

**Example 2:**

```
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
Explanation: nums[1] + nums[2] == 2 + 4 == 6
```

**Example 3:**

```
Input: nums = [3, 3], target = 6
Output: [0, 1]
```

## Constraints

- `2 <= nums.length <= 1000`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Exactly one valid answer exists
