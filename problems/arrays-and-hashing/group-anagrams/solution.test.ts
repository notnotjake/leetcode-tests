import { expect, test, describe } from "bun:test";
import { groupAnagrams } from "./solution";

// Helper to normalize result for comparison (sort inner arrays and outer array)
function normalize(groups: string[][]): string[][] {
  return groups
    .map((group) => [...group].sort())
    .sort((a, b) => a.join(",").localeCompare(b.join(",")));
}

describe("Group Anagrams", () => {
  test("example 1: multiple anagram groups", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });

  test("example 2: single empty string", () => {
    const input = [""];
    const expected = [[""]];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });

  test("example 3: single character", () => {
    const input = ["a"];
    const expected = [["a"]];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });

  test("all strings are anagrams", () => {
    const input = ["abc", "bca", "cab", "cba"];
    const expected = [["abc", "bca", "cab", "cba"]];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });

  test("no anagrams - all unique", () => {
    const input = ["abc", "def", "ghi"];
    const expected = [["abc"], ["def"], ["ghi"]];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });

  test("multiple empty strings", () => {
    const input = ["", ""];
    const expected = [["", ""]];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });

  test("same letters different counts", () => {
    const input = ["aab", "aba", "baa", "abb", "bab"];
    const expected = [["aab", "aba", "baa"], ["abb", "bab"]];
    expect(normalize(groupAnagrams(input))).toEqual(normalize(expected));
  });
});
