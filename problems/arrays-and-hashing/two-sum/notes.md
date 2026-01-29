# Notes

## Approach

- Hash map: store each number as key, its index as value
- For each element, check if complement (target - current) exists in map
- Time: O(n), Space: O(n)

## Key Lessons

**Be explicit when checking for undefined.** Using `if (value)` fails when `value` is `0` or `""` because those are falsey. Use `if (value !== undefined)` or `map.has(key)` instead.

**Build the map as you iterate, not upfront.** By adding to the map _after_ checking for the complement, you naturally avoid comparing an element to itself, and you guarantee the earlier index is already stored when you find a match.

## Alternative: Two Pointers

1. Sort the array (keeping track of original indices)
2. Left pointer at start, right pointer at end
3. If sum too big, move right pointer left
4. If sum too small, move left pointer right
5. Time: O(n log n), Space: O(1) if sorted in place

Downside for this problem: need to track original indices alongside values since the problem asks for indices, not values.
