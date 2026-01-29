# Group Anagrams

## Problem

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

## Examples

### Example 1

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Explanation:** The groupings are:

- "bat" has no anagrams
- "nat" and "tan" are anagrams
- "ate", "eat", and "tea" are anagrams

### Example 2

```
Input: strs = [""]
Output: [[""]]
```

### Example 3

```
Input: strs = ["a"]
Output: [["a"]]
```

## Constraints

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters only

## Signature

```typescript
function groupAnagrams(strs: string[]): string[][]
```
