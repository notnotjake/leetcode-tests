# Notes

## Big O Notation

- When you have multiple operations in sequence, the overall complexity is dominated by the **slowest one**
- Constants factor out: O(2n) → O(n), O(4n) → O(n)
- Coefficients don't matter: O(n + n + n) = O(3n) → O(n)
- Only the highest-order term matters: O(n² + n) → O(n²)

## Map

A hash table with O(1) average time for operations, O(n) space.

Methods:
- `map.get(key)` - O(1) - retrieve value
- `map.set(key, value)` - O(1) - store value
- `map.has(key)` - O(1) - check if key exists

Common pattern for counting:
```typescript
map.set(char, (map.get(char) ?? 0) + 1)
```

## Solutions

1. **Sorting approach**: O(n log n) time, O(n) space
2. **HashMap approach**: O(n) time, O(n) space - better time complexity
