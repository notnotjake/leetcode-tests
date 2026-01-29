/**
 * Encodes a list of strings to a single string.
 */
export function encode(strs: string[]): string {
	let def: string[] = [];

	for (const val of strs) {
		def.push(val.length.toString());
	}

	return def.join(",") + ":" + strs.join("");
}

/**
 * Decodes a single string back to the original list of strings.
 */
export function decode(s: string): string[] {
	const delimitIndex = s.indexOf(":");

	const def = s.slice(0, delimitIndex).split(",");
	let str = s.slice(delimitIndex + 1);

	let decoded: string[] = [];

	for (const char of def) {
		const n = parseInt(char);

		if (typeof n === "number" && !isNaN(n)) {
			decoded.push(str.slice(0, n));
			str = str.slice(n);
		}
	}

	return decoded;
}

const encodingResult = encode(["lint", "code", "love", "you"]);

console.log(encodingResult);

console.log(decode(encodingResult));
