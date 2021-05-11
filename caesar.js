// TO DO:
// Should have third option for invalid encryption choice input
// RegEx for string to ensure no invalid characters
// Shift number validation: while shiftInput > 26 subtract 26
// ✔︎ Allow spaces
// Write tests

// TO USE:
// node caesar.js [encrypt/decrypt] "my encrypted message here" [shift amount as an integer]
// e.g. node caesar.js encrypt "the quick brown fox" 2 => "vjg swkem dtqyp hqz"

const encryptMessage = process.argv[2] === 'encrypt' ? true : false;
const strInput = process.argv[3].toLowerCase();
const shiftInput = parseInt(process.argv[4]);

const encryptStr = (userStr, shiftAmount) => {
	let encryptedStr = '';
	let shiftedLetterCharCode = undefined;
	for (let i = 0; i < userStr.length; i++) {
		shiftedLetterCharCode = userStr.charCodeAt(i) + shiftAmount;
		if (userStr.charCodeAt(i) === 32) {
			encryptedStr += ' ';
		} else if (shiftedLetterCharCode > 122) {
			encryptedStr += String.fromCharCode(shiftedLetterCharCode - 26);
		} else {
			encryptedStr += String.fromCharCode(shiftedLetterCharCode);
		}
	}
	return encryptedStr;
}

const decryptStr = (userStr, shiftAmount) => {
	let decryptedStr = '';
	let shiftedLetterCharCode = undefined;
	for (let i = 0; i < userStr.length; i++) {
		shiftedLetterCharCode = userStr.charCodeAt(i) - shiftAmount;
		if (userStr.charCodeAt(i) === 32) {
			decryptedStr += ' ';
		} else if (shiftedLetterCharCode < 97) {
			decryptedStr += String.fromCharCode(shiftedLetterCharCode + 26);
		} else {
			decryptedStr += String.fromCharCode(shiftedLetterCharCode);
		}
	}
	return decryptedStr;
}

const result = encryptMessage ? encryptStr(strInput, shiftInput) : decryptStr(strInput, shiftInput);
console.log(result);