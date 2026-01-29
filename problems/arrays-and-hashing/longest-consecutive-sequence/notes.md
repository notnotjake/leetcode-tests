# Notes: Longest Consecutive Sequence

## Approach

1. Build a Set of all values for O(1) lookups
2. Find "sequence heads" - numbers where `n - 1` doesn't exist in the set
3. For each head, walk forward counting consecutive numbers
4. Track the maximum length found

## Complexity

- **Time**: O(n) - each element is visited at most twice (once to classify as start/non-start, once in a while loop)
- **Space**: O(n) - for the Set

## Key Learnings

### Amortized Analysis

Even with nested loops, if you can prove each element is visited a bounded number of times _total_ across all iterations, it's still O(n). The while loop inside a for loop looks like O(n²), but since each number belongs to exactly one sequence and we only start from heads, each number is visited at most once in the inner loops.

### "Where do I start processing?"

A common pattern for sequence/range problems: find boundary elements (starts or ends) and only process from there. This avoids redundant traversals. Here, checking `!set.has(n - 1)` identifies sequence heads.

### Trade work between passes

Doing 2-3 O(n) passes is still O(n). Sometimes the trick is splitting the problem: one pass to classify/index, another to process. Don't be afraid of multiple loops if it simplifies the logic and avoids nested O(n) work.

## Initial Mistake

First attempt: for each element, walk forward counting consecutives. This is O(n²) because for input like `[1,2,3,4,5]`, element 1 walks 4 steps, element 2 walks 3 steps, etc.

The fix: only walk forward from sequence heads, so no element is counted more than once across all walks.
