import { expect, test, describe } from 'bun:test'
import { encode, decode } from './solution'

describe('Encode and Decode Strings', () => {
	test('example 1: basic words', () => {
		const input = ['lint', 'code', 'love', 'you']
		expect(decode(encode(input))).toEqual(input)
	})

	test('example 2: strings with special characters', () => {
		const input = ['we', 'say', ':', 'yes']
		expect(decode(encode(input))).toEqual(input)
	})

	test('example 3: single empty string', () => {
		const input = ['']
		expect(decode(encode(input))).toEqual(input)
	})

	test('example 4: empty array', () => {
		const input: string[] = []
		expect(decode(encode(input))).toEqual(input)
	})

	test('multiple empty strings', () => {
		const input = ['', '', '']
		expect(decode(encode(input))).toEqual(input)
	})

	test('strings containing delimiter-like characters', () => {
		const input = ['a]b', 'c[d', 'e|f', 'g#h']
		expect(decode(encode(input))).toEqual(input)
	})

	test('strings with numbers', () => {
		const input = ['123', '456', '7890']
		expect(decode(encode(input))).toEqual(input)
	})

	test('strings with newlines and tabs', () => {
		const input = ['hello\nworld', 'foo\tbar', 'baz']
		expect(decode(encode(input))).toEqual(input)
	})

	test('single string', () => {
		const input = ['hello']
		expect(decode(encode(input))).toEqual(input)
	})

	test('strings with spaces', () => {
		const input = ['hello world', 'foo bar baz', ' ', '  ']
		expect(decode(encode(input))).toEqual(input)
	})
})
