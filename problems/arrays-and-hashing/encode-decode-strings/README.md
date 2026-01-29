# Encode and Decode Strings

## Problem

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Implement two functions:

- `encode(strs)`: Encodes a list of strings to a single string.
- `decode(s)`: Decodes a single string back to the original list of strings.

## Examples

### Example 1

```
Input: ["lint", "code", "love", "you"]
Output: ["lint", "code", "love", "you"]

Explanation:
encode(["lint", "code", "love", "you"]) -> some encoded string
decode(encoded string) -> ["lint", "code", "love", "you"]
```

### Example 2

```
Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
```

### Example 3

```
Input: [""]
Output: [""]

Explanation: Empty string should be preserved
```

### Example 4

```
Input: []
Output: []

Explanation: Empty array should return empty array
```

## Constraints

- `0 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` contains any possible characters out of 256 valid ASCII characters

## Notes

- The encoded string should be able to be sent over a network and decoded by the receiver.
- You cannot use any serialize methods (like JSON.stringify/parse).
- The algorithm must handle any valid ASCII characters, including delimiters you might consider using.
