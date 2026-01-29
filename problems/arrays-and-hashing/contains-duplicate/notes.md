# Notes: Contains Duplicate

## Approach

Used a Set to automatically deduplicate the array, then compared the Set size to the original array length. If the Set is smaller, duplicates were dropped, meaning duplicates existed.

```typescript
const elementsSet = new Set(nums);
return elementsSet.size !== nums.length;
```

## Time Complexity

O(n) - Set construction iterates through the array once.

## Space Complexity

O(n) - In the worst case (no duplicates), the Set holds all n elements.

## Key Insights

- Sets inherently reject duplicates - this is the core insight that makes the solution elegant
- Comparing lengths is enough; we don't need to know *which* element was duplicated
- The problem only asks for a boolean, so we don't need to track anything beyond existence of duplicates

## What I Learned

- Initially considered brute force (comparing every pair) but recognized it as O(n²) and inefficient
- Considered sorting but suspected the sort itself has hidden cost (O(n log n)) - correct instinct
- Landed on Sets as the right data structure for this problem
- **Bug encountered:** Initially wrote `set.size === nums.length` which returned the inverse of what was needed. The fix was flipping to `!==`. Lesson: trace through a small example mentally before running tests (e.g., `[1, 1]` → Set size 1, array length 2 → should return true for "has duplicates")

## Alternative Approaches

1. **Brute force:** Nested loops comparing each pair - O(n²) time, O(1) space
2. **Sorting:** Sort first, then check adjacent elements - O(n log n) time, O(1) or O(n) space depending on sort
3. **Hash Map with counting:** Track counts, return true if any count > 1 - O(n) time, O(n) space (same complexity as Set, but more code)
