import { expect, test, describe } from 'bun:test'
import { isPalindrome } from './solution'

describe('Valid Palindrome', () => {
	test('example 1: "A man, a plan, a canal: Panama"', () => {
		expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
	})

	test('example 2: "race a car"', () => {
		expect(isPalindrome('race a car')).toBe(false)
	})

	test('example 3: " " (single space)', () => {
		expect(isPalindrome(' ')).toBe(true)
	})

	test('single character', () => {
		expect(isPalindrome('a')).toBe(true)
	})

	test('two same characters with space', () => {
		expect(isPalindrome('a a')).toBe(true)
	})

	test('two different characters', () => {
		expect(isPalindrome('ab')).toBe(false)
	})

	test('numbers only palindrome', () => {
		expect(isPalindrome('12321')).toBe(true)
	})

	test('mixed letters and numbers', () => {
		expect(isPalindrome('a1b2b1a')).toBe(true)
	})

	test('empty after removing non-alphanumeric', () => {
		expect(isPalindrome('.,!')).toBe(true)
	})
})
