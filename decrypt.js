const encrypted = `V'IR TBG N FRPERG`;

const decryptCaesar = (str, mod) => {
	let decryptedStr = '';
	let currentCharCode = undefined;
	for (let i = 0; i < str.length; i++) {
		currentCharCode = str.charCodeAt(i);
		if (currentCharCode >= 65 && currentCharCode <= 90) {
			if (currentCharCode - mod < 65) {
				currentCharCode += mod;
			} else {
				currentCharCode -= mod;
			}
			decryptedStr += String.fromCharCode(currentCharCode);
		} else {
			decryptedStr += str[i];
		}
	}
	return decryptedStr;
}

console.log(decryptCaesar(encrypted, 13));

// Or email to me directly at $user@inpher.io, where each ascii character
// of $user can be obtained by solving for x and converting to base-128:

// x = 145767 mod 611939
// x = 109572 mod 598463

// const num = findNum();
// const bin = num.toString(2);
// const byteStrings = toChunks(bin, 7).map(chunk => chunk.join(''));
// const bytes = byteStrings.map(str => parseInt(str, 2));
// const str = bytes.map(String.fromCharCode).join('');
// console.log(num, bin, byteStrings, bytes, str);

// function findNum(i=0, lim=1e1000000000) {
//  while (i < lim) {
//   if (i % 611939 === 145767 && i % 598463 === 109572) return i;
//   i += 1;
//  }
// }

// function toChunks(iterable, chunkSize) {
//  const chunks = [];
//  for (const el of iterable) {
//   let buf = chunks[chunks.length - 1];
//   if (!buf || buf.length >= chunkSize) {
//    buf = [];
//    chunks.push(buf);
//   }
//   buf.push(el);
//  }
//  return chunks;
// }

// 243085550 1110011111010011000011101110 [ '1110011', '1110100', '1100001', '1101110' ] [ 115, 116, 97, 110 ] <xxx>