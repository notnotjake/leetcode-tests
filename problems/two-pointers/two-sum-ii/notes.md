# Notes

## Approach

Two pointers from opposite ends, moving inward based on sum comparison.

## Time Complexity

O(n)

## Space Complexity

O(1)

## Key Insights

1. **Sorted arrays unlock two pointers** - When data is sorted, you can often use left/right pointers instead of a hash map, trading the space for the ordering guarantee.

2. **Deterministic pointer movement** - The sorted property means you *know* which pointer to move. Too small? Left must increase. Too big? Right must decrease. No guessing.
