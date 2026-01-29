import { expect, test, describe } from 'bun:test'
import { isAnagram } from './solution'

describe('Valid Anagram', () => {
	test('example 1: anagram and nagaram are anagrams', () => {
		expect(isAnagram('anagram', 'nagaram')).toBe(true)
	})

	test('example 2: rat and car are not anagrams', () => {
		expect(isAnagram('rat', 'car')).toBe(false)
	})

	test('different lengths are not anagrams', () => {
		expect(isAnagram('a', 'ab')).toBe(false)
	})

	test('empty strings are anagrams', () => {
		expect(isAnagram('', '')).toBe(true)
	})

	test('single character same', () => {
		expect(isAnagram('a', 'a')).toBe(true)
	})

	test('single character different', () => {
		expect(isAnagram('a', 'b')).toBe(false)
	})

	test('same characters different frequencies', () => {
		expect(isAnagram('aacc', 'ccac')).toBe(false)
	})

	test('longer anagram', () => {
		expect(isAnagram('listen', 'silent')).toBe(true)
	})
})
